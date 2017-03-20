import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';


export const composer = ({context, clearErrors,permission_denied,_id}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('SURVEY_ERROR');
  
  
    if (Meteor.subscribe('_surveys.publicSingle',_id).ready()) {
    
      const record = Collections.surveys.findOne({_id:_id});
      onData(null, {record});
    }     
    //Bert.alert('You do not have permission!','danger');
 
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  clearErrors: actions._survey.clearErrors,
  saveSurvey: actions._survey.saveAnswer,
  permission_denied: actions._survey.permissionDenied,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
  )(component);
