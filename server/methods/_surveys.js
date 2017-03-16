import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import Survey from '/lib/surveys';
import Vendor  from '/lib/vendors';


export default function(){
    Meteor.methods({
        '_surveys.addSurvey'(data,userId){
            var pattern = {
                id:String,
                name: String,
                description:String,
                required:Boolean,
                type:String,
                options:[Object]
            };
            check(data,{
                id:String,
                name:String,
                description:String,
                author:null,
                questions:[pattern]
            });
            check(userId,String);
            
            if(Roles.userIsInRole(userId, ['manager'],'manager-group') ||Roles.userIsInRole(this.userId, ['operator'],'operator-group') ){
                const vendor = Vendor.findOne({"owner.id":userId});
                var survey = new Survey();
                survey.name=data.name;
                survey.description = data.description;
                survey.author = vendor._id;
                survey.questions = data.questions;
                console.log(survey);
                survey.save();
            }
        }
    });
}