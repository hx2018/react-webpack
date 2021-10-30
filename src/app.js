import React from "react";
import {
  Route,
  BrowserRouter,
  Link,
  Switch,
  HashRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/home";
import User from "./pages/user";
import Blog from "./pages/blog";
import Resume from "./pages/resume";
import NavigationBar from "@/layout/NavigationBar";
import SideMenu from "@/layout/SideMenu";
import blogAdd from "./pages/blog/views/Add";
import blogList from "./pages/blog/views/List";
import userAdd from "./pages/user/views/Add";
import userList from "./pages/user/views/List";
import store from "@/redux/store";

import "./app.less";

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter className="App">
        <NavigationBar />
        <div className="App__content">
          <SideMenu />
          <Route exact path="/" component={Home} />

          <Route exact path="/user" component={User} />
          <Route path="/user/add" component={userAdd} />
          <Route path="/user/list" component={userList} />

          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/add" component={blogAdd} />
          <Route path="/blog/list" component={blogList} />

          <Route
            exact
            path="/resume"
            render={() => (
              <div>
                <p>RESUMEPAGE</p>
              </div>
            )}
          />
        </div>
      </HashRouter>
    </Provider>
  );
}
