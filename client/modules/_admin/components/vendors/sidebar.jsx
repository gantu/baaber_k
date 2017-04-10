import React from 'react';

export default class extends React.Component {

  render() {
  	
    return (
      <div className="col-md-3">
            <div className="box box-solid">
              <div className="box-header with-border">
                <h3 className="box-title">Компании</h3>
              </div>
              <div className="box-body no-padding">
                <ul className="nav nav-pills nav-stacked">
                  <li><a href="/admin/vendors/list"><i className="fa "></i>Все Компании</a></li>
                </ul>
              </div>
            </div>
       </div>
    );
  }
}
