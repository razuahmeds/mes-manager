import {
  BankFilled,
  DashboardFilled,
  PieChartFilled,
  SettingFilled,
  TeamOutlined,
  UserAddOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const { Sider } = Layout;

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    label,
    key,
    icon,
    children,
  } as MenuItem;
}

type Props = {};

const items2: MenuItem[] = [
  getItem(
    <Link className="dec-none" to="/">
      Dashboard
    </Link>,
    "Dashboard",
    <DashboardFilled />
  ),

  getItem("Members", "sub2", <TeamOutlined />, [
    getItem(
      <Link className="dec-none" to="/memeber-create">
        Create Member
      </Link>,
      "memeber-create"
    ),
    getItem(
      <Link className="dec-none" to="/lists">
        Members List
      </Link>,
      "lists"
    ),
  ]),

  getItem("Bazar", "Bazar", <BankFilled />, [
    getItem(
      <Link className="dec-none" to="/bazar-add">
        Create Bazar
      </Link>,
      "bazar-add"
    ),
    getItem(
      <Link className="dec-none" to="/bazar-list">
        Bazar List
      </Link>,
      "bazar-list"
    ),
  ]),

  getItem("Meal", "sub3", <PieChartFilled />, [
    getItem(
      <Link className="dec-none" to="/create-meal">
        Create Meal
      </Link>,
      "cerate-meal"
    ),
    getItem(
      <Link className="dec-none" to="/meal-list">
        Meal List
      </Link>,
      "meal-list"
    ),
  ]),

  getItem("Configuration", "11", <SettingFilled />, [
    getItem("Users", "u  sers", <UserOutlined />, [
      getItem(
        <Link className="dec-none" to="/create-users">
          Create Users
        </Link>,
        "create-users",
        <UserAddOutlined />
      ),
      getItem(
        <Link className="dec-none" to="/users-list">
          Users List
        </Link>,
        "users-list",
        <UserSwitchOutlined />
      ),
    ]),
  ]),
];

const Sidebar = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        paddingTop: 10,
      }}
      width={200}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Typography.Title level={3} className="text-center uppercase " code>
        wh 7.0
      </Typography.Title>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={items2}
      />
    </Sider>
  );
};

export default Sidebar;
