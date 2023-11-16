import { Button } from "antd";
import { ColumnsType } from "antd/es/table";

interface IBazarList {
  key: string;
  name: string;
  age: number;
  address: string;
}

export const bazarColumns: ColumnsType<IBazarList> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "30%",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: "20%",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Action",
    render: (_) => (
      <>
        <Button type="dashed" style={{ marginRight: 15 }} size="small">
          Edit
        </Button>
        <Button danger size="small">
          Delete
        </Button>
      </>
    ),
  },
];

export const bazarList: IBazarList[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Jim Green",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];
