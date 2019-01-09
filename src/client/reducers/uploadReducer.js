import { LOAD_VIDEO_FILE } from '../actionTypes';

const initialState = {
  isLoaded: false,
  fileInfo: '',
};

const uploadReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_VIDEO_FILE:
      return {
        fileInfo: action.data,
        isLoaded: action && action.data,
      };
    default:
      return state;
  }
};

export default uploadReducer;

// action.data
//         && Object.keys(action.data).length > 0,
//         userInfo: action.userInfo
