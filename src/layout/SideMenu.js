import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";
import "./SideMenu.less";
import { List } from "rc-field-form";

const { Item, SubMenu } = Menu;

// export default class SideMenu extends React.Component {
//   render() {
//     console.log("----1", this.props.location);

//     return (
//       <Menu
//         className="SideMenu"
//         defaultSelectedKeys={["resume"]}
//         mode="inline"
//         theme="dark"
//         onSelect={() => {
//           console.log("+++");
//         }}
//       >
//         <Item key="resume">
//           <Link to="/resume">简历管理</Link>
//         </Item>
//         <SubMenu key="user" title="用户管理">
//           <Item key="userList">
//             <Link to="/user/list">用户列表</Link>
//           </Item>
//           <Item key="userAdd">
//             <Link to="/user/add">添加用户</Link>
//           </Item>
//         </SubMenu>

//         <SubMenu key="blog" title="博客管理">
//           <Item key="blogList">
//             <Link to="/blog/list">博客列表</Link>
//           </Item>
//           <Item key="blogAdd">
//             <Link to="/blog/add">添加博客</Link>
//           </Item>
//         </SubMenu>
//       </Menu>
//     );
//   }
// }

function SideMenu(props) {
  const {
    location: { pathname },
  } = props;
  console.log("----1", props, pathname);
  return (
    <Menu
      className="SideMenu"
      defaultSelectedKeys={["resume"]}
      mode="inline"
      theme="dark"
      onSelect={() => {
        console.log("+++");
      }}
    >
      <Item key="resume">
        <Link to="/resume">简历管理</Link>
      </Item>
      <SubMenu key="user" title="用户管理">
        <Item key="userList">
          <Link to="/user/list">用户列表</Link>
        </Item>
        <Item key="userAdd">
          <Link to="/user/add">添加用户</Link>
        </Item>
      </SubMenu>

      <SubMenu key="blog" title="博客管理">
        <Item key="blogList">
          <Link to="/blog/list">博客列表</Link>
        </Item>
        <Item key="blogAdd">
          <Link to="/blog/add">添加博客</Link>
        </Item>
      </SubMenu>
    </Menu>
  );
}

export default withRouter(SideMenu);
