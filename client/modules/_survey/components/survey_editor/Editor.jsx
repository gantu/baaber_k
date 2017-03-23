import React from 'react';
import {clone, merge, reject,find,keys} from 'lodash';
import inArray from 'in-array';
import OptionEditor from './OptionEditor.jsx';
import ReactDOM from 'react-dom';
import UUID from 'uuid';
import types from './types';

export default React.createClass({
  getDefaultProps() {
    return {
      editing: false,
      surveyCallback: null,
      answersCallback: null
    }
  },

  getInitialState() {
    return {
      _id: "",
      name: "",
      description: "",
      author: null,
      createdAt: new Date(),
      lastModified: new Date(),
      isPublished:false,
      questions: [],
      answers: []
    }
  },

  componentDidMount() {
    if (!this.props.editing) {
      this.setState(this.props.survey);
    }
    else {
      if (this.props.survey) {
        this.setState(this.props.survey);
      }
      else {
        this.setState({
          _id: UUID.v4()
        });
      }
    }
  },

  componentWillUpdate(nextProps) {
    if (nextProps.survey !== this.props.survey) {
      this.setState(nextProps.survey);
    }
  },

  nameChanged(ev) {
    this.setState({
      name: ev.target.value
    });
  },

  descriptionChanged(ev) {
    this.setState({
      description: ev.target.value
    });
  },

  createQuestion() {
    var type = ReactDOM.findDOMNode(this.refs.creation_type).value;
    var questions = clone(this.state.questions);
    questions.push({
      id: UUID.v4(),
      name: null,
      description: null,
      required: false,
      type: type,
      options: []
    });
    this.setState({
      questions: questions
    });
  },

  removeQuestion(id) {
    var questions = reject(this.state.questions, function(question) {
      return question.id === id;
    });
    this.setState({questions: questions});
  },

  editQuestion(question) {
    var questions = clone(this.state.questions);
    var old = find(questions, {id: question.id});
    old.name = question.name;
    old.required = question.required;
    old.description = question.description;
    if (question.options) {
      old.options = question.options;
    }
    this.setState({questions: questions});
  },

  answerQuestion(answer) {
    var answers = clone(this.state.answers);
    var old = find(answers, {question: answer.id});
    if (!old) {
      answers.push({
        question: answer.id,
        answer: answer.answer
      });
      this.setState({answers: answers});
    }
    else {
      old.answer = answer.answer;
      this.setState({answers: answers});
    }
  },

  submit() {
    if (this.props.surveyCallback) {
      this.props.surveyCallback({
        _id: this.state._id,
        name: this.state.name,
        description: this.state.description,
        author: this.state.author,
        createdAt: this.state.createdAt,
        lastModified: this.state.lastModified,
        isPublished: this.state.isPublished,
        questions: this.state.questions
        
      });
    }

    if (this.props.answersCallback) {
      this.props.answersCallback({
        survey_id: this.state._id,
        answers: this.state.answers
      });
    }
  },

  render() {
    var questions = this.state.questions.map(function(question) {
      var parts = [];
      if (inArray(keys(types), question.type)) {
        parts.push(React.createElement(types[question.type], merge(clone(question), {
          editing: this.props.editing,
          editCallback: this.editQuestion,
          answerCallback: this.answerQuestion
        })));
      }
      if (this.props.editing) {
        parts.push(
          <button className="btn btn-danger" onClick={this.removeQuestion.bind(this, question.id)}>Remove question</button>
        );
      }
      return parts;
    }.bind(this));

    if (!this.props.editing) {
      return (
        <div>
          <h2>{this.state.name}</h2>
          <h3>{this.state.description}</h3>
          
          <hr />
          {questions}
          <br />
          <button className="btn btn-success" onClick={this.submit}>Submit</button>
        </div>
      );
    }
    else {
      return (
        <div>
          <h3>Create survey</h3><hr />
          <div className="row">
            <div className="col-md-9">
              <div className="form-group">
                <label>Survey name</label>
                <input type="text" className="form-control" placeholder="Survey name" value={this.state.name} onChange={this.nameChanged}/>
              </div>
              <div className="form-group">
                <label>Survey description</label>
                <textarea rows="3" onChange={this.descriptionChanged} className="form-control">{this.state.description}</textarea>
              </div>
            </div>
            <div className="col-md-3">
              <div className="panel panel-primary">
                <div className="panel-heading">Create question</div>
                <div className="panel-body">
                  <select className="form-control" ref="creation_type">
                    {keys(types).map(function(type) {
                      return <option value={type}>{type}</option>;
                    })}
                  </select>
                  <br />
                  <button className="btn btn-primary" onClick={this.createQuestion}>Create question</button>
                </div>
              </div>
            </div>
          </div>
          {questions}
          {this.props.children}
          <br />
          <button className="btn btn-success" onClick={this.submit}>Submit</button>
        </div>
      );
    }
  }
});