import React from 'react';

import dataComposer from '../../composers/account/login.jsx';
import Component from './_form.jsx';

const Container = dataComposer(Component);


export default class extends React.Component {

  render() {
    return (
      <div className="row align-items-center">    
        <div className="col-md-3">
          <div className="ibox-content">

                    <h3 className="font-bold">Вход</h3>
                    <Container />

                    <a href="/password"><small>Забыли пароль?</small></a><br/>
                  </div>
                 
        </div>
          <div className="col-md-9">
          </div>
                  
      </div>
         
      

    );
  }
}
