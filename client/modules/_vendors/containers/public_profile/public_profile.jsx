// import {useDeps} from 'react-simple-di';
// import {composeWithTracker, composeAll} from 'react-komposer';
//
// import {addComposer, depsMapper} from '../../composers/colors/add.jsx';
import dataComposer from '../../composers/public_profile/collection.jsx';

import Component from '../../components/public_profile/_collection.jsx';

export default dataComposer(Component);

// export default composeAll(
//     composeWithTracker(addComposer),
//     useDeps(depsMapper)
//   )(Component);
