import {
  Button,
  Col,
  DatePicker,
  Form,
  InputNumber,
  Row,
} from "antd";


const CerateMeal=() => {
   const onFinish = (values: any) => {
    console.log({ values });
  };
  return (
    <div>
      <Form onFinish={onFinish} layout="vertical">
        <Row gutter={12}>
         
          <Col span={4}>
            <Form.Item name="created_at" label="Date">
              <DatePicker />
            </Form.Item>
          </Col>
          <Col span={4}>
             <InputNumber min={0/1} max={3} defaultValue={0/1} />;
            
          </Col>
          <Col span={4}>
            <InputNumber min={0} max={5} defaultValue={0} />;
          </Col>
          <Col span={4}>
            <InputNumber min={0} max={5} defaultValue={0} />;
          </Col>
          <Col span={4}>
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
}

export default CerateMeal