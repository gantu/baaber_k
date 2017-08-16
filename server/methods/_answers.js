import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import Survey from '/lib/surveys';
import Answer from '/lib/answers';
import {answers} from '/lib/collections';


export default function(){
    Meteor.methods({
        '_answers.getAggregateData'(survey_id,filter){
            check(survey_id,String);
            check(filter,Match.Any);
           // var pipeline=[{$match:{survey_id:survey_id}},{$unwind:"$answers"},{$unwind:"$answers.answer"},{$group:{_id:{answer:"$answers.answer",question:"$answers.question"},answers:{$push:"$answers.answer"},count:{$sum:1}}}];
          //  var sID=new Mongo.ObjectID(survey_id);
           // console.log(sID);
           var mainPipe=[];
           mainPipe.push({
            	$match:{
            		survey_id:survey_id
            	}
           });
           if(filter!=null){
	       		mainPipe.push({
			       $match:{
			       		$and:[
			                {'answers.question':filter.question},
			                {'answers.answer':{$in:filter.answers}}
			            ]
			        }
			    });
           }
           

           mainPipe.push({
            	$unwind:"$answers"
            },{
            	$lookup:{
            		from:"surveys",
            		localField:"answers.question",
            		foreignField:"questions.id",
            		as:"survey_answers"
            	}
            },{
            	$unwind:"$survey_answers"
            },{
            	$unwind:"$survey_answers.questions"
            },{
            	$unwind:"$survey_answers.questions.options"
            },{
            	$unwind:"$answers.answer"
         	},{
            	$redact:{
            		$cond:[{$eq:["$answers.answer","$survey_answers.questions.options.id"]},
                    "$$KEEP", 
                    "$$PRUNE"
                    ]
                }
            },{
            	$project:{
            		id:"$survey_answers._id",
                    answers:{
            			question:"$survey_answers.questions.name",
            			answer:"$survey_answers.questions.options.name",
            			type:"$survey_answers.questions.type"
            		}
            	}
            },{
            	$group:{
            		_id:{   
                        survey_id:"$id",
            			question:"$answers.question",
            			answer:"$answers.answer",
            			type:"$answers.type"
            		},
            		total:{$sum:1}
            	}
            },{
            	$group:{
            		_id:{   
                        survey_id:"$_id.survey_id",
            			question:"$_id.question",
            			type:"$_id.type",
            			seq:{$sum:1}
            		},
            		answers:{
            			$push:{
            				name:"$_id.answer",
            				value:"$total"
            			}
            		}
            	}
            });

            var data=answers.aggregate(mainPipe);
           
            return data;
        }
    },
                   
    );
}