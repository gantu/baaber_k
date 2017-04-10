import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import commentsModule from './modules/comments';

import _usersModule from './modules/_users';
//import _colorsModule from './modules/_colors';

import _vendorsModule from './modules/_vendors';

import mainModule from './modules/main_core';
import communicateModule from './modules/communicate';

import _partiesModule from './modules/_parties';

import _surveyModule from './modules/_survey';

import _adminModule from './modules/_admin';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(mainModule);
app.loadModule(_vendorsModule);
app.loadModule(communicateModule);
app.loadModule(coreModule);
app.loadModule(commentsModule);
app.loadModule(_usersModule);
app.loadModule(_partiesModule);
app.loadModule(_surveyModule);
//app.loadModule(_colorsModule);
app.loadModule(_adminModule);




app.init();
