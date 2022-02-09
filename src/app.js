import React from "react";
import {
  Route,
  BrowserRouter,
  Link,
  Switch,
  HashRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Home from "./pages/home";
import User from "./pages/user";
import Blog from "./pages/blog";
// import Resume from "./pages/resume";
import NavigationBar from "@/layout/NavigationBar";
import SideMenu from "@/layout/SideMenu";
import blogAdd from "./pages/blog/views/Add";
import blogList from "./pages/blog/views/List";
import userAdd from "./pages/user/views/Add";
import userList from "./pages/user/views/List";
import AsyncRouter, { RouterHooks } from "./components/AsyncRouter";

import "./app.less";

const Resume = AsyncRouter(() => import("./pages/resume"));

export default function App() {
  useEffect(() => {
    /* 增加监听函数 */
    RouterHooks.beforeRouterComponentLoad((history) => {
      console.log("当前激活的路由是", history.location.pathname);
    });
  }, []);

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

          <Route exact path="/resume" component={Resume} />

          <Route
            exact
            path="/other"
            render={() => (
              <div>
                <p>OTHERPAGE</p>
              </div>
            )}
          />
          <Redirect from="/*" to="/index" />
        </div>
      </HashRouter>
    </Provider>
  );
}
