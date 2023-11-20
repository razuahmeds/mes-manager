import { Breadcrumb, Table } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { IBazarList, bazarColumns } from "../utils/bazarUtils";

function BazarList() {
  const [bazar, setBazar] = useState<IBazarList[]>([]);
  const url_path = "http://localhost:5000/bazar-list";
  useEffect(() => {
    axios.get(url_path).then((response) => {
      const data = response.data;
      setBazar(data);
    });
  }, []);
  // console.log({ bazar });

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
            title: "Bazar",
            href: "",
          },
          {
            title: "List",
            href: "",
          },
        ]}
      />
      <Table columns={bazarColumns} rowKey="id" dataSource={bazar} />
    </div>
  );
}

export default BazarList;
