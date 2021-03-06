import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Home from '../views/home'
import Detail from '../views/detail'
import Frame from '../layouts/frame'
import Comment from '../views/comment'
import Theme from '../views/theme'
const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Frame}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path='/detail/:id' component={Detail}></Route>
      <Route path="/comment/:id" component={Comment}></Route>
      <Route path="/theme/:id" component={Theme}></Route>
    </Route>
    
  </Router>
)

export default routes
