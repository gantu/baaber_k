import React from 'react';
import Sidebar from './_sidebar_add.jsx';
import dataComposer from '../../composers/requests/add.jsx';
import Component from './_form.jsx';
const Container = dataComposer(Component);

export default class extends React.Component {
  render() {
    return (
      <div className="bs-docs-section clearfix">
        <div className="row">
          <div className="col-md-6">
            <Sidebar />
          </div>
          <div className="col-md-6">
            <Container />
          </div>
        </div>
      </div>
    );
  }
}
