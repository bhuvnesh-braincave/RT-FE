import { Link } from "react-router-dom";

export default function Wraper({ children,loginpage=false }) {
    let go;
    !loginpage?go="/signup":go="/login"
  return (
    <div class="my-5 pt-sm-5">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card">{children}</div>
            <div class="mt-5 text-center">
                <p>
                  Don't have an account ?{" "}
                  <Link to={go} class="fw-medium text-primary">
                    {" "}
                    {!loginpage?"Signup now":"Login"}{" "}
                  </Link>{" "}
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
