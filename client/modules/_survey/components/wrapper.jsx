import React from 'react';
import Sidebar from './sidebar.jsx';
import SurveyWizard from './_new.jsx';
import Collection from './_list.jsx';
import Toolbar from './toolbar.jsx';

import newSurveyDataComposer from '../composers/_new.jsx';
const SurveyWizardContainer = newSurveyDataComposer(SurveyWizard);



export default React.createClass( {

  getInitialState(){
    return {
      renderNow:"list",
      showToolbar:false
    };
  },

  handleClick(item){
    this.setState({renderNow:item})
    if(item==="new"){
      this.setState({showToolbar:true});
    }else{
      this.setState({showToolbar:false});
    }
  },

  showToolbar(){
    this.setState({showToolbar:true})
  },

  render() {

    if(this.state.renderNow === "list"){
      return(
        <div className="bs-docs-section clearfix">
          <div className="row">
            <Sidebar handleClick={this.handleClick} />
            <div className="col-md-9">
              <Collection />
            </div>
          </div>
        </div>
      );
    }else if(this.state.renderNow === "new"){
      return (      
        <div className="bs-docs-section clearfix">
          <div className="row">
            <Sidebar handleClick={this.handleClick} />
            <div className="col-md-6">
              <SurveyWizardContainer />
            </div>
            <div className="col-md-3">
              <Toolbar />
            </div>
          </div>
        </div>
      );
    }
  }
});
