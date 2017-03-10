import { SET_STATUS,
 CHECK_URL_ATTEMPT, CHECK_URL_SUCCESS,CHECK_URL_FAIL,
 CHECK_STATUS_ATTEMPT, CHECK_STATUS_SUCCESS, CHECK_STATUS_FAIL,
 CHECK_RESULTS_ATTEMPT, CHECK_RESULTS_SUCCESS, CHECK_RESULTS_FAIL
} from './actionTypes';
import {get, post} from '../../lib/api';

import { loadId,loadTests,loadRevision } from '../repoInfo';



export function setStatus(details){
  return {
    type: SET_STATUS,
    details: details
  }
}
