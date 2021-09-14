import React from "react";
import {
  Route,
  BrowserRouter,
  Link,
  Switch,
  HashRouter,
} from "react-router-dom";
import home from "./pages/home";
import user from "./pages/user";
import blog from "./pages/blog";
import resume from "./pages/resume";
import "./app.less";
import "/static/css/reset.min.css";

export default function App() {
  return (
    <HashRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
      <Route path="/" exact component={home} />
      <Route path="/user" exact component={user} />
      <Route path="/blog" exact component={blog} />
      <Route
        path="/resume"
        exact
        render={() => (
          <div>
            <p>RESUMEPAGE</p>
          </div>
        )}
      />
    </HashRouter>
  );
}
