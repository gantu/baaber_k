import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import Survey from '/lib/surveys';
import Answer from '/lib/answers';
import {answers} from '/lib/collections';

export default function(){
    Meteor.methods({
        '_answers.getAggregateData'(survey_id){
            check(survey_id,String);
            var pipeline=[{$match:{survey_id:survey_id}},{$unwind:"$answers"},{$unwind:"$answers.answer"},{$group:{_id:{answer:"$answers.answer",question:"$answers.question"},answers:{$push:"$answers.answer"},count:{$sum:1}}}];
            var data=answers.aggregate(pipeline);

            return data;
        }
    },
                   
    );
}