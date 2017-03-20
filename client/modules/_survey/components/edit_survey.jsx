import React from 'react';
import Sidebar from './sidebar.jsx';
import Editor from './survey_editor/Editor.jsx';



export default React.createClass( {

    
  saveSurvey(data){
      this.props.saveSurvey(data)
  },
    
  render() {
      const {record}=this.props;
      return (      
        <div className="bs-docs-section clearfix">
          <div className="row">
            <Sidebar handleClick={this.handleClick} />
            <div className="col-md-9">
              <Editor editing={true} surveyCallback = {this.saveSurvey} survey={record}/>
            </div>
          </div>
        </div>
      );
    
  }
});
