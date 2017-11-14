import React from 'react';
import Sidebar from '../sidebar.jsx';

import dataVisComposer from '../../composers/data_vis/_draw_data.jsx';
import DataVis from './draw_data.jsx';
import Tabs from './tabs_header.jsx';
const DataVisView = dataVisComposer(DataVis);

export default React.createClass( {

  getInitialState(){
    var tabList = [
    {
        'id':0,
        'name': 'Graphs',
        'url': '#',
        'content':
            <DataVisView _id={this.props._id}/>
    },
    {
        'id':1,
        'name': 'Text Data',
        'url': '#',
        'content':
            <p>text data</p>
    }
  ];
  

    return {
      tabList: tabList,
      currentTab: 0
    };
  },


/*  uploadProfilePhoto(files){
    this.props.uploadProfilePhoto(files,this.props.record._id);
  },*/

  changeTab(index) {
        this.setState({ currentTab: index });
  },

  render() {
      return(
        <div className="bs-docs-section clearfix">
          <div className="row">
            <Sidebar />
            <div className="col-md-9">
              <Tabs
                currentTab={this.state.currentTab}
                tabList={this.state.tabList}
                changeTab={this.changeTab}
              />
              <div className="content">
                {this.state.tabList[this.state.currentTab].content}
              </div>
            </div>
          </div>
        </div>
      );
    
  }
});
