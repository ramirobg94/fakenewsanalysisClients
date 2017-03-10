import { SET_STATUS,
 CHECK_URL_ATTEMPT, CHECK_URL_SUCCESS,CHECK_URL_FAIL,
 CHECK_STATUS_ATTEMPT, CHECK_STATUS_SUCCESS, CHECK_STATUS_FAIL,
 CHECK_RESULTS_ATTEMPT, CHECK_RESULTS_SUCCESS, CHECK_RESULTS_FAIL
} from './actionTypes';
import {get, post} from '../../lib/api';

import { loadId,loadTests,loadRevision } from '../repoInfo';
import { loadVulnerabilities } from '../vulnerabilities';


export function setStatus(details){
  return {
    type: SET_STATUS,
    details: details
  }
}

export function checkUrl(details){

  return (dispatch) => {

    dispatch({
      type: CHECK_URL_ATTEMPT
    });

    post('http://127.0.0.1:8000/api/v1/project', { lang: 'nodejs', repo: details})
    .then(response => {

      dispatch({
        type: CHECK_URL_SUCCESS
      });

      dispatch(loadId(response.project))
      dispatch(loadRevision(response.revision))

    })
    .catch( err => {
      dispatch({
        type: CHECK_URL_FAIL,
        error: err
      })
    })
  }
}

export function checkStatus(details){

  return (dispatch) => {

    dispatch({
      type: CHECK_STATUS_ATTEMPT
    });

    get('http://127.0.0.1:8000/api/v1/project/'+details+'/status')
    .then(response => {

      const posibleStatus= ['start','created','running','finished','non-accessible', 'results'];
      var newStatus = posibleStatus.indexOf(response.status)
      
      dispatch({
        type: CHECK_STATUS_SUCCESS,
        status: newStatus
      });

      dispatch(loadTests({
        totalTests: 0,
        totalLibraries: 1
      }))

      if(response.status == 'finished'){
        dispatch(checkResults(details))
      }

    })
    .catch( err => {
      dispatch({
        type: CHECK_STATUS_FAIL,
        error: err
      })
    })
  }
}

export function checkResults(details){

  return (dispatch) => {

    dispatch({
      type: CHECK_RESULTS_ATTEMPT
    });
    
    get('http://127.0.0.1:8000/api/v1/project/'+details+'/revisions/0')
    .then(response => {

      const posibleStatus= ['start','created','running','finished','non-accessible', 'results'];
      var newStatus = posibleStatus.indexOf('finished')
      
      dispatch({
        type: CHECK_RESULTS_SUCCESS,
        status: newStatus
      });

      dispatch(loadTests({
        totalTests: response.totalTests,
        totalLibraries: response.totalLibraries
      }))

      dispatch(loadVulnerabilities(response.vulnerabilities))


    })
    .catch( err => {
      dispatch({
        type: CHECK_RESULTS_FAIL,
        error: err
      })
    })
  }
}