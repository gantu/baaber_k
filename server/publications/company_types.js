import {companyTypes} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function(){
  Meteor.publish('_companyTypes.list', function () {
   const selector = {};
   const options = {
     fields: {_id: 1, companyTypeName: 1, description: 1},
     sort: {companyTypeName: 1}
   };
      return companyTypes.find(selector, options);
  });
};
