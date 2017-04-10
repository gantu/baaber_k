import React from 'react';
import ReactDOM from 'react-dom';
import UUID from 'uuid';
import {clone,reject,assign} from 'lodash';



export default React.createClass({
  getDefaultProps() {
    return {
      editing: false,
      answerCallback: null,
      editCallback: null
    };
  },

  getInitialState() {
    return {
      id: null,
      name: null,
      required: false,
      description: null,
      answer: null,
      options: []
    }
  },

  componentDidMount() {
    this.setState({
      id: this.props.id,
      name: this.props.name,
      required: this.props.required,
      description: this.props.description,
      options: this.props.options
    });
    if (this.props.options.length > 0 && this.props.id && this.props.answerCallback) {
      this.props.answerCallback({
        id: this.props.id,
        answer: this.props.options[0].id
      });
    }
  },

  editUpdate(updates) {
    if (this.props.editCallback) {
      this.props.editCallback(assign({
        id: this.state.id,
        name: this.state.name,
        required: this.state.required,
        description: this.state.description,
        options: this.state.options
      }, updates));
    }
  },

  editAnswer(answer) {
    if (this.props.answerCallback) {
      this.props.answerCallback({
        id: this.state.id,
        answer: answer
      });
    }
  },

  answerChanged(ev) {
    this.setState({
      answer: ev.target.value
    });
    this.editAnswer(ev.target.value);
  },

  nameChanged(ev) {
    this.setState({
      name: ev.target.value
    });
    this.editUpdate({name: ev.target.value});
  },

  descriptionChanged(ev) {
    this.setState({
      description: ev.target.value
    });
    this.editUpdate({description: ev.target.value});
  },

  addOption() {
    var option = ReactDOM.findDOMNode(this.refs.option_name).value;
    var options = clone(this.state.options);
    options.push({
      id: UUID.v4(),
      name: option
    });
    this.setState({options: options});
    this.editUpdate({options: options});
  },

  removeOption(option_id) {
    var options = reject(this.state.options, function(option) {
      return option.id === option_id;
    });
    this.setState({options: options});
    this.editUpdate({options: options});
  },

  render() {
    if (!this.props.editing) {
      var options = (
        <select className="form-control" selected={this.state.answer} onChange={this.answerChanged}>
          {this.state.options.map(function(option) {
            return <option key={option.id} value={option.id}>{option.name}</option>;
          }.bind(this))}
        </select>
      );
      return (
        <div>
          <h3>{this.state.name}</h3>
          <h4>{this.state.description}</h4>
          {options}
        </div>
      );
    }
    else {
      var options = (
        <ul className="list-group">
          {this.state.options.map(function(option) {
            return <li  key={option.id} className="list-group-item" onClick={this.removeOption.bind(this, option.id)}>{option.name}</li>;
          }.bind(this))}
        </ul>
      )
      return (
        <div>
          <form>
            <div className="form-group">
              <label>Вопрос</label>
              <input type="text" className="form-control" placeholder="Вопрос" onChange={this.nameChanged} value={this.state.name}/>
            </div>
            <div className="form-group">
              <label>Описание</label>
              <input type="text" className="form-control" placeholder="Описание" onChange={this.descriptionChanged} value={this.state.description}/>
            </div>
          </form>
          <div className="row">
            <div className="col-md-6">
              <div className="panel panel-default">
                <div className="panel-heading">Добавить вариант</div>
                <div className="panel-body">
                  <div className="form-group">
                    <label>Вариант ответа</label>
                    <input type="text" className="form-control" placeholder="Вариант ответа" ref="option_name" />
                  </div>
                  <br />
                  <button className="btn btn-default" onClick={this.addOption}>Добавить</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="panel panel-default">
                <div className="panel-heading">Сохраненные варианты</div>
                <div className="panel-body">
                  <p>Ниже приведены текущие варианты этого вопроса. <br/><b>Вы можете удалить параметры, нажав на них</b></p>
                  {options}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
});