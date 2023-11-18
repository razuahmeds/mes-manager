import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./feature/authentications/pages/Login";
import Registration from "./feature/authentications/pages/Registration";
import BazarList from "./feature/bazars/pages/BazarList";
import CreateBazar from "./feature/bazars/pages/CreateBazar";
import Dashboard from "./feature/dashboard/pages/Dashboard";
import CreateMember from "./feature/members/pages/CreateMember";
import Lists from "./feature/members/pages/Lists";
import LayoutContainer from "./layout/LayoutContainer";
import CerateMeal from "./feature/meal/pages/CerateMeal";
import MealList from "./feature/meal/pages/MealList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        <Route element={<LayoutContainer />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/memeber-create" element={<CreateMember />} />
          <Route path="/lists" element={<Lists />} />

          <Route path="/bazar-add" element={<CreateBazar />} />
          <Route path="/bazar-list" element={<BazarList />} />
          <Route path="/create-meal" element={<CerateMeal />} />
          <Route path="/meal-list" element={<MealList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
