import React, { Component, PropTypes } from 'react';
import {Router,Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './layout';
import Landing from './landing';
import Detail from './Detail';

import NotFound from './statics/notFound'


class Verum extends Component {
  constructor(props){
    super(props)
  }
  render(){

    return(
    <Router history={browserHistory}> 
      <Route path='/' component={ Layout} > 
        <IndexRoute component={ Landing } />
        <Route path='detail' component={Detail} />
        <Route path='*' component={NotFound} />
      </Route>
    </Router> 
      )
  }
    
}

export default Verum;