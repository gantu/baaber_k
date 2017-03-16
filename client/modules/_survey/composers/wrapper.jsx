import MainContainer from '../components/wrapper.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors,permission_denied}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('SURVEY_ERROR');
  const loggedIn = Meteor.user();
  let role = Roles.userIsInRole(loggedIn, ['manager'],'manager-group') || Roles.userIsInRole(loggedIn, ['operator'],'operator-group');
   if(!role){
    permission_denied();
    //Bert.alert('You do not have permission!','danger');
  }else{
    onData(null, {error});
  }
  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  permission_denied: actions._survey.permissionDenied,
  clearErrors: actions._survey.clearErrors,
  saveSurvey: actions._survey.saveSurvey,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MainContainer);
