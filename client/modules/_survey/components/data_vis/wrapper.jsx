import React from 'react';
import Sidebar from '../sidebar.jsx';

import dataVisComposer from '../../composers/data_vis/_draw_data.jsx';
import DataVis from './draw_data.jsx';
const DataVisView = dataVisComposer(DataVis);

export default React.createClass( {

  render() {
      return(
        <div className="bs-docs-section clearfix">
          <div className="row">
            <Sidebar />
            <div className="col-md-9">
              <DataVisView _id={this.props._id}/>
            </div>
          </div>
        </div>
      );
    
  }
});
