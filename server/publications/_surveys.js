import {surveys,vendors} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import Survey from '/lib/surveys';
import Vendor from '/lib/vendors';

export default function (){
    Meteor.publish('_surveys.collectionByVendor',function(userId){
        check(userId,String);
        const vendor = Vendor.findOne({"owner.id":userId});
        if(vendor && (this.userId === userId)){
            return Survey.find({author:vendor._id});
        }else{
            this.stop();
            return;
        }
    });
    
    Meteor.publish('_surveys.single',function(_id){
        check(_id, String);
        const survey = Survey.find({_id:_id});
        return survey;
    });
}
