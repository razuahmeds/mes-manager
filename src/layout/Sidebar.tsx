import {
  DesktopOutlined,
  PieChartOutlined,
  SettingFilled,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import React from "react";
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
  getItem(<Link to="/">Dashboard</Link>, "1", <PieChartOutlined />),

  getItem("Members", "sub2", <TeamOutlined />, [
    getItem(<Link to="/memeber-create">Create</Link>, "6"),
    getItem(<Link to="/lists">Lists</Link>, "8"),
  ]),
  getItem("Mila", "sub3", <DesktopOutlined />, [
    getItem(<Link to="/">Bajara</Link>, "6"),
    getItem(<Link to="/">Bajara Lists</Link>, "8"),
    getItem(<Link to="/">Mila</Link>, "9"),
    getItem(<Link to="/">Mila Hisaba</Link>, "9"),
    getItem(<Link to="/">Mila Rate</Link>, "10"),
  ]),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("View-User", "3"),
    getItem("View", "4"),
  ]),
  getItem("Configuration", "9", <SettingFilled />, [
    getItem("Users", "6"),
  ]),
];

const Sidebar = (props: Props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider width={200} style={{ background: colorBgContainer }}>
      <Menu
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
