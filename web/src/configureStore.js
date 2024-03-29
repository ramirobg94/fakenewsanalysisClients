import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import repoInfo from './modules/repoInfo';
import status from './modules/status';

export default function configureStore(){
  const appReducer = combineReducers({
    repoInfo,
    status
  });

  /*let enhancer;
  if(process.env.NODE_ENV === 'development'){
    enhancer = compose (
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    );
  }else{
    enhancer = applyMiddleware(thunk);
  }*/

  const enhancer = compose (
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    );

  return createStore(appReducer, enhancer);
}