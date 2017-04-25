import React from 'react';
import Editor from '../survey_editor/Editor.jsx';

export default React.createClass({
    
    saveAnswer(answers){
     
        this.props.saveSurveyAnswers(answers,this.props.record.author);
    },
    render(){
        const {record}=this.props;
        return(
        	<div className="coulmn">
            	<Editor editing={false} survey={record} answersCallback={this.saveAnswer} />
           </div>
        );
    }
});