import { Layout, theme } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import HeaderContainer from "./HeaderContainer";
import Sidebar from "./Sidebar";

const { Content } = Layout;

const LayoutContainer: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      {/* header section */}
      <HeaderContainer />

      <Layout>
        {/* sidebar section */}
        <Sidebar />

        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutContainer;
