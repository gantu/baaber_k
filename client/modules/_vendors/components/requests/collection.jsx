import React from 'react';
import Sidebar from './_sidebar.jsx';
import dataComposer from '../../composers/requests/collection.jsx';
import Component from './_collection.jsx';
const Container = dataComposer(Component);

export default class extends React.Component {
  render() {
    return (
      <div className="bs-docs-section clearfix">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h3>Заявки на регистрацию.</h3>
            <Container />
          </div>
        </div>
      </div>
    );
  }
}
