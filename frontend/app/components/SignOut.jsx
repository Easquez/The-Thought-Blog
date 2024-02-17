"use client";
import { signOut } from "next-auth/react";
import UserWelcome from "./UserWelcome";

import Link from "next/link";
function SignOut() {
  return (
    <>
      <ul className="navbar-nav ms-auto" />
      <li className="nav-item active">
        <span className="navbar-brand fw-normal fs-6 mx-5">
          <Link
            className="btn btn-dark"
            href="/"
            style={{ textDecoration: "none", color: "#FFFFFF" }}
            onClick={() => signOut()}
          >
            Log out
          </Link>
        </span>
      </li>
    </>
  );
}

export default SignOut;
