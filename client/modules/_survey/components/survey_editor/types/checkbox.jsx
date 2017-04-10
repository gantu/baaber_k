import React from 'react';
import {clone, without, reject, assign} from 'lodash';
import inArray from 'in-array';
import OptionEditor from '../OptionEditor.jsx';
import ReactDOM from 'react-dom';
import UUID from 'uuid';


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
      answers: [],
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

  nameChanged(ev) {
    this.setState({name: ev.target.value});
    this.editUpdate({name: ev.target.value});
  },

  descriptionChanged(ev) {
    this.setState({description: ev.target.value})
    this.editUpdate({description: ev.target.value});
  },

  isChecked(option_id) {
    return inArray(this.state.answers, option_id);
  },

  selected(option_id) {
    if (!inArray(this.state.answers, option_id)) {
      var answers = clone(this.state.answers);
      answers.push(option_id);
      this.setState({answers: answers});
      this.editAnswer(answers);
    }
    else {
      var answers = without(this.state.answers, option_id);
      this.setState({answers: answers});
      this.editAnswer(answers);
    }
  },

  addOption(option_name) {
    var options = clone(this.state.options);
    options.push({
      id: UUID.v4(),
      name: option_name
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
      var options = this.state.options.map(function(option) {
        return (
          <label key={option.id} className="checkbox-inline">
            <input key={option.id} type="checkbox" onClick={this.selected.bind(this, option.id)} checked={this.isChecked(option.id)}/>{option.name}
          </label>
        )
      }.bind(this));

      return (
        <div>
          <h3>{this.state.name}</h3>
          <h4>{this.state.description}</h4>
          {options}
        </div>
      );
    }
    else {
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

          <OptionEditor options={this.state.options} addCallback={this.addOption} removeCallback={this.removeOption} />
        </div>
      );
    }
  }
});