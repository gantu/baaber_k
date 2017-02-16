export  default{
  sampleAction({Meteor, LocalState, FlowRouter}){
      return true;
  },

  permissionDenied({Meteor,FlowRouter,LocalState}){
    LocalState.set('_price_request.ACTION_PRICE_REQUEST_ERROR', null);
    FlowRouter.go(`/permission_denied`);
  },

  sendPriceRequest({Meteor,LocalState,FlowRouter},data,vendorId){
    Meteor.call('_price_request.addRequest',data,vendorId, (err) => {
      if(err){
        return LocalState.set('_price_request.ACTION_PRICE_REQUEST_ERROR',err.message);
      }else{
        return LocalState.set('_price_request.ACTION_PRICE_REQUEST_STATUS',"Successfully Sent!");
      }
    });
  },
  deletePriceRequest({Meteor, LocalState, FlowRouter},_id){
    
    Meteor.call('_price_request.deleteRequest',_id,(err) => {
      if(err){
        return LocalState.set('_price_request.ACTION_PRICE_REQUEST_ERROR', err.message);
      }
      FlowRouter.go(`/price_request/list`);
    });
  },
  sendPrice(){},

  clearErrors({LocalState}) {
    LocalState.set('_price_request.ACTION_PRICE_REQUEST_ERROR',null);
    return LocalState.set('_price_request.ACTION_PRICE_REQUEST_STATUS',null);

  },
};
