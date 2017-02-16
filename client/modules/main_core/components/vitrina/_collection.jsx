import React from 'react';
import Single from './_single';

export default React.createClass({

  renderVendor(record,index){

        return(
          <div key={index}>
            <a href={`/vendors/public_profile/${record._id}`} title={record.companyName}>
              {record.images ? <Single record={record} /> : null }
            </a>
          </div>
        );
  },
  render(){
    var {list}=this.props;
    return(

      <div className="row">
        {this.props.list.map(this.renderVendor)}

      </div>
    )

  }
});
