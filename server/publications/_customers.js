import {customer_info} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import Customers from '/lib/customer_info';
import Vendor from '/lib/vendors';

export default function (){
    Meteor.publish('_surveys.customer_info.collectionByVendor',function(userId){
        check(userId,String);
        const vendor = Vendor.findOne({"owner.id":userId});
        if(vendor && (this.userId === userId)){
            var customer_collection = Customers.find({author:vendor._id});
            return customer_collection;
        }else{
            this.stop();
            return;
        }
    });
    
    
}
