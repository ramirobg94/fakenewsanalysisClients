import { LOAD_URL, LOAD_ID, LOAD_TEST, LOAD_REVISION} from './actionTypes';

export function loadUrl(payload){
  return {
  	type: LOAD_URL,
    payload: payload
  }
}

export function loadId(payload){
  return {
  	type: LOAD_ID,
    payload: {id: payload}
  }
}

export function loadTests(payload){
  return {
  	type: LOAD_TEST,
    payload: payload
  }
}

export function loadRevision(payload){
  return {
    type: LOAD_REVISION,
    payload: {revision: payload}
  }
}