import React from 'react';
import {mount,withOptions} from 'react-mounter';

import editSurveyComposer from './composers/_single.jsx';
import newSurveyComposer from './composers/_new.jsx';
import publicSurveyListComposer from './composers/public_survey/_collections.jsx';
import publicSurveySingle from './composers/public_survey/_single.jsx';


import NewSurvey from './components/new.jsx';
import EditSurvey from './components/edit_survey.jsx';
import Surveys from './components/list.jsx'
import PublicSurveyList from './components/public_survey/_list.jsx';
import PublicSurvey from './components/public_survey/_single.jsx';
import DataVisView from './components/data_vis/wrapper.jsx';
import CustomerInfoListView from './components/customer_info/wrapper.jsx';

import LayoutSurvey from './components/public_survey/LayoutSurvey.jsx';

const NewView = newSurveyComposer(NewSurvey);
const EditView = editSurveyComposer(EditSurvey);
const PublicSurveyListView = publicSurveyListComposer(PublicSurveyList);
const PublicSurveyView = publicSurveySingle(PublicSurvey);



import {
  LayoutDefault,
  Simple
} from '/client/configs/theme.jsx';

export default function (injectDeps, {FlowRouter}) {

  const mount2 = withOptions({
    rootId: 'the-root',
    rootProps: {'className': 'container-fluid'}
  }, mount);

  const LayoutDefaultCtx = injectDeps(LayoutDefault);
  const LayoutSurveyCtx = injectDeps(LayoutSurvey);

  FlowRouter.route('/survey/list', {
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
      if (!Meteor.userId()) {
        FlowRouter.go('/login');
      }
      mount(LayoutDefaultCtx, {
        content: () => (<EditView _id={_id}/>)
      });
    }
  });

FlowRouter.route('/survey/new', {
    name: '_survey.newView',
    action() {
        if (!Meteor.userId()) {
            FlowRouter.go('/login');
        }
      mount(LayoutDefaultCtx, {
        content: () => (<NewView />)
      });
    }
  });

// FlowRouter.route('/survey/answer/draw/:_id', {
//     name: '_survey.answerDraw',
//     action({_id}) {
//       if (!Meteor.userId()) {
//         FlowRouter.go('/login');
//       }
//        var filter=FlowRouter.getQueryParam("filter");
//         console.log(filter);
//       mount(LayoutDefaultCtx, {
//
//         content: () => (<DataVisView _id={_id} filter={filter}/>)
//       });
//     }
//   });
FlowRouter.route('/survey/answer/draw/:_id', {
    name: '_survey.answerDraw',
    action({_id}) {
      if (!Meteor.userId()) {
        FlowRouter.go('/login');
      }
      mount(LayoutDefaultCtx, {
        content: () => (<DataVisView _id={_id}/>)
      });
    }
  });

FlowRouter.route('/survey/public/list/:_id', {
    name: 'public_survey_list',
    action({_id}) {
      mount(LayoutSurveyCtx, {
        content: () => (<PublicSurveyListView _id={_id} />),
      });
    }
  });

FlowRouter.route('/survey/public/:_id', {
    name: 'public_survey',
    action({_id}) {
      mount(LayoutSurveyCtx, {
        content: () => (<PublicSurveyView _id={_id} />),
      });
    }
  });

FlowRouter.route('/survey/customer/list', {
    name: 'survey_customer_list',
    action() {
      if (!Meteor.userId()) {
        FlowRouter.go('/login');
      }
      mount(LayoutDefaultCtx, {
        content: () => (<CustomerInfoListView />),
      });
    }
  });
};
