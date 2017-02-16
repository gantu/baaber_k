import {companyTypes } from '/lib/collections';
import  { Class }  from 'meteor/jagi:astronomy';

const companyType = Class.create({
  name: 'companyType',
  collection: companyTypes,
  fields: {
    companyTypeName: String,
    description: String
  }
});


export default companyType;
