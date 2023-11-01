import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import MainPage from "../../../Components/Common/MainPage";
import PageLayout from "./Tabs/PageLayout";
import NotificationPosition from "./Tabs/NotificationPosition";
import SystemLogo from "./Tabs/SystemLogo";
import SignInLogo from "./Tabs/SignInLogo";
import RecruitmetLogo from "./Tabs/RecruitmetLogo";
import PayrollLogo from "./Tabs/PayrollLogo";
import OrganizationChart from "./Tabs/OrganizationChart";
import { getThemeSetting } from "../../../Utility/API/system";
import { useCallback, useEffect, useState } from "react";

export default function ThemeSetting() {
  const [data,setData] = useState({})
    const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError] = useState(false)

    const getThemeSettingData = useCallback(async ()=>{
        try {
            setIsLoading(true)
            let res = await getThemeSetting();
            if(res.status===200){
                setData(res.data.themeSetting)
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
      getThemeSettingData()
    },[])

    
    return(
        <MainPage title={"Settings"}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="pageLayout">
      <Row>
        <Col xl={3}>
          <Card>
            <Card.Body>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="pageLayout">Page Layout</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="notiPo">Notification Position</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sysLogo">System Logo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signl">Sign in Page Logo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="recLogo">Recruitment Page Logo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="payroLogo">Payroll Logo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="orgcha">Organization Chart</Nav.Link>
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
                  <Tab.Pane eventKey={"pageLayout"}><PageLayout getThemeSettingData={getThemeSettingData} data={data?.pageLayouts}/></Tab.Pane>
                  <Tab.Pane eventKey={"notiPo"}><NotificationPosition getThemeSettingData={getThemeSettingData} data={data.notificationPosition}/></Tab.Pane>
                  <Tab.Pane eventKey={"sysLogo"}><SystemLogo getThemeSettingData={getThemeSettingData} data={data.systemLogo}/></Tab.Pane>
                  <Tab.Pane eventKey={"signl"}><SignInLogo getThemeSettingData={getThemeSettingData} data={data.signInPageLogo}/></Tab.Pane>
                  <Tab.Pane eventKey={"recLogo"}><RecruitmetLogo getThemeSettingData={getThemeSettingData} data={data.recruitmentPageLogo}/></Tab.Pane>
                  <Tab.Pane eventKey={"payroLogo"}><PayrollLogo getThemeSettingData={getThemeSettingData} data={data.payRollLogo}/></Tab.Pane>
                  <Tab.Pane eventKey={"orgcha"}><OrganizationChart getThemeSettingData={getThemeSettingData} data={data.organizationChart}/></Tab.Pane>
                  </Tab.Content>
                  </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Tab.Container>
        </MainPage>
    )
};
