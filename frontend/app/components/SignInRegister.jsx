import Link from "next/link";

function SignInRegister() {
  return (
    <>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item active">
          <span className="navbar-brand fw-normal fs-6 mx-5">
            <Link
              className="btn btn-light"
              href="/register"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              Register
            </Link>
          </span>
        </li>
        <li className="nav-item active">
          <span className="navbar-brand fw-normal fs-6 mx-5">
            <Link
              className="btn btn-light"
              href="/login"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              Sign In
            </Link>
          </span>
        </li>
      </ul>
    </>
  );
}

export default SignInRegister;
