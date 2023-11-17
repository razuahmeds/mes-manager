import { Table } from "antd";
import { bazarColumns, bazarList } from "../utils/bazarUtils";

function BazarList() {
  return (
    <div style={{ padding: 64 }}>
      <Table columns={bazarColumns} dataSource={bazarList} />
    </div>
  );
}

export default BazarList;
