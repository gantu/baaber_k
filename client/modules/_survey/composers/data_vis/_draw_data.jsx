import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';


export const composer = ({context, clearErrors,permission_denied,_id}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('SURVEY_ERROR');
  const loggedIn = Meteor.user();
  
  if (Meteor.subscribe('_surveys.single',_id).ready()) {
    
      const record = Collections.surveys.findOne({_id:_id});
      Meteor.call('_answers.getAggregateData',_id,(error,responce) => {
      if ( error ) {
        Bert.alert( error.reason );
      } else {
        for(var i=0;i<record.questions.length;i++){
            for(var j=0;j<responce.length;j++){
                if(record.questions[i].id === responce[j]._id.question ){
                    responce[j]._id.question=record.questions[i].name;
                    for(var k=0;k<record.questions[i].options.length;k++){
                        if((record.questions[i].options[k].id === responce[j]._id.answer) && record.questions[i].type!="text")
                            responce[j]._id.answer=record.questions[i].options[k].name;
                    }
                }
            }
            
        }
          
          var returnObject=[];
        for(var i=0;i<record.questions.length;i++){
            var simQuest={_id:i,q:record.questions[i].name,type:record.questions[i].type,a:[]};
            for(var j=0;j<responce.length;j++){
                if(record.questions[i].name === responce[j]._id.question )
                    simQuest.a.push({name: responce[j]._id.answer,value:responce[j].count});
            }
            returnObject.push(simQuest);
            
            }
        onData(null, {returnObject});  
    }
  });
      
      
   }     
  

    
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  clearErrors: actions._survey.clearErrors,
  permission_denied: actions._survey.permissionDenied,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
  )(component);
