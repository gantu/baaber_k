import React from 'react';
import Sidebar from './sidebar.jsx';

import Editor from './survey_editor/Editor.jsx';

export default React.createClass( {
    addSurvey(data){
      this.props.addSurvey(data)
        },

  render() {
      return(
        <div className="bs-docs-section clearfix">
          <div className="row">
            <Sidebar />
            <div className="col-md-9">
              <Editor editing={true} surveyCallback = {this.addSurvey}/>
            </div>
          </div>
        </div>
      );

  }
});
