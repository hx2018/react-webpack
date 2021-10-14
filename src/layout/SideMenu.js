import React from "react";
import { Menu } from "antd";
// import "antd/dist/antd.css";
import "./SideMenu.less";

const { Item, SubMenu } = Menu;

export default function SideMenu() {
  return (
    <Menu
      className="SideMenu"
      defaultSelectedKeys={["resumeManage"]}
      mode="inline"
      subMenuOpenDelay="3000"
    >
      <Item key="resumeManage">简历管理后台</Item>
      <SubMenu key="userManage" title="用户管理">
        <Item key="userList">用户列表</Item>
        <Item key="userAdd">添加用户</Item>
      </SubMenu>

      <SubMenu key="blogManage" title="博客管理">
        <Item key="blogList">博客列表</Item>
        <Item key="blogAdd">添加博客</Item>
      </SubMenu>
    </Menu>
  );
}
