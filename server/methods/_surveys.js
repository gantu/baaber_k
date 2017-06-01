import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import Survey from '/lib/surveys';
import Vendor  from '/lib/vendors';
import Answer from '/lib/answers';
import {answers} from '/lib/collections';
import Customers from '/lib/customer_info';


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
                _id:String,
                name:String,
                description:String,
                author:null,
                createdAt: Date,
                lastModified: Date,
                isPublished: Boolean,
                questions:[pattern]
            });
            check(userId,String);
            
            if(Roles.userIsInRole(userId, ['manager'],'manager-group') || Roles.userIsInRole(this.userId, ['operator'],'operator-group')){
                const vendor = Vendor.findOne({"owner.id":userId});
                var survey = new Survey();
                survey.name=data.name;
                survey.description = data.description;
                survey.author = vendor._id;
                survey.questions = data.questions;
                survey.save();
            }
        },
        '_surveys.saveSurvey'(data,userId){
            var pattern = {
                id:String,
                name: String,
                description:String,
                required:Boolean,
                type:String,
                options:[Object]
            };
            check(data,{
                _id:String,
                name:String,
                description:String,
                author: String,
                createdAt: Date,
                lastModified: Date,
                isPublished: Boolean,
                questions: [pattern]
            });
            check(userId,String);
             if(Roles.userIsInRole(userId, ['manager'],'manager-group') ||Roles.userIsInRole(this.userId, ['operator'],'operator-group') ){
                var survey = Survey.findOne(data._id);
                survey.name=data.name;
                survey.description = data.description;
                survey.author = data.author;
                survey.lastModified=new Date();
                survey.questions = data.questions;
                survey.save();
            }
        },
        
        '_surveys.deleteSurvey'(_id, userId){
            check(_id,String);
            check(userId,String);
            if(Roles.userIsInRole(userId, ['manager'],'manager-group') ||Roles.userIsInRole(this.userId, ['operator'],'operator-group') ){
                var survey=Survey.findOne(_id);
                survey.remove();
            }
        },
        
        '_surveys.publishSurvey'(_id, userId){
            check(_id,String);
            check(userId,String);
            if(Roles.userIsInRole(userId, ['manager'],'manager-group') ||Roles.userIsInRole(this.userId, ['operator'],'operator-group') ){
                var survey=Survey.findOne(_id);
                survey.isPublished=true;
                survey.save();
            }
        },
        '_surveys.unPublishSurvey'(_id, userId){
            check(_id,String);
            check(userId,String);
            if(Roles.userIsInRole(userId, ['manager'],'manager-group') ||Roles.userIsInRole(this.userId, ['operator'],'operator-group') ){
                var survey=Survey.findOne(_id);
                survey.isPublished=false;
                survey.save();
            }
        },
        '_surveys.saveAnswers'(data){
            const pattern1 = {
              answer:String,
              question:String
            };
            const pattern2 = {
                answer:[Object],
                question:String
            }
            
            check(data,{
                survey_id:String,
                answers:[Match.Any]
            });
            
            /*var answer = new Answer();
            answer.survey_id = data._id;
            answer.answers = data.answers;
            answer.save();
            */
            
            answers.insert(data);
            
            var survey = Survey.findOne(data.survey_id);
            var q;
            for(var i=0;i<survey.questions.length;i++){
                if(survey.questions[i].name === "Контакты")
                    q=survey.questions[i].id;
            }
            for(var j=0;j<data.answers.length;j++){
                if(data.answers[j].question === q){
                    var customer = new Customers();
                    customer.contact_details = data.answers[j].answer;
                    customer.survey_name = survey.name;
                    customer.author = survey.author;
                    customer.save();
                }
                    
            }
            survey.answerCount++;
            survey.save();
            

        },
        
        
    });
}