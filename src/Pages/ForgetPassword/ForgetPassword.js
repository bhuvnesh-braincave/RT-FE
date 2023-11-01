import Wraper from "../../Components/Common/Wrapper";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Images/logo.png"



export default function ResetPass() {
  const navigate = useNavigate()

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
                                        <h5 class="text-primary"> Reset Password</h5>
                                        <p>Reset Password with Braincave HRMS.</p>
                                    </div>
                                </div>
                                <div class="col-5 align-self-end">
                                    <img src="assets/images/profile-img.png" alt="" class="img-fluid"/>
                                </div>
                            </div>
                        </div>
                        <div class="card-body pt-0">
                            <div>
                                <a href="index.html">
                                    <div class="avatar-md profile-user-wid mb-4">
                                        <span class="avatar-title rounded-circle bg-light">
                                            <img src="assets/images/logo.png" alt="" class="rounded-circle" height="34"/>
                                        </span>
                                    </div>
                                </a>
                            </div>

                            <div class="p-2">
                                <div class="alert alert-success text-center mb-4" role="alert">
                                    Enter your Email and instructions will be sent to you!
                                </div>
                                <form class="form-horizontal" action="#">

                                    <div class="mb-3">
                                        <label for="useremail" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="useremail" placeholder="Enter email"/>
                                    </div>

                                    <div class="text-end">
                                        <button class="btn btn-primary w-md waves-effect waves-light" type="submit">Reset</button>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                    <div class="mt-5 text-center">
                        <p>Remember It ? <a onClick={()=>{navigate("/login")}} class="fw-medium text-primary"> Sign In here</a> </p>
                        <p>© <script>
                                document.write(new Date().getFullYear())

                            </script> HRMS. Developed <i class="mdi mdi-heart text-danger"></i> by <a href="https://braincavesoft.com/" target="_blank">Braincave Software Private Limited</a> </p>
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
        <div class="p-2">
          <form class="form-horizontal" onSubmit={(e) => handleSubmit(e)}>
          <br />
          <br />
          <br />
          <br />
            <div class="mb-5">
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Enter username/email"
              />
            </div>

            <div class="mt-3 d-grid">
              <button
                class="btn btn-primary waves-effect waves-light"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Wraper> */}