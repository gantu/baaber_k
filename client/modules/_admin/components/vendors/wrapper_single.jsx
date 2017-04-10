import React from 'react';
import Sidebar from './sidebar.jsx';
import SingleView from './_single.jsx';



export default React.createClass( {

 
  render() {
     const {record} = this.props;
      return(
        <div className="bs-docs-section clearfix">
          <div className="row">
            <Sidebar />
            <div className="col-md-9">
              <SingleView record={record} />
            </div>
          </div>
        </div>
      );
    
  }
});
