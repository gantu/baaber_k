import publications from './publications';
import methods from './methods';
import addInitialData from './configs/initial_adds.js';
import addInitialUser from './configs/initial_users.js';
//import configure from './configs/configure_services.js';
import kadira from './configs/kadira.js';

publications();
methods();
addInitialData();
addInitialUser();
//configure();
kadira();
