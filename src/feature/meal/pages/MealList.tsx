import { Breadcrumb, Table } from "antd";
import { mealColumns, mealList } from "../utils/MealUtils";

function MealList() {
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
            title: "Meal",
            href: "",
          },
          {
            title: "Liat",
            href: "",
          },
        ]}
      />
      <Table columns={mealColumns} dataSource={mealList} />
    </div>
  );
}

export default MealList;
