import {price_requests,vendors} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function (){

     Meteor.publish('_price_requests.List', function (_id) {
       check(_id,String);
       let role = Roles.userIsInRole(this.userId,['manager'],'manager-group');
       if(role){
         const response = price_requests.find({vendorId:_id});
         return response;
       }else{
         this.stop();
         return;
       }
     });

     Meteor.publish('_price_requests.single', function (_id) {
       check(_id,String);
       let role = Roles.userIsInRole(this.userId,['manager'],'manager-group');
       if(role){
         const response = price_requests.find({_id:_id});
         return response;
       }else{
         this.stop();
         return;
       }
     });


}
