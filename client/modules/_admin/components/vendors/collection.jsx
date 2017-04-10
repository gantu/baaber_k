import React from 'react';
import Sidebar from './sidebar.jsx';

import dataComposer from '../../composers/vendors/_collection.jsx';

import Component from './_collection.jsx';

const CollectionsView = dataComposer(Component);

export default React.createClass( {

  render() {
      return(
        <div className="bs-docs-section clearfix">
          <div className="row">
            <Sidebar />
            <div className="col-md-9">
              <CollectionsView />
            </div>
          </div>
        </div>
      );
    
  }
});
