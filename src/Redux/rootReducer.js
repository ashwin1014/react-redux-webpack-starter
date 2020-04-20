import { combineReducers } from 'redux';

import HomeReducer from '../Pages/Home/Redux/Home.Reducer';

const appReducer = combineReducers({
  home: HomeReducer
});

const rootReducer = (state, action) => {
  // when a logout or unauthorized action  is dispatched it will reset redux state
  if (action.type === 'USER_LOGOUT') {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
