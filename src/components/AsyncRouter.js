import React from "react";

/* 存放路由钩子 */
const routerObserveQueue = [];

/* 懒加载路由钩子 */
export const RouterHooks = {
  /* 路由组件加载之前 */
  beforeRouterComponentLoad: function (callback) {
    routerObserveQueue.push({
      type: "before",
      callback,
    });
  },
  /* 路由组件加载之后 */
  afterRouterComponentDidLoaded(callback) {
    routerObserveQueue.push({
      type: "after",
      callback,
    });
  },
};

/* 路由懒加载HOC */
// asyncRouter实际就是一个高级组件,将()=>import()作为加载函数传进来，然后当外部Route加载当前组件的时候，在componentDidMount生命周期函数，加载真实的组件，并渲染组件，我们还可以写针对路由懒加载状态定制属于自己的路由监听器beforeRouterComponentLoad和afterRouterComponentDidLoaded，类似vue中 watch $route 功能。接下来我们看看如何使用。
// 这样一来，我们既做到了路由的懒加载，又弥补了react-router没有监听当前路由变化的监听函数的缺陷。
export default function AsyncRouter(loadRouter) {
  return class Content extends React.Component {
    constructor(props) {
      super(props);
      /* 触发每个路由加载之前钩子函数 */
      this.dispatchRouterQueue("before");
    }
    state = { Component: null };
    dispatchRouterQueue(type) {
      const { history } = this.props;
      routerObserveQueue.forEach((item) => {
        if (item.type === type) item.callback(history);
      });
    }
    componentDidMount() {
      if (this.state.Component) return;
      loadRouter()
        .then(
          (module) => {
            console.log("-----componetdidmount", module);
            return module.default;
          },
          (err) => {
            console.log("----componentdidmount-err", err);
          }
        )
        .then((Component) =>
          this.setState({ Component }, () => {
            /* 触发每个路由加载之后钩子函数 */
            this.dispatchRouterQueue("after");
          })
        );
    }
    render() {
      const { Component } = this.state;
      console.log(
        "-----render-",
        typeof Component,
        Object.prototype.toString.call(Component)
      );
      return Component ? <Component {...this.props} /> : null;
    }
  };
}
