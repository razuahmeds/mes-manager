import { LogoutOutlined, UploadOutlined } from "@ant-design/icons";
import { Avatar, Button, Flex, Popover, Upload } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";

type Props = {};

const content = (
  <Flex vertical style={{ height: 90 }} justify="space-between">
    <Upload>
      <Button size="small" icon={<UploadOutlined />}>
        Change Logo
      </Button>
    </Upload>

    <Link className="dec-none" to="/setting">
      Setting
    </Link>

    <Button danger size="small" icon={<LogoutOutlined />}>
      Logout
    </Button>
  </Flex>
);

const HeaderContainer = (props: Props) => {
  const url =
    "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png";
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Popover content={content} title="WH 7.0 MES" trigger="click">
        <Avatar
          className="pointer"
          size={55}
          src={<img src={url} alt="avatar" />}
        />
      </Popover>
    </Header>
  );
};

export default HeaderContainer;
