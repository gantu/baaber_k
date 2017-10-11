export default {
    addSurvey({Meteor,LocalState, FlowRouter},data){
        Meteor.call('_surveys.addSurvey', data,Meteor.userId(), (err) => {

            if (err) {
                Bert.alert('Very sorry can not add survey','danger');
                //return LocalState.set('_surveys.ACTION_SURVEY_ERROR', err.message);
            }else{
                Bert.alert('Sucessfully saved!','success');
                FlowRouter.go('/survey/list');
            }

        });
    },
    saveSurvey({Meteor,LocalState,FlowRouter},data){
        Meteor.call('_surveys.saveSurvey',data,Meteor.userId(),(err)=>{
            if(err){
                Bert.alert('Sorry can not save survey','danger');
            }else{
                Bert.alert('Successfully eited and saved!','success');
                FlowRouter.go('/survey/list');
            }
        });
    },
    deleteSurvey({Meteor, LocalState,FlowRouter},_id){
        Meteor.call('_surveys.deleteSurvey',_id,Meteor.userId(),(err)=>{
            if(err){
                 Bert.alert('Sorry can not save survey','danger');
            }else{
                 Bert.alert('Successfully Deleted!','success');
            }
        });
    },

    publishSurvey({Meteor,LocalState, FlowRouter},_id){
        Meteor.call('_surveys.publishSurvey',_id,Meteor.userId(),(err)=>{
            if(err){
                 Bert.alert('Cannot publish survey','danger');
            }else{
                 Bert.alert('Survey published!','success');
            }
        });
    },
     unPublishSurvey({Meteor,LocalState, FlowRouter},_id){
        Meteor.call('_surveys.unPublishSurvey',_id,Meteor.userId(),(err)=>{
            if(err){
                 Bert.alert('Cannot publish survey','danger');
            }else{
                 Bert.alert('Survey published!','success');
            }
        });
    },

    saveSurveyAnswers({Meteor, LocalState, FlowRouter},data,record_id){
        Meteor.call('_surveys.saveAnswers',data,(err)=>{
           if(err){
                 Bert.alert('Cannot save your answers!','danger');
            }else{
                 Bert.alert('Answers are saved!','success');
            }
            FlowRouter.go("/survey/public/list/"+record_id);
        });
    },

    applyFilter({Meteor, LocalState,FlowRouter},survey_id,filter){
        //var pathDef = "/survey/answer/draw/:_id";
        //var params={_id:survey_id};
        //var queryParams={filter:filter};
        //var path = FlowRouter.path(pathDef, params, queryParams);
        //FlowRouter.go(path);

        Meteor.call('_answers.getAggregateData',survey_id,filter,(error,responce) => {
          if ( error ) {
            Bert.alert( error.reason );
          } else {
            for(var i=0;i<responce.length;i++){
              responce[i]._id.seq=i;
            }
            LocalState.set('GRAPH_DATA',responce);
          }
        }) ; 
    },


   clearErrors({LocalState}) {
     LocalState.set('GRAPH_DATA',null);
     return LocalState.set('SAVING_ERROR', null);

   },

   permissionDenied({Meteor,FlowRouter,LocalState}){
    LocalState.set('_vendors.ACTION_VENDOR_ERROR', null);
    FlowRouter.go(`/permission_denied`);
  },
 };
