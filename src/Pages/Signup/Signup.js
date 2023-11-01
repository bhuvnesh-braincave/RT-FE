import { useState } from "react";

import { useNavigate } from "react-router-dom";

import logo from "../../assets/Images/logo.png"
import Wraper from "../Common/Wrapper";


let initState = {
  name: null,
  username: null,
  email: null,
  password: null,
  status:"INACTIVE"
};

export default function Signup() {
  let [user, setUser] = useState(initState);
  const navigate = useNavigate();

  let [successMsg, setSuccessMsg] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    // fetch(url, {
    //   method: "POST",
    //   body: JSON.stringify(user),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.success) {
    //       setSuccessMsg(
    //         <div
    //           style={{
    //             backgroundColor: "lightgreen",
    //             textAlign: "center",
    //             marginTop: "5px",
    //             padding: "10px",
    //           }}
    //         >
    //           SignUp Successfull
    //         </div>
    //       );

    //       setTimeout(() => {
    //         navigate("/signIn");
    //       }, 2000);
    //     }else{
    //         setSuccessMsg(
    //             <div
    //               style={{
    //                 backgroundColor: "red",
    //                 textAlign: "center",
    //                 marginTop: "5px",
    //                 padding: "10px",
    //               }}
    //             >
    //               {data.message}
    //             </div>
    //           );
    //     }
    //   })
    //   .catch((e) => console.log(e));
    // setUser(initState);
  }

  return (
    <Wraper loginpage={true}>
      <div className="card-body m-3 pt-0">
                <img
                    src={logo}
                    alt="logo"
                    height="34"
                />
        <div className="p-2">
          <form className="needs-validation" onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label for="useremail" class="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Name"
                required
                value={user.name}
                onChange={(e) =>
                  setUser((preVal) => ({ ...preVal, name: e.target.value }))
                }
              />
              <div className="invalid-feedback">Please Enter Name</div>
            </div>

            <div className="mb-3">
              <label for="useremail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="useremail"
                placeholder="Enter email"
                required
                value={user.email}
                onChange={(e) =>
                  setUser((preVal) => ({ ...preVal, email: e.target.value }))
                }
              />
              <div className="invalid-feedback">Please Enter Email</div>
            </div>

            <div className="mb-3">
              <label for="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
                required
                value={user.username}
                onChange={(e) =>
                  setUser((preVal) => ({ ...preVal, username: e.target.value }))
                }
              />
              <div className="invalid-feedback">Please Enter Username</div>
            </div>

            <div className="mb-3">
              <label for="userpassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="userpassword"
                placeholder="Enter password"
                required
                value={user.password}
                onChange={(e) =>
                  setUser((preVal) => ({ ...preVal, password: e.target.value }))
                }
              />
              <div className="invalid-feedback">Please Enter Password</div>
            </div>
            <lebel>Status: </lebel>
            <select 
            name="selectedStatus" 
            defaultValue={user.status}
            onChange={e=>{setUser(preVal=>({...preVal,status:e.target.value}))}}
            >
                <option value="INACTIVE">Inactive</option>
                <option value="ACTIVE">Active</option>
            </select>

            <div className="mt-4 d-grid">
              <button
                className="btn btn-primary waves-effect waves-light"
                type="submit"
              >
               Add Admin
              </button>
              {successMsg}
            </div>
          </form>
        </div>
      </div>
    </Wraper>
  );
}
