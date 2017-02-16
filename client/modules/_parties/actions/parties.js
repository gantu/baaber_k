
export  default{
  addVendorRequest({Meteor, LocalState, FlowRouter},data){
   /* Meteor.call('_vendors.addVendorRequest', data, (err) => {
      if (err) {
        return LocalState.set('_vendors.ACTION_VENDOR_ERROR', err.message);
      }

    });*/
   FlowRouter.go(`/parties/list`);
  },

 

  permissionDenied({Meteor,FlowRouter,LocalState}){
    LocalState.set('_parties.ACTION_PARTY_ERROR', null);
    FlowRouter.go(`/permission_denied`);
  },

  clearErrors({LocalState}) {
    LocalState.set('_parties.ACTION_PARTY_ERROR',null);
    LocalState.set('_parties.SAVE_PARTY_STATUS',null);
    return LocalState.set('_parties.SAVE_PARTY_INFO', null);
  },
};
