// import {useDeps} from 'react-simple-di';
// import {composeWithTracker, composeAll} from 'react-komposer';
//
// import {addComposer, depsMapper} from '../../composers/colors/add.jsx';
import dataComposer from '../../composers/price_requests/request.jsx';

import Component from '../../components/price_requests/_form.jsx';

export default dataComposer(Component);

// export default composeAll(
//     composeWithTracker(addComposer),
//     useDeps(depsMapper)
//   )(Component);
