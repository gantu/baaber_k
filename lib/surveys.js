import { surveys } from '/lib/collections';
import  { Class }  from 'meteor/jagi:astronomy';


const Option = Class.create({
    name:'Option',
    fields:{
        id:String,
        name: String
    }
});


const Question = Class.create({
    name:'Question',
    fields:{
        id:String,
        name: String,
        description:String,
        required:Boolean,
        type: String,
        options:{
            type: [Option],
            default: function(){
                return [];
            }
        }   
    }
});

const Survey = Class.create({
    name:'Survey',
    collection:surveys,
    fields:{
        name:String,
        description:String,
        author:String,
        answerCount:{
            type: Number,
            default:0
        },
        createdAt:{
            type: Date,
            default: function(){
                return new Date();
            }
        },
        lastModified:{
            type: Date,
            default: function(){
                return new Date();
            }
        },
        isPublished:{
            type: Boolean,
            default:false
        },
        questions:{
            type: [Question],
            default: function(){
                return [];
            }
        }
    }
});
    

export default Survey;