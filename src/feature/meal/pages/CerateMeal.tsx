import { Button, Col, DatePicker, Form, InputNumber, Row } from "antd";

const CerateMeal = () => {
  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div style={{ padding: 64, alignItems: "center" }}>
      <Form onFinish={onFinish} layout="vertical">
        <Row gutter={12}>
          <Col span={4}>
            <Form.Item name="created_at" label="Date">
              <DatePicker />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="break_fast" label="Break Fast">
              <InputNumber
                className="w-100"
                min={0.5}
                max={3}
                defaultValue={0.5}
              />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="lunch" label="Lunch">
              <InputNumber className="w-100" min={0} max={5} defaultValue={1} />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="dinner" label="Dinner">
              <InputNumber className="w-100" min={0} max={5} defaultValue={1} />
            </Form.Item>
          </Col>
          <Col span={6} offset={12}>
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

export default CerateMeal;
