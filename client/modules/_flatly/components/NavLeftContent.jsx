import React from 'react';
import DropDown from './DropDown.jsx';


export default () => {

  var links2 = [];
  links2.push({url: '/colors', name: '/colors'} );
  links2.push({url: '/colors/add', name: '/colors/add'} );
  let navColors = React.createElement(DropDown, {name: 'Colors', links: links2});

  var links4 = [];
  links4.push({url: '/users', name: '/users'} );
  links4.push({url: '/users/add', name: '/users/add'} );
  links4.push({url: '/vendors/requests', name: 'Заявки'} );
  links4.push({url: '/admin/vendors/list', name: 'Компании'} );
    
  let navAdmin = React.createElement(DropDown, {name: 'Admin', links: links4});

  var links5 = [];
  links5.push({url: '/login', name: 'Вход'} );
  links5.push({url: '/password', name: 'Забыли Пароль'} );
  links5.push({url: '/register', name: 'Регистрация'} );
  links5.push({url: '/Logout', name: 'Logout'} );

  links5.push({url: '/account', name: 'Account'} );
  links5.push({url: '/profile', name: 'Profile'} );

  let navAccounts = React.createElement(DropDown, {name: 'Accounts', links: links5});

  var links6 =[];
  links6.push({url: '/vendors/requests/add', name: 'Работайте С Нами'} );
  let navVendors = React.createElement(DropDown, {name: 'Партнерство',links: links6});

  var links7=[];
  //links7.push({url: '/vendors/profile', name: 'Профиль'} );
  links7.push({url:'/survey/list', name: 'Управление опросами'});
  let navManagers = React.createElement(DropDown,{name:'Личный кабинет',links:links7});


  /*
  { navColors }
  { navAccounts }

  */

  return (
    <ul className="nav navbar-nav">
      {!Meteor.user() ? navVendors :null }
      { Roles.userIsInRole(Meteor.user(), ['admin'],'default-group') ? navAdmin : null }
      { Roles.userIsInRole(Meteor.user(), ['manager'],'manager-group') ? navManagers : null }

    </ul>
  );

};
