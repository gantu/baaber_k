import React from 'react';
// import Container from '../../containers/colors/collection.jsx';
import dataComposer from '../../composers/public_profile/collection.jsx';
import Component from './_collection.jsx';
const Container = dataComposer(Component);

export default class extends React.Component {
  render() {
    return (
      <div className="bs-docs-section clearfix">
        <div className="row">
          <div className="col-md-9">

            <Container />
          </div>
        </div>
      </div>
    );
  }
}
