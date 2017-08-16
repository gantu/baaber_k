import React from 'react';
import {clone, without} from 'lodash';
import inArray from 'in-array';

export default React.createClass({

	getInitialState(){
		return {
			question:this.props.survey.questions[0],
			answers:[] 	
		};
	},
	isChecked(option_id){
		return inArray(this.state.answers, option_id);
	},

	valueChange(event){
		event.preventDefault();
		const option=event.target.value;
		var a=this.props.survey.questions.filter(function(q){
			return 	q.id===option;
		});
		
		this.setState({
			question:a[0],
			answers:[]
		});
	},
	onChecked(option_id){
		if(!inArray(this.state.answers,option_id)){
			var answers = clone(this.state.answers);
			answers.push(option_id);
			this.setState({answers:answers});
		}else{
			var answers=without(this.state.answers,option_id);
			this.setState({answers:answers});
		}
	},
	applyFilter(event){
		event.preventDefault();
		var filter={
			question:this.state.question.id,
			answers:this.state.answers
		};
		this.props.applyFilter(filter);
	},

	render(){
		const {survey}=this.props;

		return(
			<div>

				<h4>Please select question to add filter</h4>
				<div>
					<select className="form-control input-sm" ref="filter-type" onChange={this.valueChange}>
						{survey.questions.map(question=>(
							<option id={question.id} value={question.id}>{question.name}</option>
						))}
					</select>
				</div>
				<div>
				{ this.state.question && <ul> { this.state.question.options.map(option=>(
					<li key={option.id}>
						
						<input  type="checkbox" name={option.id} value={option.id} onChange={this.onChecked.bind(this,option.id)} isChecked={this.isChecked(option.id)}/>
						<label  for={option.id} className="checkbox-inline">{option.name}</label>
						
					</li>
				))}</ul>}
				<button type="button" onClick={this.applyFilter}> Apply Filter</button>
				</div>

			</div>

		);
	}
});