import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

const VendorSubs = new SubsManager();

export const profileDataComposer = ({context, clearErrors, permission_denied}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('_vendors.SAVE_PROFILE_INFO');
  const status = LocalState.get('_vendors.SAVE_PROFILE_INFO_STATUS');
  const loggedIn = Meteor.user();
  let role = Roles.userIsInRole(loggedIn, ['manager'],'manager-group');
  if(!role){
    Bert.alert('You do not have permission!','danger');
  }else{
    if (VendorSubs.subscribe('_vendors.profileSingle', loggedIn._id).ready()) {
        const record = Collections.vendors.findOne({"owner.id":loggedIn._id});
        //ImagesSubs.subscribe('_vendors.images',record._id);
        if (record) {
          //var images = Collections.Images.find({"owner":record._id});
          onData(null, {record, error,status});
        }else{
          onData();
        }
    }
  }
  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({

  clearErrors: actions._vendors.clearErrors,
  saveProfileInfo: actions._vendors.saveProfileInfo,
  //uploadProfilePhoto:actions._vendors.uploadProfilePhoto,
  permission_denied: actions._vendors.permissionDenied,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(profileDataComposer),
    useDeps(depsMapper)
  )(component);
