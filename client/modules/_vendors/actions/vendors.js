
export  default{
  addVendorRequest({Meteor, LocalState, FlowRouter},data){
    Meteor.call('_vendors.addVendorRequest', data, (err) => {
      if (err) {
        return LocalState.set('_vendors.ACTION_VENDOR_ERROR', err.message);
      }

    });
   FlowRouter.go(`/vendors/requests/status`);
  },

  deleteVendorRequest({Meteor, LocalState, FlowRouter},_id){
    console.log(_id);
  },

  approveVendorRequest({Meteor, LocalState, FlowRouter},_id){
    console.log(_id);
    Meteor.call('_vendors.approveVendorRequest',_id,(err)=>{
      if(err){
        return LocalState.set('_vendors.ACTION_VENDOR_ERROR',err.message);
      }
    });
  },

  permissionDenied({Meteor,FlowRouter,LocalState}){
    LocalState.set('_vendors.ACTION_VENDOR_ERROR', null);
    FlowRouter.go(`/permission_denied`);
  },

  registerVendor({Meteor,FlowRouter,LocalState},email, password1, password2,_token){

    if (!email || !password1 || !password2) {
      return LocalState.set('_vendors.ACTION_VENDOR_ERROR', 'Please fill out all the required fileds!');
    }

    if (password1 !== password2 ) {
      return LocalState.set('_vendors.ACTION_VENDOR_ERROR', 'Passwords do not match!');
    }

    Meteor.call('_vendors.registerVendor', email,password1,_token, (err) => {
      if (err) {
        return LocalState.set('_vendors.ACTION_VENDOR_ERROR', err.message);
      }else{
        FlowRouter.go(`/login`);
      }
    });
  },

  saveProfileInfo({Meteor,FlowRouter,LocalState},data,_id){
    Meteor.call('_vendors.saveProfileInfo',data,_id,(err) => {
      if(err){
        return LocalState.set('_vendors.SAVE_PROFILE_INFO',err.message);
      }else{
        return LocalState.set('_vendors.SAVE_PROFILE_INFO_STATUS',"Successfully Saved!");
      }
    });
  },

  uploadProfilePhoto({Meteor, Collections, LocalState}, files, _id){
    let insertedFileId=[];
    if(files && _id){
      for (var i = 0, ln = files.length; i < ln; i++) {

        Collections.Images.insert(files[i], function (err,fileObj) {
          if(err){
            return LocalState.set('_vendors.SAVE_PROFILE_INFO',err.message);
          }else{
            Meteor.call('_vendors.uploadProfilePhoto',fileObj._id,_id,(err) =>{
              if(err){
                   return LocalState.set('_vendors.SAVE_PROFILE_INFO',err.message);
                 }else {
                   return LocalState.set('_vendors.SAVE_PROFILE_INFO_STATUS',"Successfully Saved!");
                 }
            });
          }
        });
      }
    }
  },

  deleteProfilePhoto({Meteor,Collections,LocalState},file,record_id){

    Meteor.call('_vendors.deleteProfilePhoto',file._id,record_id,(err)=>{
      if(err){
        return LocalState.set('_vendors.SAVE_PROFILE_INFO',err.message);
      }else{
        return LocalState.set('_vendors.SAVE_PROFILE_INFO_STATUS',"Image Successfully Deleted!");
      }
    });

  },
  clearErrors({LocalState}) {
    LocalState.set('_vendors.ACTION_VENDOR_ERROR',null);
    LocalState.set('_vendors.SAVE_PROFILE_INFO_STATUS',null);
    return LocalState.set('_vendors.SAVE_PROFILE_INFO', null);
  },
};
