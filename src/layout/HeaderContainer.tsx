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

      <div style={{ display: "flex", alignItems: "center", color: "wheat" }}>
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
