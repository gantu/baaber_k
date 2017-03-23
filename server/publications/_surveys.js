import {answers,surveys,vendors} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import Survey from '/lib/surveys';
import Vendor from '/lib/vendors';
import Answer from '/lib/answers';

export default function (){
    Meteor.publish('_surveys.collectionByVendor',function(userId){
        check(userId,String);
        const vendor = Vendor.findOne({"owner.id":userId});
        if(vendor && (this.userId === userId)){
            var surs = Survey.find({author:vendor._id});
            return surs;
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
    
    Meteor.publish('_surveys.publicCollectionByVendor',function(_id){
        check(_id,String);
        
        return Survey.find({author:_id,isPublished:true});
      
    });
    
    Meteor.publish('_surveys.publicSingle',function(_id){
        check(_id,String);
        
        return Survey.find({_id:_id});
      
    });
    
}
