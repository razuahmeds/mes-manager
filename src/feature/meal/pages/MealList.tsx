import { Breadcrumb, Table } from "antd";
import { IMealList, mealColumns } from "../utils/MealUtils";

import { useEffect, useState } from "react";
import axios from "axios";

function MealList() {
  const [meal, setMeal] = useState<IMealList[]>([]);
  const url_path = "http://localhost:5000/meal-list";
  useEffect(() => {
    axios.get(url_path).then((response) => {
      const data = response.data;
      setMeal(data);
    });
  }, []);
  console.log({ meal });
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
            title: "Meal",
            href: "",
          },
          {
            title: "Liat",
            href: "",
          },
        ]}
      />
      <Table columns={mealColumns} dataSource={meal} />
    </div>
  );
}

export default MealList;
