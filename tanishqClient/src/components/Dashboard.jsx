import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import logo from "../assets/images/logo.svg";
import DashboardInfo from "./DashboardInfo";
import LineChart from "./charts/LineChart";
import { MdDashboard, MdCategory } from "react-icons/md";
import { FaBoxArchive } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { IoMdSettings } from "react-icons/io";
import { GiMetalBar } from "react-icons/gi";






import BarChart from "./charts/BarChart";
import UserDashInfo from "./UserDashInfo";
import ProductDashInfo from "./ProductDashInfo";
import CategoryDashInfo from "./CategoryDashInfo";
import MetalDashInfo from "./MetalDashInfo";

// import DashboardNavTabs from './design elements/DashboardNavTabs';

const Dashboard = () => {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="g-0">
          <Col sm={2}>
            <div className="container-fluid">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link className="text-dark" eventKey="first">
                   <MdDashboard/> Dashboard
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-dark" eventKey="second">
                  <ImUsers/>  User
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-dark" eventKey="third">
                   <FaBoxArchive/> Products
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-dark" eventKey="four">
                   <MdCategory/>  Categories
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-dark" eventKey="five">
                   <GiMetalBar/>  Metal
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                
                <LineChart />
                <DashboardInfo />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <UserDashInfo/>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <ProductDashInfo/>
              </Tab.Pane>
              <Tab.Pane eventKey="four">
                <CategoryDashInfo/>
              </Tab.Pane>
              <Tab.Pane eventKey="five">
                <MetalDashInfo/>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default Dashboard;
