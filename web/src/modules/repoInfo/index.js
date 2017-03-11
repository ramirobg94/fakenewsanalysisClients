import { LOAD_URL, LOAD_NEW_ATTEMPT, LOAD_NEW_SUCCESS, LOAD_NEW_FAIL,
  LOAD_LIKES_ATTEMPT, LOAD_LIKES_SUCCESS, LOAD_LIKES_FAIL,
  LOAD_DISLIKES_ATTEMPT, LOAD_DISLIKES_SUCCESS, LOAD_DISLIKES_FAIL,
  LOAD_FB_ATTEMPT, LOAD_FB_SUCCESS, LOAD_FB_FAIL,
  LOAD_TWITTER_ATTEMPT, LOAD_TWITTER_SUCCESS, LOAD_TWITTER_FAIL,
  LOAD_LENGUAJE_ATTEMPT, LOAD_LENGUAJE_SUCCESS, LOAD_LENGUAJE_FAIL
} from './actionTypes';


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

function likes(state= {}, action){
  switch(action.type){
    case LOAD_LIKES_SUCCESS:
    console.log("likesSuces")
    console.log(action)
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

function disLikes(state= {}, action){
  switch(action.type){
    case LOAD_DISLIKES_SUCCESS:
    console.log("dislikesSucess")
    console.log(action)
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}


function fb(state= {}, action){
  switch(action.type){
    case LOAD_FB_SUCCESS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

function twitter(state= {}, action){
  switch(action.type){
    case LOAD_TWITTER_SUCCESS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

function lenguaje(state= {}, action){
  switch(action.type){
    case LOAD_LENGUAJE_SUCCESS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}




export default combineReducers({
  repoInfo,
  noticias,
  likes,
  disLikes,
  fb,
  twitter,
  lenguaje
})