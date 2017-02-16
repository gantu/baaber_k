import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const singleComposer = ({context,clearErrors,_id}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error= LocalState.get('_vendors.ACTION_VENDOR_ERROR');

  if (Meteor.subscribe('_vendors.publicProfileSingle', _id).ready()) {
    const record = Collections.vendors.findOne(_id);
    Meteor.subscribe('_vendors.images',record._id);
    var _images=Collections.Images.find({owner:record._id});

    if (record) {
      onData(null, {record, _images, error});
    }else{
      onData();
    }
  }
// clearErrors when unmounting the component
  return clearErrors;

};

export const depsMapper = (context, actions) => ({
  clearErrors: actions._vendors.clearErrors,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(singleComposer),
    useDeps(depsMapper)
  )(component);
