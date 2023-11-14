import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
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
    getItem("Lists", "8"),
  ]),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
    getItem("jghjh", "55"),
  ]),
  getItem("Files", "9", <FileOutlined />),
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
