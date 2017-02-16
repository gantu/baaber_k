import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const collectionComposer = ({context,permission_denied}, onData) => {
  const {Meteor, Collections} = context();
  let role = Roles.userIsInRole(Meteor.user(), ['admin'],'default-group');
  if(role){
    if (Meteor.subscribe('_vendors.requestsList').ready()) {
      const collection = Collections.vendorRequests.find().fetch();
      onData(null, {collection});
    }
  }else{
    permission_denied();
  }
};

export const depsMapper = (context, actions) => ({
  permission_denied: actions._vendors.permissionDenied,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(collectionComposer),
    useDeps(depsMapper)
  )(component);
