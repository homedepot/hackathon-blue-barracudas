import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import WishesLanding from '../components/wishesLanding/WishesLanding'
import ManageWishes from '../components/manageWishes/ManageWishes'
import DateList from '../components/dateList/DateList'
import WatchAuth from '../auth/WatchAuth'
import ChildSignUp from '../components/childsignup/ChildSignUp';
import ChildDetails from '../components/childDetails/ChildDetails';
import ConfirmationPage from '../components/confirmationPage/ConfirmationPage';
import Admin from '../components/adminLogin/AdminLogin'

function App() {
  return (
    <Router>
      <WatchAuth>
        <Switch>
          <Route exact path="/" component={WishesLanding} />
          <Route exact path="/childsignup" component={ChildSignUp} />
          <Route exact path="/child-details" component={ChildDetails} />
          <Route exact path="/wish-submitted" component={ConfirmationPage} />
          <Route exact path="/manage-wishes" component={ManageWishes} />
          <Route exact path="/date-list" component={DateList} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </WatchAuth>
    </Router>
  )
}

export default App
