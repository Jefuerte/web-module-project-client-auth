import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';


const FriendsList = ()=>{
  return (<h2>FriendsList</h2>)
}

const AddFriend = ()=>{
  return (<h2>Add Friend</h2>)
}

const Login = ()=>{
  return(<div>
    <h1>Login</h1>
    <form>
      <div>
      <label htmlFor="username">Username:</label>
      <input id="username"/>
      </div>
      <div>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password"/>
      </div>
      <button>Submit</button>
    </form>
      </div>)
}

function App () {
  return(
    <Router>
      <div className="App">
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/login">
          <Redirect to="/" />
        </Route>
        <Route exact path="/friends">
          <FriendsList />
        </Route>
        <Route exact path="/friends/add">
          <AddFriend />
        </Route>
      </div>
    </Router>
  )
}

export default App;