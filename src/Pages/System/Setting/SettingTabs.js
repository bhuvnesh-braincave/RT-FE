import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import System from "./Tabs/System";
import General from "./Tabs/General";
import Role from "./Tabs/Role";
import Payroll from "./Tabs/Payroll";
import EmailNotification from "./Tabs/EmailNotification";
import FileManager from "./Tabs/FileManager";
import Performance from "./Tabs/Performance";
import { useCallback, useEffect, useState } from "react";
import { getSetting } from "../../../Utility/API/system";

export default function SettingTabs() {
    const [data,setData] = useState({})
    const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError] = useState(false)

    const getSettingData = useCallback(async ()=>{
        try {
            setIsLoading(true)
            let res = await getSetting();
            if(res.status===200){
                setData(res.data.system)
                setIsLoading(false)
            }else{
                setIsLoading(false)
                setIsError(true)
            }
        } catch (error) {
            console.log(error)
        }
    },[])
    useEffect(()=>{
        getSettingData()
    },[])
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="system">
      <Row>
        <Col xl={3}>
          <Card>
            <Card.Body>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="system">System</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="gen">General</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="role">Role</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="payr">Payroll</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="noti">Email Notifications</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="man">Files Manager</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="perf">Performance</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={9}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey={"system"}><System getSettingData={getSettingData} data={data?.system}/></Tab.Pane>
                    <Tab.Pane eventKey={"gen"}><General getSettingData={getSettingData} data={data?.company}/></Tab.Pane>
                    <Tab.Pane eventKey={"role"}><Role getSettingData={getSettingData} data={data?.role}/></Tab.Pane>
                    <Tab.Pane eventKey={"payr"}><Payroll getSettingData={getSettingData} data={data?.payroll}/></Tab.Pane>
                    <Tab.Pane eventKey={"noti"}><EmailNotification getSettingData={getSettingData} data={data?.emailNotification}/></Tab.Pane>
                    <Tab.Pane eventKey={"man"}><FileManager getSettingData={getSettingData} data={data?.fileManager}/></Tab.Pane>
                    <Tab.Pane eventKey={"perf"}><Performance getSettingData={getSettingData} data={data?.performance}/></Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Tab.Container>
  );
}
