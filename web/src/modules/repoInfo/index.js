import { LOAD_URL, LOAD_NEW_ATTEMPT, LOAD_NEW_SUCCESS, LOAD_NEW_FAIL } from './actionTypes';

import  { combineReducers } from 'redux';

export * from './actions';


const url = '';
function repoInfo(state= url, action){
  switch(action.type){
    case LOAD_URL:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

function noticias(state= {}, action){
  switch(action.type){
    case LOAD_NEW_SUCCESS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export default combineReducers({
  repoInfo,
  noticias,
})