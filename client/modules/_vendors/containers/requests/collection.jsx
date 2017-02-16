// import {useDeps} from 'react-simple-di';
// import {composeWithTracker, composeAll} from 'react-komposer';

// import {collectionComposer} from '../../composers/colors/collection.jsx';
import dataComposer from '../../composers/requests/collection.jsx';

import Component from '../../components/requests/_collection.jsx';

export default dataComposer(Component);

// export default composeAll(
//     composeWithTracker(collectionComposer),
//     useDeps()
//   )(Component);
