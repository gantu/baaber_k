import React from 'react';
import Sidebar from './_sidebar.jsx';

import Component from './_status.jsx';

export default class extends React.Component {

  render() {

    return (
      <div className="bs-docs-section clearfix">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Component />
          </div>
        </div>
      </div>
    );
  }
}
