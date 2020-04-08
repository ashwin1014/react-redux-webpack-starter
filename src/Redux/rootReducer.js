import { combineReducers } from 'redux';

import HomeReducer from '../pages/Home/Redux/Home.Types';

const appReducer = combineReducers({
    home:  HomeReducer
});

const rootReducer = (state, action) => {
    // when a logout or unauthorized action  is dispatched it will reset redux state
    if (action.type === 'USER_LOGOUT') {
      state = undefined;
    }
  
    return appReducer(state, action);
  };
  
 export default rootReducer;