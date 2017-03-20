import React from 'react';
import Editor from '../survey_editor/Editor.jsx';

export default React.createClass({
    
    saveAnswer(answers){
        console.log(answers);
    },
    render(){
        const {record}=this.props;
        return(
            <Editor editing={false} survey={record} answersCallback={this.saveAnswer} />
        );
    }
});