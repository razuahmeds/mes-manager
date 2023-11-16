import { Col, Row } from "antd";
import BazarChart from "../components/BazarChart";
import PieCharContainer from "../components/Charts";
import ExtraCost from "../components/ExtraCost";
import MealChart from "../components/MealChart";

export default function Dashboard() {
  return (
    <div style={{ width: "100%" }}>
      <Row>
        <Col
          flex={4}
          style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
        >
          <MealChart />
          <ExtraCost />
        </Col>
        <Col
          flex={2}
          style={{ borderBottom: "1.95px solid rgba(0, 0, 0, 0.15)" }}
        >
          <PieCharContainer />
          <BazarChart />
        </Col>
      </Row>
    </div>
  );
}
