import {price_requests} from '/lib/collections';
import  { Class }  from 'meteor/jagi:astronomy';

export const SenderProfile = Class.create({
  name: 'SenderProfile',
  fields: {
    /* Any fields you want to be published to the client */
    fullName: {
      type: String,
    },
    phone: {
      type: String,
    },
    email:{
      type: String
    }
    // nickname
  }
});

const PriceRequest = Class.create({
    name: 'PriceRequest',
    collection: price_requests,
    fields:{
      vendorId: {
        type: String
      },
      companyName:{
        type: String
      },
      sender: SenderProfile,
      message:{
        type: String
      },
      eventType:{
        type: String
      },
      createdAt: Date,
      status: String
    }


});



export default PriceRequest;
