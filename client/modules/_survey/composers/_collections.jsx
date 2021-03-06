import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context, clearErrors,permission_denied}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('SURVEY_ERROR');
  const loggedIn = Meteor.user();
  
  if(Roles.userIsInRole(loggedIn, ['manager'],'manager-group') || Roles.userIsInRole(loggedIn, ['operator'],'operator-group')){
    if (Meteor.subscribe('_surveys.collectionByVendor',loggedIn._id).ready()) {
      const collection = Collections.surveys.find().fetch();
      onData(null, {collection});
    }     
    //Bert.alert('You do not have permission!','danger');
  }else{
     permission_denied();
  }
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  clearErrors: actions._survey.clearErrors,
  deleteSurvey: actions._survey.deleteSurvey,
  publishSurvey: actions._survey.publishSurvey,
  unPublishSurvey: actions._survey.unPublishSurvey,
  permission_denied: actions._survey.permissionDenied,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
  )(component);
