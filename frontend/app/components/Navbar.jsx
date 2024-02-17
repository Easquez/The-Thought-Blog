"use client";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import SignInRegister from "./SignInRegister";
import SignOut from "./SignOut";
import { useSession } from "next-auth/react";
import UserWelcome from "./UserWelcome";

function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand fw-bold mx-5" style={{ color: "#157347" }}>
        <Link href="/" style={{ textDecoration: "none", color: "#157347" }}>
          The Thought Blog
        </Link>
      </span>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <span
              className="navbar-brand fw-normal fs-6 mx-5"
              style={{ color: "#157347" }}
            >
              <Link
                href="/blogs"
                style={{ textDecoration: "none", color: "#000000" }}
              >
                Blogs
              </Link>
            </span>
          </li>
          <li className="nav-item active">
            <span
              className="navbar-brand fw-normal fs-6 mx-5"
              style={{ color: "#68c3a3" }}
            >
              <Link
                href="/blogs/create"
                style={{ textDecoration: "none", color: "#000000" }}
              >
                Create a blog
              </Link>
            </span>
          </li>
          <li className="nav-item active">
            <span
              className="navbar-brand fw-normal fs-6 mx-5"
              style={{ color: "#68c3a3" }}
            >
              <Link
                href="/blogs/tips"
                style={{ textDecoration: "none", color: "#000000" }}
              >
                Tips
              </Link>
            </span>
          </li>
        </ul>

        {!session ? <SignInRegister /> : null}

        {session ? <SignOut /> : null}
      </div>
    </nav>
  );
}

export default Navbar;
