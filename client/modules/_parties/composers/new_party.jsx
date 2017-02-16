import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const addComposer = ({context, clearErrors}, onData) => {
  const {LocalState,Collections} = context();
  const error = LocalState.get('_parties.ADD_PARTY_ERROR');
  if (Meteor.subscribe('_companyTypes.list').ready()) {
    const collection = Collections.companyTypes.find().fetch();
    const c_types = collection.map(record => ({value:record.companyTypeName,label:record.companyTypeName}));
    onData(null, {c_types,error});
  }
  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  submitAction: actions._parties.addParty,
  clearErrors: actions._parties.clearErrors,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(addComposer),
    useDeps(depsMapper)
  )(component);
