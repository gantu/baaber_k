import React from 'react';

import dataComposer from '../../composers/profile/fill_data.jsx';
import Component from './main.jsx';

const Container = dataComposer(Component);

export default class extends React.Component {

  render() {
    return (
      <div className="bs-docs-section clearfix">
          <div className="row">

              <div className="col-md-3">
                  <h2 className="font-bold">Welcome</h2>

              </div>
              <div className="col-md-9">
                  <div className="ibox-content">

                    <h2 className="font-bold">Профиль компании</h2>
                    <Container />
                  </div>
              </div>
          </div>
          <hr/>
      </div>

    );
  }
}
