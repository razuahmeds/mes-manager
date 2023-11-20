import { Button } from "antd";
import { ColumnsType } from "antd/es/table";

export interface IMealList {
  id: number;
  name: string;
  meai_calculation: number;
  date: string;
}

export const mealColumns: ColumnsType<IMealList> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Meai_calculation",
    dataIndex: "meai_calculation",
  },
  {
    title: "Date",
    dataIndex: "date",
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
