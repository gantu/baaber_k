import {Images} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('_vendors.images', function (_id) {
    check(_id,String);
    const selector = {"owner":_id};
    const options = {
      // fields: {_id: 1, title: 1},
      sort: {createdAt: -1},
      limit: 10
    };


    return Images.find(selector, options);
  });
};
