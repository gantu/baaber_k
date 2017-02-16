import React from 'react';

export default React.createClass({

  deletePriceRequest(){
    this.props.deletePriceRequest(this.props.pr._id);
  },
  render(){
    const {_id,pr}=this.props;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Get Quote from {pr.sender.fullName}</h3>
        </div>
        <div className="panel-body">
          <ul>
            <li>From : {pr.sender.email}</li>
            <li>phone : {pr.sender.phone}</li>
          </ul>
          {pr.message}
        </div>
        <div className="panel-footer">
          <button type="button" className="btn btn-primary">Reply</button>
          <button type="button" className="btn btn-danger" onClick={this.deletePriceRequest}>Delete</button>
          </div>
      </div>
    );
  }
});
