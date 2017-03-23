import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';


export const composer = ({context, clearErrors,permission_denied,_id}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('SURVEY_ERROR');
  const loggedIn = Meteor.user();
  
  if(Roles.userIsInRole(loggedIn, ['manager'],'manager-group') || Roles.userIsInRole(loggedIn, ['operator'],'operator-group')){
    if (Meteor.subscribe('_surveys.single',_id).ready()) {
    
      const record = Collections.surveys.findOne({_id:_id});
      if(record.answerCount > 0){
          Bert.alert('You can not edit Survey which have answers, Pleas contact administrator!','danger');
          FlowRouter.go('/survey/list');
      }
      onData(null, {record});
    }     
    //Bert.alert('You do not have permission!','danger');
  }else{
     permission_denied();
  }
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  clearErrors: actions._survey.clearErrors,
  saveSurvey: actions._survey.saveSurvey,
  permission_denied: actions._survey.permissionDenied,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
  )(component);
