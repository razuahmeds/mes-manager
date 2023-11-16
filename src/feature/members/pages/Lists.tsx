import type { TableProps } from "antd";
import { Space, Table, Typography } from "antd";

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
  {
    id: 4,
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
    title: "Group",
    render: (_, record) => `Group ${Math.floor(record.id / 4)}`,
    onCell: (record) => ({
      rowSpan: record.id % 4 === 0 ? 4 : 0,
    }),
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
      colSpan: record.id % 4 === 0 ? 0 : 1,
    }),
  },

  {
    title: "Action",
    fixed: "right",
    render: () => (
      <Space>
        <Typography.Link>Action1</Typography.Link>
        <Typography.Link>Action2</Typography.Link>
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
