import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

const VendorSubs = new SubsManager();
const ImagesSubs = new SubsManager();

export const fillDataComposer = ({context,permission_denied}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const loggedIn = Meteor.user();
  let role = Roles.userIsInRole(loggedIn, ['manager'],'manager-group');
  if(!role){
    
    permission_denied();
  }else{
    if (VendorSubs.subscribe('_vendors.profileSingle', loggedIn._id).ready()) {
        const record = Collections.vendors.findOne({"owner.id":loggedIn._id});
        if (record) {
          onData(null, {record});
        }else{
          onData();
        }
    }
  }
};

export const depsMapper = (context, actions) => ({
  permission_denied: actions._vendors.permissionDenied,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(fillDataComposer),
    useDeps(depsMapper)
  )(component);
