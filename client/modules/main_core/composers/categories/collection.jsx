import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const collectionComposer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('_companyTypes.list').ready()) {
    const collection = Collections.companyTypes.find().fetch();
    onData(null, {collection});
  }
};

export const depsMapper = (context, action) => ({
  context: () => context
});


export default (component) => composeAll(
    composeWithTracker(collectionComposer),
    useDeps()
  )(component);
