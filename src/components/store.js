import { createStore } from 'redux';

const initialState = {
  comments: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
