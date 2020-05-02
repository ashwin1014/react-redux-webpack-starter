import produce from 'immer';

const INIT_STATE = {
  title: 'Home'
};

export default (state = INIT_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      default:
        return draft;
    }
  });
