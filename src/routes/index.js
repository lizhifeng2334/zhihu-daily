import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Home from '../views/home'
import Detail from '../views/detail'
import Frame from '../layouts/frame'
const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Frame}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path='/detail/:id' component={Detail}></Route>
    </Route>
    
  </Router>
)

export default routes