import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const collectionComposer = ({context,permission_denied}, onData) => {
  const {Meteor, Collections} = context();
  const loggedIn = Meteor.user();

  let role = Roles.userIsInRole(loggedIn, ['manager'],'manager-group');
  if(!role){
    permission_denied();
  }else{
    if(Meteor.subscribe('_vendors.profileSingle',loggedIn._id).ready()){
      const vendor=Collections.vendors.findOne({"owner.id":loggedIn._id});

      if (Meteor.subscribe('_price_requests.List',vendor._id).ready()) {
        const collection = Collections.price_requests.find({vendorId:vendor._id}).fetch();
        onData(null, {collection});
      }
    }
}
};

export const depsMapper = (context, actions) => ({
  permission_denied: actions._price_request.permissionDenied,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(collectionComposer),
    useDeps(depsMapper)
  )(component);
