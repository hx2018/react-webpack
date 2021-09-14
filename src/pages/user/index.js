import React from "react";
import "./index.less";

export default function User(props) {
  return (
    <div className="User">
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
      <p className="User__content">UserPage</p>
    </div>
  );
}
