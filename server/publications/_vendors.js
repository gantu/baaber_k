import {vendorRequests,vendors} from '/lib/collections';
import Restaurant from '/lib/restaurants';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function (){

     Meteor.publish('_vendors.requestsList', function () {
      const selector = {};
      const options = {
        fields: {_id: 1, companyName: 1, status: 1, createdAt: 1},
        sort: {createdAt: -1},
        limit: 10
      };
      let role = Roles.userIsInRole(this.userId, ['admin'],'default-group');
      if(role){
        return vendorRequests.find(selector, options);
      }else{
        this.stop();
        return;
      }
  });

  Meteor.publish('_vendors.requestsSingle', function (_id) {
    check( _id, String);
    const selector = {_id:_id};
    // console.log('publish _colors.single _id', _id);
    // console.log('publish _colors.single response.title', response.title);
    let role = Roles.userIsInRole(this.userId, ['admin'],'default-group');
    if(role){
      const response = vendorRequests.find(selector);
      return response;
    }else{
      this.stop();
      return;
    }
  });

  Meteor.publish('_vendors.profileSingle', function(_id){
    check(_id,String);
    let role = Roles.userIsInRole(this.userId,['manager'],'manager-group');
    if(role){
      const response = vendors.find({"owner.id":_id});
      return response;
    }else{
      this.stop();
      return;
    }
  });

  Meteor.publish('_vendors.list',function(){
    const selector = {};
    const options = {
      fields: {_id: 1, companyName: 1},
      limit: 10
    };

    return vendors.find(selector, options);
  });

  Meteor.publish('_vendors.publicProfileSingle',function(_id){
    check(_id,String);
    const response = vendors.find({_id:_id});
    return response;
  });
};
