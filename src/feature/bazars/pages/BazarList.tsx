import { Breadcrumb, Table } from "antd";
import { bazarColumns, bazarList } from "../utils/bazarUtils";

function BazarList() {
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
            title: "Bazar",
            href: "",
          },
          {
            title: "List",
            href: "",
          },
        ]}
      />
      <Table columns={bazarColumns} dataSource={bazarList} />
    </div>
  );
}

export default BazarList;
