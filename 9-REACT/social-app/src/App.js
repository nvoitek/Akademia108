import './App.css';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Feed from './Feed';
import Signup from './Signup';
import axios from 'axios';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState(["Post1", "Post2", "Post3", "Post4", "Post5"]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    let intervalId = setInterval(() => showLoginPopup(), 10000);

    return function cleanup() {
      console.log(`Clean Interval - ${Date.now()}`);
      clearInterval(intervalId);
    }
  }, []);

  const showLoginPopup = () => {
    if (!isLoggedIn) {
      setIsPopupVisible(true);
    }
  };

  const Logout = () => {
    if (isLoggedIn) {
      let axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('jwt_token')
        }
      };

      axios.post(
        'https://akademia108.pl/api/social-app/user/logout',
        '',
        axiosConfig)
        .then((res) => {
          console.log("RESPONSE RECEIVED: ", res);
          setIsLoggedIn(false);
          localStorage.clear();
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        })
    }
  };

  const Login = () => {
    setIsPopupVisible(false);
    setIsLoggedIn(true);
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {
              (!isLoggedIn ?
                <>
                  <li>
                    <Link to="/signup">SignUp</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </>
                :
                <>
                  <li>
                    <Link to="/login" onClick={Logout}>Logout</Link>
                  </li>
                </>)
            }
          </ul>
        </nav>

        <hr />

        <Switch>
          <Route exact path="/">
            <div>
              <header className="App-header">
                <h1>BearLy Social App</h1>
              </header>
              <Feed posts={posts} />
              <div className={"popup " + (isPopupVisible ? "visible" : "hidden")}>
                <Signup type='login' onLogin={Login}/>
              </div>
            </div>
          </Route>
          <Route path="/login">
            <div>
              <Signup type='login' onLogin={Login}/>
            </div>
          </Route>
          <Route path="/signup">
            <div>
              <Signup />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
