import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const collectionComposer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('_vendors.list_admin').ready()) {
    const collection = Collections.vendors.find().fetch();
    
        onData(null, {collection});
    
  }
};

export const depsMapper = (context, actions) => ({
  clearErrors: actions._vendors.clearErrors,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(collectionComposer),
    useDeps()
  )(component);
