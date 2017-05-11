import React from 'react';
import Sidebar from '../sidebar.jsx';


import customerInfoComposer from '../../composers/customer_info/_list.jsx';
import CustomerInfoList from './_list.jsx';

const CustomerInfoListView = customerInfoComposer(CustomerInfoList);

export default React.createClass( {

  render() {
      return(
        <div className="bs-docs-section clearfix">
          <div className="row">
            <Sidebar />
            <div className="col-md-9">
              <CustomerInfoListView />
            </div>
          </div>
        </div>
      );
    
  }
});
