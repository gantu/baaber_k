import { answers } from '/lib/collections';
import  { Class, Union }  from 'meteor/jagi:astronomy';



const qAnswer = Class.create({
    name:'qAnswer',
    fields:{
        question:String,
        answer:{
            type:[Object]
        }
    }
});

const Answer = Class.create({
    name:'Answer',
    collection:answers,
    fields:{
        survey_id:String,
        answers:{
            type:[qAnswer],
            default:function(){
                return []
            }
        }
    }
    
});

export default Answer;