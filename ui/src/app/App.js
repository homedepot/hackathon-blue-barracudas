import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Login from '../components/login/Login'
import Landing from '../components/landing/Landing'
import WishList from '../components/wishList/WishList'
import WatchAuth from '../auth/WatchAuth'
import Admin from '../components/adminLogin/adminLogin'

function App() {
  return (
    <Router>
      <WatchAuth>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/wishes" component={WishList} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </WatchAuth>
    </Router>
  )
}

export default App
