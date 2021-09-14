import React from "react";
import { Router, Route, hashHistory, IndexRedirect } from "react-router";
import home from "./pages/home";
import user from "./pages/user";
import blog from "./pages/blog";
import resume from "./pages/resume";
import "./app.less";

export default function App() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={home} />
      <Route path="/user" component={user} />
      <Route path="/blog" component={blog} />
      <Route path="/resume" component={resume} />
    </Router>
  );
}
