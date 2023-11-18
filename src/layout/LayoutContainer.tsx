import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import FooterContainer from "./FooterContainer";
import HeaderContainer from "./HeaderContainer";
import Sidebar from "./Sidebar";

const { Content } = Layout;

const LayoutContainer: React.FC = () => {
  return (
    <Layout>
      <Sidebar />

      <Layout style={{ marginLeft: 200 }}>
        <HeaderContainer />

        <Content style={{ minHeight: "80vh", padding: 30 }}>
          <Outlet />
        </Content>

        <FooterContainer />
      </Layout>
    </Layout>
  );
};

export default LayoutContainer;
