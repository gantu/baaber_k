import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const collectionComposer = ({context,permission_denied,_id},onData) => {
  const {Meteor, Collections} = context();
  const loggedIn = Meteor.user();

  let role = Roles.userIsInRole(loggedIn, ['manager'],'manager-group');
  if(!role){
    permission_denied();
  }else{
    if (Meteor.subscribe('_price_requests.single',_id).ready()) {
      const pr = Collections.price_requests.findOne(_id);
      onData(null, {pr});
    }

  }
};

export const depsMapper = (context, actions) => ({
  permission_denied: actions._price_request.permissionDenied,
  deletePriceRequest: actions._price_request.deletePriceRequest,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(collectionComposer),
    useDeps(depsMapper)
  )(component);
