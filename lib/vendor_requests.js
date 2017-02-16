import {vendorRequests } from '/lib/collections';
import  { Class }  from 'meteor/jagi:astronomy';

const vendorRequest = Class.create({
  name: 'vendorRequest',
  collection: vendorRequests,
  fields: {
    companyName: String,
    companyType: String,
    email: String,
    phone: String,
    status: String,
    createdAt: Date,
    token: {
      type: String,
      default:''
    },
    approvedAt: Date
  }
});


export default vendorRequest;
