import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const addComposer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('_price_request.ACTION_PRICE_REQUEST_ERROR');
  const status = LocalState.get('_price_request.ACTION_PRICE_REQUEST_STATUS');

  onData(null, {error,status});

  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  sendRequestAction: actions._price_request.sendPriceRequest,
  clearErrors: actions._price_request.clearErrors,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(addComposer),
    useDeps(depsMapper)
  )(component);
