import React from 'react';
import {mount} from 'react-mounter';

import NewSurvey from './components/new.jsx';
import newSurveyComposer from './composers/_new.jsx';

import EditSurvey from './components/edit_survey.jsx';
import editSurveyComposer from './composers/_single.jsx';

const NewView = newSurveyComposer(NewSurvey);
const EditView = editSurveyComposer(EditSurvey);

import {
  LayoutDefault,
  Simple
} from '/client/configs/theme.jsx';

import Surveys from './components/list.jsx'


export default function (injectDeps, {FlowRouter}) {

  const LayoutDefaultCtx = injectDeps(LayoutDefault);

  FlowRouter.route('/survey', {
    name: 'left',
    action() {
      if (!Meteor.userId()) {
        FlowRouter.go('/login');
      }
      mount(LayoutDefaultCtx, {
        content: () => (<Surveys />),
      });
    }
  });
    
 FlowRouter.route('/survey/edit/:_id', {
    name: '_survey.editView',
    action({_id}) {
      mount(LayoutDefaultCtx, {
        content: () => (<EditView _id={_id}/>)
      });
    }
  });
 
FlowRouter.route('/survey/new', {
    name: '_survey.newView',
    action() {
      mount(LayoutDefaultCtx, {
        content: () => (<NewView />)
      });
    }
  });


};
