import React from 'react';
import {assign} from 'lodash';

export default React.createClass({
    getDefaultProps(){
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
          answer: null
        }
  },

  componentDidMount() {
    this.setState({
      id: this.props.id,
      name: this.props.name,
      required: this.props.required,
      description: this.props.description
    });
  },

  answerChanged(ev) {
    this.setState({
      answer: ev.target.value
    });
    this.editAnswer(ev.target.value);
  },

  editUpdate(updates) {
    if (this.props.editCallback) {
      this.props.editCallback(assign({
        id: this.state.id,
        name: this.state.name,
        required: this.state.required,
        description: this.state.description
      }, updates))
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
    this.setState({description: ev.target.value});
    this.editUpdate({description: ev.target.value});
  },

  render() {
    if (!this.props.editing) {
      return (
        <div>
          <h3>{this.state.name}</h3>
          <h4>{this.state.description}</h4>
          <textarea className="form-control" rows="3" onChange={this.answerChanged}>{this.state.answer}</textarea>
        </div>
      );
    }
    else {
      return (
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
      );
    }
  }
});

