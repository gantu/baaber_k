 export default {
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

   clearErrors({LocalState}) {
     return LocalState.set('SAVING_ERROR', null);
   }
 };


