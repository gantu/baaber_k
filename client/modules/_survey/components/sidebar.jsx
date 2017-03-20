import React from 'react';

export default class extends React.Component {

  render() {
  	
    return (
      <div className="col-md-3">
            <div className="box box-solid">
              <div className="box-header with-border">
                <h3 className="box-title">Мои опросы</h3>
              </div>
              <div className="box-body no-padding">
                <ul className="nav nav-pills nav-stacked">
                  <li><a href="/survey/list"><i className="fa "></i>Все опросы</a></li>
                  <li><a href="/survey/new"><i className="fa "></i>Создать опрос</a></li>
                </ul>
              </div>
            </div>
       </div>
    );
  }
}
