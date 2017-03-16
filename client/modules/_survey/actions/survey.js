export default {
   create({Meteor, LocalState, FlowRouter}, title, content) {
     if (!title || !content) {
       return LocalState.set('SAVING_ERROR', 'Title & Content are required!');
     }

     LocalState.set('SAVING_ERROR', null);

     const id = Meteor.uuid();
     // There is a method stub for this in the config/method_stubs
     // That's how we are doing latency compensation
     Meteor.call('posts.create', id, title, content, (err) => {
       if (err) {
         return LocalState.set('SAVING_ERROR', err.message);
       }
     });
     FlowRouter.go(`/post/${id}`);
   },
    
    saveSurvey({Meteor,LocalState},data){
        Meteor.call('_surveys.addSurvey', data,Meteor.userId(), (err) => {
            
            if (err) {
                Bert.alert('Very sorry can not add survey','danger');
                //return LocalState.set('_surveys.ACTION_SURVEY_ERROR', err.message);
            }else{
                Bert.alert('Sucessfully saved!','success');
            }

        });
    },

   clearErrors({LocalState}) {
     return LocalState.set('SAVING_ERROR', null);
   },
   
   permissionDenied({Meteor,FlowRouter,LocalState}){
    LocalState.set('_vendors.ACTION_VENDOR_ERROR', null);
    FlowRouter.go(`/permission_denied`);
  },
 };
