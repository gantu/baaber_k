import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const addComposer = ({context, clearErrors}, onData) => {
  const {LocalState,Collections} = context();
  const error = LocalState.get('_vendor.ADD_VENDOR_REQUEST_ERROR');
  if (Meteor.subscribe('_companyTypes.list').ready()) {
    const collection = Collections.companyTypes.find().fetch();
    const c_types = collection.map(record => ({value:record.companyTypeName,label:record.companyTypeName}));
    onData(null, {c_types,error});
  }
  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  submitAction: actions._vendors.addVendorRequest,
  clearErrors: actions._vendors.clearErrors,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(addComposer),
    useDeps(depsMapper)
  )(component);
