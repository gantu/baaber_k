import React from 'react';
import {mount} from 'react-mounter';

import {
  LayoutDefault,
  Simple
} from '/client/configs/theme.jsx';

import Surveys from './composers/wrapper.jsx'

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

};
