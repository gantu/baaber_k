import React from 'react';

export default class extends React.Component {

  render() {
    return (
      <div className="box box-solid">
        <div className="box-header with-border">
          <h3 className="box-title">Меню Заявок</h3>
        </div>
        <div className="box-body no-padding">
          <ul className="nav nav-pills nav-stacked">
            <li><a href="/vendors/requests"><i className="fa "></i>Все заявки</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
