import { LOAD_URL, LOAD_NEW_ATTEMPT, LOAD_NEW_SUCCESS, LOAD_NEW_FAIL,
  LOAD_LIKES_ATTEMPT, LOAD_LIKES_SUCCESS, LOAD_LIKES_FAIL,
  LOAD_DISLIKES_ATTEMPT, LOAD_DISLIKES_SUCCESS, LOAD_DISLIKES_FAIL,
  LOAD_FB_ATTEMPT, LOAD_FB_SUCCESS, LOAD_FB_FAIL,
  LOAD_TWITTER_ATTEMPT, LOAD_TWITTER_SUCCESS, LOAD_TWITTER_FAIL,
  LOAD_LENGUAJE_ATTEMPT, LOAD_LENGUAJE_SUCCESS, LOAD_LENGUAJE_FAIL,
  LOAD_VERACITY_ATTEMPT, LOAD_VERACITY_SUCCESS, LOAD_VERACITY_FAIL,
LOAD_LIKE_ATTEMPT, LOAD_LIKE_SUCCESS, LOAD_LIKE_FAIL,
LOAD_DISLIKE_ATTEMPT, LOAD_DISLIKE_SUCCESS, LOAD_DISLIKE_FAIL,
LOAD_RELATED_ATTEMPT, LOAD_RELATED_SUCCESS, LOAD_RELATED_FAIL,

} from './actionTypes';
//import {get, post} from '../../lib/api';
import Api from '../../lib/api';

export function loadUrl(payload){
  return {
  	type: LOAD_URL,
    payload: payload
  }
}

export function loadNew(details){

  return (dispatch) => {

    dispatch({
      type: LOAD_NEW_ATTEMPT
    });

    if(details){


     return Api.post('/article',{url: details}).then(response => {

      var jsonO  = JSON.parse(response.responseText);
 
      dispatch({
        type: LOAD_NEW_SUCCESS,
        payload: jsonO
      });


    })
     .catch( err => {
      dispatch({
        type: LOAD_NEW_FAIL,
        error: err
      })
    })

   }else{
    dispatch({
      type: LOAD_NEW_FAIL,
      error: 'no url'
    })
  }

}
}


export function loadLikes(details){

  return (dispatch) => {

    dispatch({
      type: LOAD_LIKES_ATTEMPT
    });

    if(details){
     return Api.post('/getlikes',{url: details}).then(response => {
      console.log("likes", response);
      var jsonO  = JSON.parse(response.responseText);
      dispatch({
        type: LOAD_LIKES_SUCCESS,
        payload: jsonO
      });
    })
     .catch( err => {
      dispatch({
        type: LOAD_LIKES_FAIL,
        error: err
      })
    })

   }else{
    dispatch({
      type: LOAD_LIKES_FAIL,
      error: 'no likes'
    })
  }
}
}

export function loadDislikes(details){

  return (dispatch) => {

    dispatch({
      type: LOAD_DISLIKES_ATTEMPT
    });

    if(details){
     return Api.post('/getdislikes',{url: details}).then(response => {
      console.log("dislikes", response)
      var jsonO  = JSON.parse(response.responseText);
      console.log(jsonO);
      dispatch({
        type: LOAD_DISLIKES_SUCCESS,
        payload: jsonO
      });
    })
     .catch( err => {
      dispatch({
        type: LOAD_DISLIKES_FAIL,
        error: err
      })
    })

   }else{
    dispatch({
      type: LOAD_DISLIKES_FAIL,
      error: 'no dislikes'
    })
  }
}
}


export function loadFb(details){

  return (dispatch) => {

    dispatch({
      type: LOAD_FB_ATTEMPT
    });

    if(details){
     return Api.post('/fb',{url: details}).then(response => {

      var jsonO  = JSON.parse(response.responseText);
      dispatch({
        type: LOAD_FB_SUCCESS,
        payload: jsonO
      });
    })
     .catch( err => {
      dispatch({
        type: LOAD_FB_FAIL,
        error: err
      })
    })

   }else{
    dispatch({
      type: LOAD_FB_FAIL,
      error: 'no fb data'
    })
  }
}
}


export function loadTwitter(details){

  return (dispatch) => {

    dispatch({
      type: LOAD_TWITTER_ATTEMPT
    });

    if(details){
     return Api.post('/twitter',{url: details}).then(response => {

      var jsonO  = JSON.parse(response.responseText);
  
      dispatch({
        type: LOAD_TWITTER_SUCCESS,
        payload: jsonO
      });
    })
     .catch( err => {
      dispatch({
        type: LOAD_TWITTER_FAIL,
        error: err
      })
    })

   }else{
    dispatch({
      type: LOAD_TWITTER_FAIL,
      error: 'no twitter'
    })
  }
}
}

export function loadLenguageAnalysis(details){

  return (dispatch) => {

    dispatch({
      type: LOAD_LENGUAJE_ATTEMPT
    });

    if(details){
     return Api.post('/languageAnalysis',{url: details}).then(response => {

      var jsonO  = JSON.parse(response.responseText);
      dispatch({
        type: LOAD_LENGUAJE_SUCCESS,
        payload: jsonO
      });
    })
     .catch( err => {
      dispatch({
        type: LOAD_LENGUAJE_FAIL,
        error: err
      })
    })

   }else{
    dispatch({
      type: LOAD_LENGUAJE_FAIL,
      error: 'no languajes'
    })
  }
}
}

export function loadVeracity(details){

  return (dispatch) => {

    dispatch({
      type: LOAD_VERACITY_ATTEMPT
    });

    if(details){
     return Api.post('/analysis',{url: details}).then(response => {

      var jsonO  = JSON.parse(response.responseText);
      dispatch({
        type: LOAD_VERACITY_SUCCESS,
        payload: jsonO
      });
    })
     .catch( err => {
      dispatch({
        type: LOAD_VERACITY_FAIL,
        error: err
      })
    })

   }else{
    dispatch({
      type: LOAD_VERACITY_FAIL,
      error: 'no languajes'
    })
  }
}
}

export function like(details){

  return (dispatch) => {

    dispatch({
      type: LOAD_LIKE_ATTEMPT
    });

    if(details){
     return Api.post('/like',{url: details}).then(response => {

      var jsonO  = JSON.parse(response.responseText);
      dispatch({
        type: LOAD_LIKE_SUCCESS,
        payload: jsonO
      });
       dispatch(loadLikes(details))
    })
     .catch( err => {
      dispatch({
        type: LOAD_LIKE_FAIL,
        error: err
      })
    })

   }else{
    dispatch({
      type: LOAD_LIKE_FAIL,
      error: 'no languajes'
    })
  }
}
}


export function dislike(details){

  return (dispatch) => {

    dispatch({
      type: LOAD_DISLIKE_ATTEMPT
    });

    if(details){
     return Api.post('/dislike',{url: details}).then(response => {

      var jsonO  = JSON.parse(response.responseText);
      dispatch({
        type: LOAD_DISLIKE_SUCCESS,
        payload: jsonO
      });
      dispatch(loadDislikes(details));
    })
     .catch( err => {
      dispatch({
        type: LOAD_DISLIKE_FAIL,
        error: err
      })
    })

   }else{
    dispatch({
      type: LOAD_DISLIKE_FAIL,
      error: 'no languajes'
    })
  }
}
}


export function loadrelated(details){

  return (dispatch) => {

    dispatch({
      type: LOAD_RELATED_ATTEMPT
    });

    if(details){
     return Api.post('/related',{url: details}).then(response => {

      var jsonO  = JSON.parse(response.responseText);
      dispatch({
        type: LOAD_RELATED_SUCCESS,
        payload: jsonO
      });
      dispatch(loadDislikes(details));
    })
     .catch( err => {
      dispatch({
        type: LOAD_DRELATED_FAIL,
        error: err
      })
    })

   }else{
    dispatch({
      type: LOAD_RELATED_FAIL,
      error: 'no languajes'
    })
  }
}
}




