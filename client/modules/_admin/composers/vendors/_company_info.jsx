import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const singleComposer = ({context, _id, clearErrors,permission_denied}, onData) => {
  const {Meteor, Collections, LocalState} = context();

  const error= LocalState.get('_vendors.ACTION_VENDOR_ERROR');
  let role = Roles.userIsInRole(Meteor.user(), ['admin'],'default-group');
  
  if(!role){
    permission_denied();
  }else{
    if (Meteor.subscribe('_vendors.single', _id).ready()) {
        const record = Collections.vendors.findOne(_id);
        if (record) {
          onData(null, {record});
        }else{
          onData();
        }
    }
  }

// clearErrors when unmounting the component
  return clearErrors;

};

export const depsMapper = (context, actions) => ({
  deleteAction: actions._vendors.deleteVendorRequest,
  approveAction: actions._vendors.approveVendorRequest,
  permission_denied: actions._vendors.permissionDenied,
  clearErrors: actions._vendors.clearErrors,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(singleComposer),
    useDeps(depsMapper)
  )(component);
