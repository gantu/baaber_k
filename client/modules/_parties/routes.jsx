import React from 'react';
import {mount} from 'react-mounter';

import {
  LayoutDefault,
  Simple
} from '/client/configs/theme.jsx';

import NewParty from './components/new_party.jsx';
import PartyList from './components/party_list.jsx';


export default function (injectDeps, {FlowRouter,LocalState}) {
  const LayoutDefaultCtx = injectDeps(LayoutDefault);

  FlowRouter.route('/parties', {
    name: 'parties.list',
    action() {
      mount(LayoutDefaultCtx, {
        content: () => (<PartyList />)
      });
    }
  });

  FlowRouter.route('/parties/add', {
    name: '_parties.addParty',
    action() {
      /*if(Session.get("_vendors.ADD_VENDOR_REQUEST_STATUS")=="done"){
          FlowRouter.go(`/vendors/request_status`);
      }*/

      mount(LayoutDefaultCtx, {
        content: () => (<NewParty />)
      });
    }
  });

};
