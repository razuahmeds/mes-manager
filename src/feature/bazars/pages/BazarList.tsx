import { Table } from "antd";
import { bazarColumns, bazarList } from "../utils/bazarUtils";

function BazarList() {
  return (
    <div>
      <Table columns={bazarColumns} dataSource={bazarList} />
    </div>
  );
}

export default BazarList;
