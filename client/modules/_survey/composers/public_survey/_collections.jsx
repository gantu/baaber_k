import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context, clearErrors,permission_denied,_id}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('SURVEY_ERROR');  
  if (Meteor.subscribe('_surveys.publicCollectionByVendor',_id).ready()) {
      const collection = Collections.surveys.find().fetch();
      onData(null, {collection});
   }     
    //Bert.alert('You do not have permission!','danger');
 
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
