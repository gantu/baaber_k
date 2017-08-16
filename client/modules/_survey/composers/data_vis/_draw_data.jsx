import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';


export const composer = ({context, clearErrors,permission_denied,_id,filter}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('SURVEY_ERROR');
  const loggedIn = Meteor.user();

  const graph_data = LocalState.get('GRAPH_DATA');
  if(typeof graph_data!== "undefined"){
    onData(null,{graph_data});
  }else{


  if (Meteor.subscribe('_surveys.single',_id).ready()) {

      const survey = Collections.surveys.findOne({_id:_id});
      const answerCount = survey.answerCount;

      Meteor.call('_answers.getAggregateData',_id,filter,(error,responce) => {
        if ( error ) {
          Bert.alert( error.reason );
        } else {
            for(var i=0;i<responce.length;i++){
              responce[i]._id.seq=i;
            }

            onData(null, {responce,answerCount,survey});

        }
      });
  }
}

  //const graph_data = LocalState.get('graph_data') ? LocalState.get('graph_data') : undefined; onData(null, {graph_data,answerCount,survey});

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  clearErrors: actions._survey.clearErrors,
  applyFilter: actions._survey.applyFilter,
  permission_denied: actions._survey.permissionDenied,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
  )(component);
