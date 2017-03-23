import {answers,surveys,vendors} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import Survey from '/lib/surveys';
import Vendor from '/lib/vendors';
import Answer from '/lib/answers';

export default function (){
    Meteor.publish('_answers.listBySurvey',function(survey_id){
       
    });
}