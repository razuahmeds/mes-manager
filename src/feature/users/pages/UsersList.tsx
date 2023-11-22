import React from "react";
import { IUsersList, usersColumns } from "../utils/UsersUtils";
import { Breadcrumb, Table } from "antd";

import { useEffect, useState } from "react";
import axios from "axios";

function UsersList() {
  const [users, setUsers] = useState<IUsersList[]>([]);
  const url_path = "http://localhost:5000/users-list";
  useEffect(() => {
    axios.get(url_path).then((response) => {
      const data = response.data;
      setUsers(data);
    });
  }, []);
  console.log({ users });

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
            title: "Users",
            href: "",
          },
          {
            title: "List",
            href: "",
          },
        ]}
      />
      <Table columns={usersColumns} dataSource={users} />
    </div>
  );
}

export default UsersList;
