import produce from 'immer';

const INIT_STATE = {};

export default (state = INIT_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      
    default:
      return state;
    }
  });