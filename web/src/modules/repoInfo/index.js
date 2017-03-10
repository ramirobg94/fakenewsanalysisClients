import { LOAD_URL, LOAD_ID, LOAD_TEST,LOAD_REVISION } from './actionTypes';

export * from './actions';


const initialState = {
  url: ''
}
function repoInfo(state= initialState, action){
  switch(action.type){
    case LOAD_URL:
    case LOAD_REVISION:
    case LOAD_ID:
    case LOAD_TEST:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
}

export default repoInfo;