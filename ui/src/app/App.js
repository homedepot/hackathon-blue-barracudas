import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Login from '../Components/login/Login'
import Landing from '../Components/landing/Landing'
import Wish from '../Components/wish/Wish'
import WatchAuth from '../auth/WatchAuth'

 import Admin from '../Components/adminLogin/adminLogin'

function App() {
  return (
    <Router>
      <WatchAuth>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/wish" component={Wish} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </WatchAuth>
    </Router>
  )
}

export default App
