// import { Card } from "react-bootstrap";

import EmployeeStatics from "./EmployeeStatics";
import SalesChart from "./SalesChart";

// export default function EmployerrSummery({cards}) {

// let cardList = cards.map((ele,i)=>{
//    return (
//       <Card
//          key={i}
//          style={{width:"12rem",height:"6rem",display:"flex",justifyContent:"center"}}
//          bg={ele.bg || "white"}
//          text={ele.color || "black"}
//          m-3
//          >
//             <Card.Title style={{color:"white",margin:"10px"}}><i className={ele.icon}></i>{ele.title}</Card.Title>
//             <Card.Text style={{margin:"10px",fontSize:"1.2rem",marginLeft:"30px"}}>{ele.data}</Card.Text>
//          </Card>
//    )
// })


    
//     return (
        

//         <div className="d-flex justify-content-around flex-wrap">
//          {cardList}


//          {/* <Card
//          style={{width:"12rem",height:"6rem",display:"flex",justifyContent:"center"}}
//          bg="secondary"
//          text="white"
//          m-3
//          >
//             <Card.Title style={{color:"white",margin:"10px"}}><i className="bi bi-person me-2"></i>Total Employee</Card.Title>
//             <Card.Text style={{margin:"10px",fontSize:"1.2rem",marginLeft:"30px"}}>150</Card.Text>
//          </Card>

//          <Card
//          style={{width:"12rem",height:"6rem",display:"flex",justifyContent:"center"}}
//          bg="dark"
//          text="white"
//          m-3
//          >
//             <Card.Title style={{color:"white",margin:"10px"}}><i className="bx bxs-briefcase me-2"></i>Total Project</Card.Title>
//             <Card.Text style={{margin:"10px",fontSize:"1.2rem",marginLeft:"30px"}}>10</Card.Text>
//          </Card> */}
            
//         </div>
//     )
// };


export default function EmployerrSummery() {
   return(
      <div className="row">
                        <div className="col-xl-8">
                            <div className="card">
                                <div className="card-body">
                                    <div className="clearfix">
                                        <div className="float-end">
                                            <div className="input-group input-group-sm">
                                                <select className="form-select form-select-sm">
                                                    <option value="JA" selected>Jan</option>
                                                    <option value="DE">Dec</option>
                                                    <option value="NO">Nov</option>
                                                    <option value="OC">Oct</option>
                                                </select>
                                                <label className="input-group-text">Month</label>
                                            </div>
                                        </div>
                                        <h4 className="card-title mb-4">Earning</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="text-muted">
                                                <div className="mb-4">
                                                    <p>This month</p>
                                                    <h4>$2453.35</h4>
                                                    <div>
                                                        <span className="badge badge-soft-success font-size-12 me-1">
                                                            + 0.2%
                                                        </span>
                                                        From previous period
                                                    </div>
                                                </div>
                                                <div>
                                                    <a href="javascript: void(0);" className="btn btn-primary waves-effect waves-light btn-sm">View
                                                        Details
                                                        <i className="mdi mdi-chevron-right ms-1"></i></a>
                                                </div>
                                                <div className="mt-4">
                                                    <p className="mb-2">Last month</p>
                                                    <h5>$2281.04</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                        <EmployeeStatics />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Sales Analytics</h4>
                                    <div>
                                       <SalesChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
   )
};
