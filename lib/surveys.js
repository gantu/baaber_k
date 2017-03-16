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
        questions:{
            type: [Question],
            default: function(){
                return [];
            }
        }
    }
});
    

export default Survey;