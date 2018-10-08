/**
 * It's re-ducks for redux. It's a best practice for scalable redux structure.
 * To see details: https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be
 */

import reducer from './reducers';

export { default as seasonSelectors } from './selectors';
export { default as seasonOperations } from './operations';
export { default as seasonTypes } from './types';

export default reducer;
