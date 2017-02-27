import React from 'react';
import Question from './question.jsx';


export default React.createClass({


	getInitialState(){
		return {
			questionType:""
		};
	},

	handleQuestionTypeChange(event){
		event.preventDefault();
		this.setState({questionType:event.target.value});
	},


	render(){
		return(
			<div className="panel panel-default">
				<div className="panel-heading">
					Toolbar
				</div>
				<div className="panel-body">
					<div className="row">
						<div className="col1">
							<div className="input-group">
								<label>Select question type:</label>
      							<select id="Question" onChange={this.handleQuestionTypeChange} value={this.state.value}>
								  <option value="rating">Rating</option>
								  <option value="select">Select</option>
								  <option value="Comment">Comment</option>
								</select>

      							<Question qType={this.state.questionType} />
      							
    						</div>
						</div>
					</div>
				</div>
				<div className="panel-footer">
					<div className="btn-group">
						<button className="btn btn-primary">+Question</button>
						
					</div>
					
				</div>
			</div>
		);
	}
});