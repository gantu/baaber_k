import {Meteor} from 'meteor/meteor';
//import {Roles} from 'meteor/alanning:roles';

export default () => {

  if (Meteor.users.find().count() === 0 ) {
    var users = [
      {name:"Normal User",email:"normal@example.com",roles:[]},
      {name:"Manager User",email:"manage@example.com",roles:['manager']},
      {name:"Admin User",email:"admin@example.com",roles:['admin']}
    ];

 _.each(users, function (user) {
  var id;

  id = Accounts.createUser({
    email: user.email,
    password: "apple1",
    profile: { name: user.name }
  });

  if (user.roles.length > 0) {
    // Need _id of existing user record so this call must come
    // after `Accounts.createUser` or `Accounts.onCreate`
    Roles.addUsersToRoles(id, user.roles, 'default-group');
  }

});
};
}
