import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import Contract from "./TabContents/Contract/Contract";
import Qualification from "./TabContents/Qualification/Qualication";
import Document from "./TabContents/Document/Document";
import Award from "./TabContents/Award/Award";
import Riligion from "./TabContents/Riligion/Riligion";
import Leave from "./TabContents/Leave/Leave";
import Warning from "./TabContents/Warning/Warning";
import Termination from "./TabContents/Termination/Termination";
import Expense from "./TabContents/Expense/Expense";
import Incom from "./TabContents/Incom/Incom";
import EmployeeExit from "./TabContents/EmployeeExit/EmployeeExit";
import Travel from "./TabContents/Travel/Travel";
import Currency from "./TabContents/Currency/Currency";
import Company from "./TabContents/Company/Company";
import Security from "./TabContents/Security/Security";
import Claim from "./TabContents/Claim/Claim";
import { useCallback, useEffect, useState } from "react";
import { getConstant } from "../../../Utility/API/constant";

export default function TabOfCon() {
  const [data,setData] = useState(null)
  const [isLoading,setIsLoading] = useState(false)
  const [isError,setIsError] = useState(false)

  const getAllConstant = useCallback(async ()=>{
    setIsLoading(true)
    let res = await getConstant()
    if(res.status===200 && res.data.success){
      setData(res.data.constants)
      setIsLoading(false)
    }else{
      setIsError(true)
      setIsLoading(false)
      setTimeout(()=>setIsError(false),2000)
    }
  },[])

  useEffect(()=>{
    getAllConstant()
  },[])
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="contract">
      <Row>
        
        <Col xl={3}>
            <Card>
          <Card.Body>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="contract">Contract Type</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="qualification">Qualification</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="document">Document Type</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="award">Award</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="riligion">Riligion</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="leave">Leave Type</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="warning">Warning Type</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="termination">Termination Type</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="expense">Expense Type</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="income">Income Type</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="employeeExit">Empolyee Exit Type</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="travel">Travel Arrangement Type</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="currency">Currency Type</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="company">Company Type</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="security">Security Type</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="claim">Claim</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Body>
          </Card>
        </Col>
        <Col xl={9}>
        {isError ? <div><span>Error Occured</span></div> : null}
            <Tab.Content>
                <Tab.Pane eventKey={"contract"}><Contract setIsError={setIsError} getAll={getAllConstant} data={data?.contract}/></Tab.Pane>
                <Tab.Pane eventKey={"qualification"}><Qualification setIsError={setIsError} getAll={getAllConstant} eduData={data?.education} lanData={data?.language} skillData={data?.skill} /></Tab.Pane>
                <Tab.Pane eventKey={"document"}><Document setIsError={setIsError} getAll={getAllConstant} data={data?.document}/></Tab.Pane>
                <Tab.Pane eventKey={"award"}><Award setIsError={setIsError} getAll={getAllConstant} data={data?.award}/></Tab.Pane>
                <Tab.Pane eventKey={"riligion"}><Riligion setIsError={setIsError} getAll={getAllConstant} data={data?.religion}/></Tab.Pane>
                 <Tab.Pane eventKey={"leave"}><Leave setIsError={setIsError} getAll={getAllConstant} data={data?.leave}/></Tab.Pane>
                <Tab.Pane eventKey={"warning"}><Warning setIsError={setIsError} getAll={getAllConstant} data={data?.warning}/></Tab.Pane>
                <Tab.Pane eventKey={"termination"}><Termination setIsError={setIsError} getAll={getAllConstant} data={data?.termination}/></Tab.Pane>
                <Tab.Pane eventKey={"expense"}><Expense setIsError={setIsError} getAll={getAllConstant} data={data?.expense}/></Tab.Pane>
                <Tab.Pane eventKey={"income"}><Incom setIsError={setIsError} getAll={getAllConstant} data={data?.income}/></Tab.Pane>
                <Tab.Pane eventKey={"employeeExit"}><EmployeeExit setIsError={setIsError} getAll={getAllConstant} data={data?.employeeExit}/></Tab.Pane>
                <Tab.Pane eventKey={"travel"}><Travel setIsError={setIsError} getAll={getAllConstant} data={data?.travelArrangement}/></Tab.Pane>
               <Tab.Pane eventKey={"currency"}><Currency setIsError={setIsError} getAll={getAllConstant} data={data?.currency}/></Tab.Pane>
                 <Tab.Pane eventKey={"company"}><Company setIsError={setIsError} getAll={getAllConstant} data={data?.company}/></Tab.Pane>
                <Tab.Pane eventKey={"security"}><Security setIsError={setIsError} getAll={getAllConstant} data={data?.security}/></Tab.Pane>
                <Tab.Pane eventKey={"claim"}><Claim setIsError={setIsError} getAll={getAllConstant} data={data?.claim}/></Tab.Pane>
            </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
