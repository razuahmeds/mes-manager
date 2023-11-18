import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
} from "antd";
const { Option } = Select;

type Props = {};

const CreateBazar = (props: Props) => {
  const onFinish = (values: any) => {
    console.log("Received values of form:", values);
  };

  const suffixSelector = (
    <Form.Item name="suffix" initialValue={"TK"} noStyle>
      <Select style={{ width: 70 }}>
        <Option value="TK">Taka</Option>
        <Option value="UNIT">Unit</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div style={{ padding: 54 }}>
      <Breadcrumb
        separator=">"
        items={[
          {
            title: "Dashboard",
            href: "",
          },
          {
            title: "Bazar",
            href: "",
          },
          {
            title: "Create",
            href: "",
          },
        ]}
      />
      <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        autoComplete="off"
        layout="vertical"
      >
        <Form.List
          initialValue={[
            [
              {
                bazar_name: "",
                bazar_amount: 1,
              },
            ],
          ]}
          name="users"
        >
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{
                    display: "flex",
                    marginBottom: 8,
                    alignItems: "center",
                  }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name="bazar_name"
                    label="Bazar Name"
                    rules={[{ required: true, message: "Missing Bazar Name" }]}
                  >
                    <Input placeholder="Bazar Name" />
                  </Form.Item>

                  <Form.Item
                    name="quantity"
                    label="Quantity"
                    rules={[
                      {
                        required: true,
                        message: "Please input quantity!",
                      },
                    ]}
                  >
                    <InputNumber
                      placeholder="Enter quantity"
                      addonAfter={suffixSelector}
                      style={{ width: "100%" }}
                    />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name="bazar_amount"
                    label="Amount"
                    rules={[{ required: true, message: "Missing Amount" }]}
                  >
                    <InputNumber placeholder="Amount" />
                  </Form.Item>
                  {key !== 0 ? (
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  ) : (
                    <PlusOutlined onClick={() => add()} />
                  )}
                </Space>
              ))}
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateBazar;
