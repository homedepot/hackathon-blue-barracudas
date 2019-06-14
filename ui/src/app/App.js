import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Login from '../login/Login'
import Landing from '../landing/Landing'
import WatchAuth from '../auth/WatchAuth'
import ChildSignUp from '../childsignup/ChildSignUp';

function App() {
  return (
    <Router>
      <WatchAuth>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/childsignup" component={ChildSignUp} />
          <Route exact path="/" component={Landing} />
        </Switch>
      </WatchAuth>
    </Router>
  )
}

export default App
