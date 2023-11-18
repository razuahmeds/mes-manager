import type { TableProps } from "antd";
import { Button, Space, Table } from "antd";
import AddMemberMoney from "../components/AddMemberMoney";

interface RecordType {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  address1: string;
}

const tabeData: RecordType[] = [
  {
    id: 1,
    address1: "Address",
    age: 22,
    firstName: "Akash",
    lastName: "Ahmed",
  },
  {
    id: 2,
    address1: "Address",
    age: 22,
    firstName: "Akash",
    lastName: "Ahmed",
  },
  {
    id: 3,
    address1: "Address",
    age: 22,
    firstName: "Akash",
    lastName: "Ahmed",
  },
];

const fixedColumns: TableProps<RecordType>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    fixed: "left",
  },
  {
    title: "FistName",
    dataIndex: "firstName",
    fixed: "left",
  },
  {
    title: "LastName",
    dataIndex: "lastName",
    fixed: "left",
  },

  {
    title: "Age",
    dataIndex: "age",
    onCell: (record) => ({
      colSpan: record.id % 4 === 0 ? 2 : 1,
    }),
  },
  {
    title: "Address 1",
    dataIndex: "address1",
    onCell: (record) => ({
      colSpan: record.id % 20 === 0 ? 0 : 1,
    }),
  },

  {
    title: "Action",
    fixed: "right",
    render: () => (
      <Space>
        <AddMemberMoney />
        <Button size="small">Edit</Button>
        <Button size="small" danger>
          Delete
        </Button>
      </Space>
    ),
  },
];

function Lists() {
  return (
    <div style={{ padding: 64 }}>
      <Table
        bordered
        columns={fixedColumns}
        rowKey="id"
        dataSource={tabeData}
      />
    </div>
  );
}

export default Lists;
