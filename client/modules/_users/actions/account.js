// import {Accounts} from 'meteor/meteor';
export default {

  login({Meteor, LocalState, FlowRouter}, email, password) {

    if (!email || !password) {
      return LocalState.set('LOGIN_ERROR', 'Login & Password are required!');
    }

    LocalState.set('LOGIN_ERROR', null);

    Meteor.loginWithPassword(email, password, (err) => {
      if (err && err.reason) {
        return LocalState.set('LOGIN_ERROR', err.reason);
      }
      if(Roles.userIsInRole(Meteor.user(), ['manager'],'manager-group') || Roles.userIsInRole(Meteor.user(), ['operator'],'operator-group')){
        FlowRouter.go('/survey/list');
      }else{
        FlowRouter.go('/account');
      }
    });

  },

  loginErrorClear({LocalState}) {
    return LocalState.set('LOGIN_ERROR', null);
  },

  register({Meteor, LocalState, FlowRouter}, email, password1, password2) {

    if (!email || !password1 || !password2) {
      return LocalState.set('REGISTER_ERROR', 'Please fill out all the required fileds!');
    }

    if (password1 !== password2 ) {
      return LocalState.set('REGISTER_ERROR', 'Passwords do not match!');
    }

    Accounts.createUser({email, password: password1}, (err) => {
      if (err && err.reason) {
        return LocalState.set('REGISTER_ERROR', err.reason);
      }
      FlowRouter.go('/home');
    });
  },

  registerErrorClear({LocalState}) {
    return LocalState.set('REGISTER_ERROR', null);
  }

  /*socialLogin({Meteor, LocalState,FlowRouter},social_name){

    if(social_name == "google"){
      
      Meteor.loginWithGoogle({
        requestPermissions: ['email']
          }, (err) => {
            if (err && err.reason) {
              return LocalState.set('LOGIN_ERROR', err.reason);
            } else {
              FlowRouter.go('/account');
            }
      });
    }else if(social_name == "facebook"){
      Meteor.loginWithFacebook({
        requestPermissions: ['user_friends', 'public_profile', 'email']
          }, (err) => {
            if (err && err.reason) {
              return LocalState.set('LOGIN_ERROR', err.reason);
            } else {
              FlowRouter.go('/account');
            }
      });
    }
  }*/

};
