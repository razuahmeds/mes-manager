import { BellFilled, HomeFilled, WechatFilled } from "@ant-design/icons";
import {  } from "antd";
import Search from "antd/es/input/Search";
import { Header } from "antd/es/layout/layout";
import { NavDropdown } from "react-bootstrap";

type Props = {};

const HeaderContainer = (props: Props) => {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="demo-logo" />
      <Search placeholder="input search text" style={{ width: 200 }} />

      <div style={{ display: "flex", alignItems: "center", color: 'white' }}>
        <WechatFilled style={{ backgroundColor: '##1677ff', margin: '0 12px', fontSize: '29px', borderRadius: '50%' }} />
        <HomeFilled style={{ color: 'white', fontSize: '29px', backgroundColor: '##1677ff' }} />
        <BellFilled  style={{ backgroundColor: '##1677ff', margin: '0 12px', fontSize: '29px', borderRadius: '50%' }}/>
        <NavDropdown title="Logo" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Mess</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Content</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Sign Out</NavDropdown.Item>
        </NavDropdown>
      </div>
    </Header>
  );
};

export default HeaderContainer;
