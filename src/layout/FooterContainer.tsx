import { Layout } from "antd";

const { Footer } = Layout;

function FooterContainer() {
  return (
    <Footer
      style={{
        textAlign: "center",
        backgroundColor: "#002140",
        color: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        textAlignLast: "center",
        padding: 10,
        marginTop: 24,
      }}
    >
      Ant Design ©2023 Created by Ant UED
    </Footer>
  );
}

export default FooterContainer;
