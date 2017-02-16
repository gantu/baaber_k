import React from 'react';
import {mount} from 'react-mounter';

import {
  LayoutDefault,
  PermissionDenied,
  NotFound
} from '/client/configs/theme.jsx';

import MainLayout from './components/main_layout.jsx';
import PostList from './containers/postlist';
import Post from './containers/post';
import NewPost from './containers/newpost';


export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(LayoutDefault,);

  FlowRouter.route('/posts', {
    name: 'posts.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PostList />)
      });
    }
  });

  FlowRouter.route('/permission_denied', {
    name: 'core.permission_denied',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PermissionDenied />)
      });
    }
  });

  FlowRouter.route('/not_found', {
    name: 'core.not_found',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NotFound />)
      });
    }
  });

  FlowRouter.route('/post/:postId', {
    name: 'posts.single',
    action({postId}) {
      mount(MainLayoutCtx, {
        content: () => (<Post postId={postId}/>)
      });
    }
  });

  FlowRouter.route('/new-post', {
    name: 'newpost',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewPost/>)
      });
    }
  });
}
