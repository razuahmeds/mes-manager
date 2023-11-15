import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./feature/authentications/pages/Login";
import Registration from "./feature/authentications/pages/Registration";
import LayoutContainer from "./layout/LayoutContainer";
import Dashboard from "./feature/dashboard/Dashboard";
import CreateMember from "./feature/members/pages/CreateMember";
import Lists from "./feature/members/pages/Lists";

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

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
