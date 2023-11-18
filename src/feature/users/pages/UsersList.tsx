import React from "react";
import { usersColumns, usersList } from "../utils/UsersUtils";
import { Breadcrumb, Table } from "antd";

function UsersList() {
  return (
    <div style={{ padding: 64 }}>
      <Breadcrumb
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
      <Table columns={usersColumns} dataSource={usersList} />
    </div>
  );
}

export default UsersList;
