import { Outlet } from "react-router-dom";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  return (
    <Row type="horizontal">
      <Heading as="h1">Dashboard</Heading>
      <p>TEST</p>
      <Outlet />
    </Row>
  );
}

export default Dashboard;
