import OptionEditor from '../OptionEditor.jsx';
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

  selected(option_id) {
    this.setState({
      answer: option_id
    });
    this.editAnswer(option_id);
  },

  isChecked(option_id) {
    return this.state.answer === option_id;
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
          <label key={option.id} className="radio-inline">
            <input key={option.id} type="radio" onClick={this.selected.bind(this, option.id)} checked={this.isChecked(option.id)}/>{option.name}
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
              <label>Question name</label>
              <input type="text" className="form-control" placeholder="Question name" onChange={this.nameChanged} value={this.state.name}/>
            </div>
            <div className="form-group">
              <label>Question description</label>
              <input type="text" className="form-control" placeholder="Question description" onChange={this.descriptionChanged} value={this.state.description}/>
            </div>
          </form>
          <OptionEditor options={this.state.options} addCallback={this.addOption} removeCallback={this.removeOption} />
        </div>
      );
    }
  }
});
