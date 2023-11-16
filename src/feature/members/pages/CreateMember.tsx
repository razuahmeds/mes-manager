import {
  Breadcrumb,
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  message,
} from "antd";
const { Option } = Select;

const CreateMember = () => {
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
            title: "Members",
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
            <Form.Item name="first_name" label="First Name">
              <Input placeholder="Enter your first name" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="last_name" label="Last Name">
              <Input placeholder="Enter your last name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="email" label="Email">
              <Input placeholder="Enter your email" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="mobile" label="Phone Number">
              <Input placeholder="Ener your mobile" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select a option and change input text above"
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="created_at" label="DatePicker">
              <DatePicker />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CreateMember;
