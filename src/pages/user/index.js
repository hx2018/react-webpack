import React from "react";
import "./index.less";
// import "/static/css/reset.min.css";

export default function user(props) {
  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/user">User</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul>
      <p>UserPage</p>
    </div>
  );
}
