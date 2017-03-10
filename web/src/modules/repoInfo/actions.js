import { LOAD_URL, LOAD_NEW_ATTEMPT, LOAD_NEW_SUCCESS, LOAD_NEW_FAIL } from './actionTypes';
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

     return Api.post('/article',{url: details}).then(response => {

      console.log("response")
      console.log(response)
      dispatch({
        type: LOAD_NEW_SUCCESS,
        payload: response
      });


    })
    .catch( err => {
      console.log("error")
      console.log(err)
      dispatch({
        type: LOAD_NEW_FAIL,
        error: err
      })
    })
  }
}
