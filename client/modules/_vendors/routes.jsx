import React from 'react';
import {mount} from 'react-mounter';

import {
  LayoutDefault,
  Simple
} from '/client/configs/theme.jsx';

import VendorRequestAdd from './components/requests/add.jsx';
import VendorRequestStatus from './components/requests/status.jsx';
import VendorRequestList from './components/requests/collection.jsx';
import VendorRequestView from './components/requests/single.jsx';
import VendorRegisterView from './components/register/wrapper.jsx';
import VendorProfileView from './components/profile/wrapper.jsx';
import VendorList from './components/public_profile/collection.jsx';
import VendorPublicSingleProfile from './components/public_profile/single_wrapper.jsx';

export default function (injectDeps, {FlowRouter,LocalState}) {
  const LayoutDefaultCtx = injectDeps(LayoutDefault);

  FlowRouter.route('/vendors', {
    name: 'vendors.list',
    action() {
      mount(LayoutDefaultCtx, {
        content: () => (<VendorList />)
      });
    }
  });

  FlowRouter.route('/vendors/requests/add', {
    name: '_vendors.addRequest',
    action() {
      mount(LayoutDefaultCtx, {
        content: () => (<VendorRequestAdd />)
      });
    }
  });

  FlowRouter.route('/vendors/requests/:_id', {
    name: '_vendors.requestView',
    action({_id}) {
      mount(LayoutDefaultCtx, {
        content: () => (<VendorRequestView _id={_id}/>)
      });
    }
  });

  FlowRouter.route('/vendors/requests/status', {
    name: '_vendors.request._status',
    action() {
      mount(LayoutDefaultCtx, {
        content: () => (<VendorRequestStatus />)
      });
  }

  });

  FlowRouter.route('/vendors/requests', {
    name: '_vendors.request_list',
    action() {

      mount(LayoutDefaultCtx, {
        content: () => (<VendorRequestList />)
      });
    }
  });

  FlowRouter.route('/vendors/signup/:_token', {
    name: '_vendors.registerView',
    action({_token}) {
      mount(LayoutDefaultCtx, {
        content: () => (<VendorRegisterView _token={_token} />)
      });
    }
  });

  FlowRouter.route('/vendors/profile', {
    name: '_vendors.profile',
    action() {
      if (!Meteor.userId()) {
        FlowRouter.go('/login');
      }

      mount(LayoutDefaultCtx, {
        content: () => (<VendorProfileView />)
      });
    }
  });

  FlowRouter.route('/vendors/public_profile/:_id', {
    name: '_vendors.publicProfileSingle',
    action({_id}) {
        mount(LayoutDefaultCtx, {
        content: () => (<VendorPublicSingleProfile _id={_id} />)
      });
    }
  });

};
