import {vendors,price_requests} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import Vendor from '/lib/vendors';
import PriceRequest from '/lib/price_requests';

export default function () {
  Meteor.methods({
    '_price_request.addRequest'(data,vendorId) {

      check(vendorId,String);
      check(data,{
        fullName: String,
        email : String,
        phone : String,
        message: String,
        eventType: String,
        //  eventDate: Date
      });

      const v=Vendor.findOne({_id:vendorId});
      try{
        const pr=new PriceRequest();
        pr.vendorId = v._id;
        pr.companyName = v.companyName;
        pr.sender = {
            fullName: data.fullName,
            email: data.email,
            phone: data.phone
        };
        //eventDate: data.eventDate,
        pr.eventType = data.eventType;
        pr.message = data.message;
        pr.createdAt =  new Date();
        pr.status = "new" ;
        pr.save();

      }catch(err){
        throw new Meteor.Error( '_price_request.ACTION_PRICE_REQUEST_ERROR', err.message );
      }
    },
    '_price_request.deleteRequest'(_id){
        check(_id,String);
        let vr = Vendor.findOne({owner:this.userId});
        let pr=PriceRequest.findOne(_id);
        if(pr.vendorId === vr._id){
          pr.remove();
        }else{
            throw new Meteor.Error( '_price_request.ACTION_PRICE_REQUEST_ERROR',"Privilege error!" );
        }
    },
  });

}
