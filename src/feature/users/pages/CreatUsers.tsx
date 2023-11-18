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

function CreatUsers() {
  const onFinish = (values: any) => {
    message.success("Form submited successful!");
    console.log({ values });
  };

  return (
    <div>
      <Breadcrumb
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
            <Form.Item name="mobile" label="Phone Number">
              <Input placeholder="Ener your mobile" />
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
