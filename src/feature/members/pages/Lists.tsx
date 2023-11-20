import type { TableProps } from "antd";
import { Breadcrumb, Button, Space, Table } from "antd";
import AddMemberMoney from "../components/AddMemberMoney";
import { useEffect, useState } from "react";
import axios from "axios";

interface IMembers {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  city: string;
  mobile: string;
}

const fixedColumns: TableProps<IMembers>["columns"] = [
  {
    title: "SL.",
    dataIndex: "id",
    fixed: "left",
  },
  {
    title: "FistName",
    dataIndex: "first_name",
    fixed: "left",
  },
  {
    title: "LastName",
    dataIndex: "last_name",
    fixed: "left",
  },

  {
    title: "Eamil",
    dataIndex: "email",
  },
  {
    title: "Address",
    dataIndex: "city",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },

  {
    title: "Action",
    fixed: "right",
    render: () => (
      <Space>
        <AddMemberMoney />
        <Button size="small" style={{ marginRight: 15 }}>
          View
        </Button>
        <Button size="small" style={{ marginRight: 15 }}>
          Edit
        </Button>
        <Button size="small" danger>
          Delete
        </Button>
      </Space>
    ),
  },
];

const url_path = "http://localhost:5000/members";

function Lists() {
  const [members, setMembers] = useState<IMembers[]>([]);

  useEffect(() => {
    axios.get(url_path).then((response) => {
      const data = response.data;
      setMembers(data);
    });
  }, []);

  return (
    <div>
      <Breadcrumb
        style={{ marginBottom: 20 }}
        separator=">"
        items={[
          {
            title: "Dashboard",
            href: "",
          },
          {
            title: "Members",
            href: "",
          },
          {
            title: "List",
            href: "",
          },
        ]}
      />
      <Table bordered columns={fixedColumns} rowKey="id" dataSource={members} />
    </div>
  );
}

export default Lists;
