import {  Table, } from "antd";
import { mealColumns, mealList } from "../utils/MealUtils";




function MealList() {
  return (
      <div style={{ padding: 64 }}>
      <Table columns={mealColumns} dataSource={mealList} />
    </div>
  );
};

export default MealList