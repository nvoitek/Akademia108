import './App.css';
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Feed from './Feed';
import Login from './Login';
import Signup from './Signup';

function App() {

  const [posts, setPosts] = useState(["Post1", "Post2", "Post3", "Post4", "Post5"]);

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <div>
              <header className="App-header">
                <h1>BearLy Social App</h1>
              </header>
              <Feed posts={posts} />
            </div>
          </Route>
          <Route path="/login">
            <div>
              <Login />
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