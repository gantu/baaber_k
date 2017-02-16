import React from 'react';
import {mount} from 'react-mounter';

import {
  LayoutDefault,
  Simple
} from '/client/configs/theme.jsx';


import Entry from './components/entry/wrapper.jsx';

export default function (injectDeps, {FlowRouter,LocalState}) {
  const LayoutDefaultCtx = injectDeps(LayoutDefault);

  function checkLoggedIn (ctx, redirect) {  
    if (!Meteor.userId()) {
      redirect('/login')
    }
  }

  

  FlowRouter.route('/', {
    name: 'main.Entry',
    action() {
      mount(LayoutDefaultCtx, {
        content: () => (<Entry />)
      });
    }
  });
};
