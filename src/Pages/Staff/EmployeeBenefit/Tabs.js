import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import Accommodation from "./TabsContent.js/Accommodation/Accommodation";
import AccommodateEmployee from "./TabsContent.js/AccommodateEmployee/AccommodateEmployee";
import UtilitiesAndAccessories from "./TabsContent.js/UtilitiesAndAccessories.js/UtilitiesAndAccessories";
import Driver from "./TabsContent.js/Driver/Driver";
import HouseKeeping from "./TabsContent.js/HouseKeeping/HouseKeeping";
import HotelAccommodation from "./TabsContent.js/HotelAccommodation/HotelAccommodation";
import OtherBenifit from "./TabsContent.js/OtherBenefit/OtherBenifit";

export default function Tabs() {
    return(
        <Card>
          <Card.Body>
        <Tab.Container id="left-tabs-example" defaultActiveKey="accommo">
      <Row>
        <Col xl={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="accommo">Accommodation</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="accEmp">Accommodate Employee</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="utiandacc">Utilities & Accessories</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="driver">Driver</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="houseKeep">Housekeeping</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="hotelAcc">Hotel Accommodation</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="otherBene">Other Benefits</Nav.Link>
              </Nav.Item>
            </Nav>
        
        </Col>
        <Col xl={9}>
        
            <Tab.Content>
                <Tab.Pane eventKey={"accommo"}><Accommodation/></Tab.Pane>
                <Tab.Pane eventKey={"accEmp"}><AccommodateEmployee/></Tab.Pane>
                <Tab.Pane eventKey={"utiandacc"}><UtilitiesAndAccessories/></Tab.Pane>
                <Tab.Pane eventKey={"driver"}><Driver/></Tab.Pane>
                <Tab.Pane eventKey={"houseKeep"}><HouseKeeping/></Tab.Pane>
                <Tab.Pane eventKey={"hotelAcc"}><HotelAccommodation/></Tab.Pane>
                <Tab.Pane eventKey={"otherBene"}><OtherBenifit/></Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
        </Card.Body>
        </Card>
    )
};
