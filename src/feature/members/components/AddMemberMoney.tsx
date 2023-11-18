import { Button, DatePicker, Drawer, Form, Input } from "antd";
import { useState } from "react";

function AddMemberMoney() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const onFinish = (values: any) => {
    console.log({ values });
  };
  return (
    <div>
      <Button onClick={showDrawer} size="small">
        Add money
      </Button>
      <Drawer
        title="Add member money"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item name="name" label="">
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item
            name="amoney"
            label=""
            style={{ width: "100%", marginBottom: "20px" }}
          >
            <Input placeholder="Amoney" />
          </Form.Item>
          <Form.Item name="created_at" label="">
            <DatePicker className="w-100" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}

export default AddMemberMoney;
