// Meteor.users.deny ({
//   insert: (userId, doc, fields, modifier) => true,
//   update: (userId, doc, fields, modifier) => true,
//   remove: (userId, doc, fields, modifier) => true,
// })

import _ from 'lodash';
import  { Class }  from 'meteor/jagi:astronomy';

export const Phone = Class.create({
  name: 'Phone',
  fields: {
    name: {
      type: String,
      validators: [{
        type: 'minLength',
        param: 3
      }]
    },
    number: {
      type: String,
      validators: [{
        type: 'minLength',
        param: 3
      }]
    },
    uuid: {
      type: String,
    },
  }
});

export const Email = Class.create({
  name: 'Email',
  fields: {
    address: {
      type: String,
      // validator: [
      //   Validators.minLength(3)
      // ]
    },
    verified: {
      type: String,
      // validator: [
      //   Validators.minLength(9)
      // ]
    }
  }
});

export const UserProfile = Class.create({
  name: 'UserProfile',
  fields: {
    /* Any fields you want to be published to the client */
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    phones: {
      type: [Phone],
      default: function() {
        return [];
      }
    },
    // nickname
  }
});



const User = Class.create({
  name: 'User',
  collection: Meteor.users,
  fields: {

    // emails: {
    //   type: 'array',
    //   default: function() {
    //     return [];
    //   }
    // },

    emails: {
      type: [Email],
      default: function() {
        return [];
      }
    }

    ,createdAt: Date

    ,profile: {
      type: UserProfile,
      default: function() {
        return {};
      }
    }

    ,roles: {
      type: [String],
      default: function() {
        return {};
      }
    }

    ,_iss : {
      type: String
    }

    ,_isa : {
      type: String
    }

  }
  ,helpers: {
    firstEmail : function () {
      return _.get(this, 'emails[0].address', null);
    }
    // ,aclIs : function(roleSlug) {
    //   // console.log ('UUser->aclIsInRole role-slug', roleSlug);
    //   // console.log(this.roles)
    //   return _.contains(this.roles, roleSlug);
    // }
  },
});

if (Meteor.isServer) {
  User.extend({
    fields: {
      services: Object
    }
  });
}

export default User;
