import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context, clearErrors,permission_denied}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('SURVEY_ERROR');
  const loggedIn = Meteor.user();
  
  if(Roles.userIsInRole(loggedIn, ['manager'],'manager-group') || Roles.userIsInRole(loggedIn, ['operator'],'operator-group')){
    if (Meteor.subscribe('_surveys.customer_info.collectionByVendor',loggedIn._id).ready()) {
      const collection = Collections.customer_info.find().fetch();
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
  permission_denied: actions._survey.permissionDenied,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
  )(component);
