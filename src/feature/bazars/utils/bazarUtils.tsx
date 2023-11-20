import { Button } from "antd";

import { ColumnsType } from "antd/es/table";

export interface IBazarList {
  id: number;
  name: string;
  amount: number;
  date: string;
}

export const bazarColumns: ColumnsType<IBazarList> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "30%",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "age",
    width: "20%",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "address",
  },
  {
    title: "Action",
    render: (_) => (
      <>
        <Button size="small" style={{ marginRight: 15 }}>
          View
        </Button>
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
