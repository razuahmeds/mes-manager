import { Button } from "antd";
import { ColumnsType } from "antd/es/table";

export interface IUsersList {
  id: number;
  name: string;
  city: string;
  email: string;
  phone_Number: string;
}

export const usersColumns: ColumnsType<IUsersList> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Phone_Number",
    dataIndex: "phone_Number",
  },
  {
    title: "E-mail",
    dataIndex: "email",
  },
  {
    title: "City",
    dataIndex: "city",
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
