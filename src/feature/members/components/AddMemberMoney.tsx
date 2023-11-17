import { Button, DatePicker, Drawer, Form, Input, Space } from "antd";
import { useState } from "react";

function AddMemberMoney() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
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
        <Form>
          <Form.Item name="last_name" label="">
            <Input placeholder="Enter your last name" />
          </Form.Item>
          <Space.Compact style={{ width: "100%", marginBottom: "20px" }}>
            <Input placeholder="Amoney" />
          </Space.Compact>
          <Form.Item name="created_at" label="" style={{ width: "100%" }}>
            <DatePicker />
          </Form.Item>
          <Button>Submit</Button>
        </Form>
      </Drawer>
    </div>
  );
}

export default AddMemberMoney;
