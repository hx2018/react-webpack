import React from "react";
import {
  Route,
  BrowserRouter,
  Link,
  Switch,
  HashRouter,
} from "react-router-dom";
import Home from "./pages/home";
import User from "./pages/user";
import Blog from "./pages/blog";
import Resume from "./pages/resume";
import "./app.less";

export default function App() {
  return (
    <BrowserRouter>
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
      <Route path="/" exact component={Home} />
      <Route path="/user" exact component={User} />
      <Route path="/blog" component={Blog} />
      <Route
        path="/resume"
        exact
        render={() => (
          <div>
            <p>RESUMEPAGE</p>
          </div>
        )}
      />
    </BrowserRouter>
  );
}
