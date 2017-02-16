import React from 'react';

export default class extends React.Component {

  deleteRecord() {
    // console.log('deleteRecord ', this.props._id);
    this.props.deleteAction(this.props._id);
  }

  approveRecord(){
    this.props.approveAction(this.props._id);
  }

  render() {
    const {_id, record,error} = this.props;
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          {error ?
          <div className="alert alert-danger" onClick="">
            <span className="octicon octicon-megaphone" ></span>
            {error}
          </div> : null }

          {record.saving ? <p>Saving...</p> : null}
          <ul>
            <li>{record.companyName}</li>
            <li>{record.companyType}</li>
            <li>{record.email}</li>
            <li>{record.phone}</li>
            <li>{record.status}</li>
            <li>{record.createdAt.toString()}</li>
            <li>{record.approvedAt ? record.approvedAt.toString() : <p>not approved yet</p> }</li>
          </ul>
           <p>
            <br />
            <a href="#" onClick={this.approveRecord.bind(this)}>Approve</a> |
            <a href="#" onClick={this.deleteRecord.bind(this)}>Deny</a>
          </p>

        </div>
      </div>
    );
  }
}
