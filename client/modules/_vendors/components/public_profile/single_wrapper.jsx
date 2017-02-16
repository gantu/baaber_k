import React from 'react';

import dataComposer from '../../composers/public_profile/single.jsx';
import Component from './single.jsx';
import Sidebar from './sidebar.jsx';

const Container = dataComposer(Component);

export default class extends React.Component {
  render(){
    const {_id} = this.props;

    return(
      <div className="bs-docs-section clearfix">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Container _id={_id}/>
          </div>
        </div>
      </div>
    );
  }
};
