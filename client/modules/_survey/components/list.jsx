import React from 'react';
import Sidebar from './sidebar.jsx';

import Collection from './_list.jsx';
import collectionComposer from '../composers/_collections.jsx';
import Editor from './survey_editor/Editor.jsx';

const CollectionContainer = collectionComposer(Collection);


export default React.createClass( {

  render() {
      return(
        <div className="bs-docs-section clearfix">
          <div className="row">
            <Sidebar />
            <div className="col-md-9">
              <CollectionContainer />
            </div>
          </div>
        </div>
      );
    
  }
});
