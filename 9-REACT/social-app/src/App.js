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
  const [posts, setPosts] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('jwt_token') ? localStorage.getItem('jwt_token') : ''
    }
  };

  useEffect(() => {
    getPosts();
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

  const logout = () => {
    if (isLoggedIn) {
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

  const login = () => {
    setIsPopupVisible(false);
    setIsLoggedIn(true);
  }

  const getPosts = () => {
    let axiosConfig;

    axios.post(
      'https://akademia108.pl/api/social-app/post/latest',
      '',
      axiosConfig)
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        setPosts([...res.data]);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      })
  }

  return (
    <Router>
      <div>
        <nav>
          <ul className="NavMenu">
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
                    <Link to="/login" onClick={logout}>Logout</Link>
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
              <button onClick={getPosts}>Get Posts</button>
              <Feed posts={posts} />
              <div className={"popup " + (isPopupVisible ? "visible" : "hidden")}>
                <Signup type='login' onLogin={login}/>
              </div>
            </div>
          </Route>
          <Route path="/login">
            <div>
              <Signup type='login' onLogin={login}/>
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
