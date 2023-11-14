import {
  CommentOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined, UserOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import Search from 'antd/es/input/Search';
import React from 'react';
import { NavDropdown } from 'react-bootstrap';


type MenuItem = Required<MenuProps>['items'][number];

const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3' ].map((key) => ({
  key,
  label: `nav ${key}`,
}));

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items2: MenuItem[] = [
  getItem('Dashboard', '1', <PieChartOutlined />),
  getItem('Members', 'sub2', <TeamOutlined />, [getItem('Create', '6'), getItem('Lists', '8')]),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
    getItem('jghjh', '55'),
  ]),
  getItem('Files', '9', <FileOutlined />),
];


const LayoutContent: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div className="demo-logo" />
    <Search placeholder="input search text" style={{ width: 200 }} />

           <div style={{ display: 'flex', alignItems: 'center', color: 'wheat' }}>
             <NavDropdown title="Logo" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mess</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Content
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sign Out</NavDropdown.Item>
            </NavDropdown>
           </div>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>


          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutContent;