import React from 'react';

export default class extends React.Component {

  render() {
  	
    return (
      <div className="col-md-3">
            <div className="list-group">
                <ul className="nav nav-pills nav-stacked">
                  <li className="list-group-item"><a href="/survey/list"><i className="fa "></i>Все опросы</a></li>
                  <li className="list-group-item"><a href="/survey/new"><i className="fa "></i>Создать опрос</a></li>
                  <li className="list-group-item"><a href="/survey/customer/list"><i className="fa "></i>Клиентская база</a></li>
                </ul>
              </div>
            
       </div>
    );
  }
}
