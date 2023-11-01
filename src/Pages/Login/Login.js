import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { login } from "../../Utility/API/auth";
import { authContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";




export default function Login() {
  const navigate = useNavigate()
  const [showPass,setShowPass] = useState(false)
  const [error,setError] = useState(null)
  const [data,setData] = useState({username:"",password:""})

const {setUser} = useContext(authContext)


  async function handleSubmit(e){
    e.preventDefault()
try {
  let response = await login(data)
  if(!response) return setError("network error")
  if(response.status === 200){
    setUser({
      username:response.data.username,
      name:response.data.name || "unknown user",
      email:response.email || "",
      token:response.data.accessToken
    })
    toast.success("login successfull")
    navigate(-1 || "/")
  }else if(response.status===401) toast.error("wrong username or password")
  else if(response.status===404) setError("pass correct inputs")
  else if(response.status===500) setError("some internal error occured")
} catch (error) {
  console.log("hiooo",error)
}
    return
  }

  return (
    <div class="account-pages my-5 pt-sm-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <div class="card overflow-hidden">
                        <div class="bg-primary bg-soft">
                            <div class="row">
                                <div class="col-7">
                                    <div class="text-primary p-4">
                                        <h5 class="text-primary">Welcome Back !</h5>
                                        <p>Sign in to Braincave HRMS.</p>
                                    </div>
                                </div>
                                <div class="col-5 align-self-end">
                                    <img src="assets/images/profile-img.png" alt="" class="img-fluid"/>
                                </div>
                            </div>
                        </div>
                        <div class="card-body pt-0">
                            <div class="auth-logo">


                                <a href="index.html" class="auth-logo-dark">
                                    <div class="avatar-md profile-user-wid mb-4">
                                        <span class="avatar-title rounded-circle bg-light">
                                            <img src="assets/images/logo.png" alt="" class="rounded-circle" height="44"/>
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <div class="p-2">
                            {error && <div className="d-flex justify-content-center"><span style={{color:"red"}}>{error}</span></div>}
                                <form class="form-horizontal" onSubmit={handleSubmit}>

                                    <div class="mb-3">
                                        <label for="username" class="form-label">Username</label>
                                        <input onChange={e=>{
                                          setError(null)
                                          setData(preVal=>({...preVal,username:e.target.value}))
                                        }} type="text" class="form-control" id="username" placeholder="Enter username"/>
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">Password</label>
                                        <div class="input-group input-group-merge">
                                            <input onChange={(e)=>{
                                              setError(null)
                                              setData(preVal=>({...preVal,password:e.target.value}))
                                            }
                                              } type={showPass?"text":"password"} id="password" value={data.password} class="form-control" placeholder="Enter password"/>
                                            <div className="input-group-text">
                                                <span onMouseEnter={() => setShowPass(true)}
                                                      onMouseLeave={() => setShowPass(false)}><i className="fas fa-eye"></i></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mt-3 d-grid">
                                      <button class="btn btn-primary waves-effect waves-light" type="submit">Log In</button>
                                    </div>



                                    <div class="mt-4 text-center">
                                        <a onClick={()=>{navigate("/reset")}} class="text-muted"><i class="mdi mdi-lock me-1"></i> Forgot your password?</a>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                    <div class="mt-5 text-center">

                        <div>

                            <p>© <script>
                                    document.write(new Date().getFullYear())

                                </script> HRMS. Developed <i class="mdi mdi-heart text-danger"></i> by <a href="https://braincavesoft.com/" target="_blank">Braincave Software Private Limited</a> </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
}
{/* <Wraper>
      <div className="card-body m-3 pt-0">
                <img
                  src={logo}
                  alt="logo"
                  height="34"
                />
        <div className="p-2">
          <form className="form-horizontal" onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label for="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                value={userData.username}
                onChange={(e) =>{setSuccessMsg(null)
                  setUserData((preVal) => ({
                    ...preVal,
                    username: e.target.value,
                  }))}
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group auth-pass-inputgroup">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={userData.password}
                  onChange={(e) =>{setSuccessMsg(null)
                    setUserData((preVal) => ({
                      ...preVal,
                      password: e.target.value,
                    }))}
                  }
                />
              </div>
            </div>
            <div class="mt-5 d-grid">
              <button
                class="btn btn-primary waves-effect waves-light"
                type="submit"
              >
                Log In
              </button>
              {successMsg}
            </div>

            <div class="mt-4 text-center">
              <a
                onClick={() => navigate("/reset")}
                style={{ cursor: "pointer" }}
                class="text-muted"
              >
                <i class="mdi mdi-lock me-1"></i> Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </Wraper> */}