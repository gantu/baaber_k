import React from 'react';
import {mount} from 'react-mounter';

import {
  LayoutDefault,
  Simple
} from '/client/configs/theme.jsx';


import PriceRequestList from './components/price_requests/collection.jsx';
import PriceRequestSingle from './components/price_requests/single.jsx';

export default function (injectDeps, {FlowRouter,LocalState}) {
  const LayoutDefaultCtx = injectDeps(LayoutDefault);

  FlowRouter.route('/price_request/list', {
    name: '_price_requests.List',
    action() {
      mount(LayoutDefaultCtx, {
        content: () => (<PriceRequestList/>)
      });
    }
  });

  FlowRouter.route('/price_request/:_id', {
    name: '_price_requests.single',
    action({_id}) {
      mount(LayoutDefaultCtx, {
        content: () => (<PriceRequestSingle _id={_id}/>)
      });
    }
  });
};
