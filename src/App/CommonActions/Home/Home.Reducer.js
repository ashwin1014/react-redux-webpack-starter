/* eslint-disable no-useless-return */
/* eslint-disable default-case */
/* eslint-disable no-param-reassign */
import produce from 'immer';

const INIT_STATE = {
  title: 'Home'
};

// eslint-disable-next-line no-unused-vars
const reducer = produce((draft, { type, payload } = {}) => {
  // eslint-disable-next-line no-empty
  switch (type) {
  }
}, INIT_STATE);

export default reducer;
