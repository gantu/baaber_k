import React from 'react';
import {mount} from 'react-mounter';

import {
  LayoutDefault,
  Simple
} from '/client/configs/theme.jsx';

import VendorCollectionView from './components/vendors/collection.jsx';
import VendorSingle from './components/vendors/wrapper_single.jsx';
import VendortSingleDataComposer from './composers/vendors/_single.jsx';

const VendorSingleView = VendortSingleDataComposer(VendorSingle);

export default function (injectDeps, {FlowRouter}) {

  const LayoutDefaultCtx = injectDeps(LayoutDefault);

  FlowRouter.route('/admin/vendors/list', {
    name: '_admin.vendors.list',
    action() {
        if (!Meteor.userId()) {
            FlowRouter.go('/login');
        }

      mount(LayoutDefaultCtx, {
        content: () => (<VendorCollectionView />),
      });
    }
  });
  FlowRouter.route('/admin/vendors/:_id', {
    name: '_admin.vendors.list',
    action({_id}) {
        if (!Meteor.userId()) {
            FlowRouter.go('/login');
        }

      mount(LayoutDefaultCtx, {
        content: () => (<VendorSingleView _id={_id}/>),
      });
    }
  });

};
