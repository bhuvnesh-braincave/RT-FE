// import { Card } from "react-bootstrap";

import { FormattedMessage } from "react-intl";

// export default function CardsWithData({cards}) {

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
        

        
//             <div className="card" >
//                 <div className="card-body">
//                     <div className="d-flex justify-content-around flex-wrap">
//                     {cardList}
//                 </div>
//             </div>
         


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


export default function CardsWithData() {
   return(
      <div className="row">
                        <div className="col-xl-12">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="avatar-xs me-3">
                                                    <span className="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-18">
                                                        <i className="fas fa-users"></i>
                                                    </span>
                                                </div>
                                                <h5 className="font-size-14 mb-0">Employees</h5>
                                            </div>
                                            <div className="text-muted mt-4">
                                                <h4>
                                                    150+
                                                    <i className="mdi mdi-chevron-up ms-1 text-success"></i>
                                                </h4>
                                                {/* <!-- <div className="d-flex">
                                                        <span className="badge badge-soft-success font-size-12"> + 0.2% </span> <span className="ms-2 text-truncate">From previous period</span>
                                                    </div> --> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="avatar-xs me-3">
                                                    <span className="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-18">
                                                        <i className="bx bx-archive-in"></i>
                                                    </span>
                                                </div>
                                                <h5 className="font-size-14 mb-0">Roles Permissions</h5>
                                            </div>
                                            <div className="text-muted mt-4">
                                                <h4>
                                                    <FormattedMessage id="Set_Roles" defaultMessage={"Set Roles"} />
                                                    
                                                    <i className="mdi mdi-chevron-up ms-1 text-success"></i>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="avatar-xs me-3">
                                                    <span className="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-18">
                                                        <i className="bx bx-calendar"></i>
                                                    </span>
                                                </div>
                                                <h5 className="font-size-14 mb-0">Leave Management</h5>
                                            </div>
                                            <div className="text-muted mt-4">
                                                <h4>
                                                    View Applications
                                                    <i className="mdi mdi-chevron-up ms-1 text-success"></i>
                                                </h4>

                                                {/* <!-- <div className="d-flex">
                                                        <span className="badge badge-soft-warning font-size-12"> 0% </span> <span className="ms-2 text-truncate">From previous period</span>
                                                    </div> --> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="avatar-xs me-3">
                                                    <span className="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-18">
                                                        <i className="bx bx-cog"></i>
                                                    </span>
                                                </div>
                                                <h5 className="font-size-14 mb-0">Settings</h5>
                                            </div>
                                            <div className="text-muted mt-4">
                                                <h4>
                                                    Configurations
                                                    <i className="mdi mdi-chevron-up ms-1 text-success"></i>
                                                </h4>

                                                {/* <!-- <div className="d-flex">
                                                        <span className="badge badge-soft-warning font-size-12"> 0% </span> <span class="ms-2 text-truncate">From previous period</span>
                                                    </div> --> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
   )
};
