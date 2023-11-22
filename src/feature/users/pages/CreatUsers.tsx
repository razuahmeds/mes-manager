import {
  Breadcrumb,
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  message,
} from "antd";
import axios from "axios";

const url = "http://localhost:5000/user";

function CreatUsers() {
  const onFinish = (values: any) => {
    axios.post(url, values).then((response) => {
      const resData = response.data;
      message.success(resData);
    });
  };

  return (
    <div>
      <Breadcrumb
        style={{ marginBottom: 20 }}
        separator=">"
        items={[
          {
            title: "Dashboard",
            href: "",
          },
          {
            title: "Users",
            href: "",
          },
          {
            title: "Create",
            href: "",
          },
        ]}
      />
      <Form onFinish={onFinish} layout="vertical">
        <Row gutter={12}>
          <Col span={12}>
            <Form.Item name="name" label="Name">
              <Input placeholder="Enter your name" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="phone_Number" label="Phone Number">
              <Input placeholder="Ener your mobile" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="email" label="E-mail">
              <Input placeholder="E-mail" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="city" label="City">
              <Input placeholder="City" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="address" label="Address">
              <Input placeholder="Address" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="created_at" label="DatePicker">
              <DatePicker className="w-100" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
          <Col span={12}></Col>
        </Row>
      </Form>
    </div>
  );
}

export default CreatUsers;
