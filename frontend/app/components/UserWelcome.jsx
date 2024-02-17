"use client";
import { useSession } from "next-auth/react";
function UserWelcome() {
  const { data: session } = useSession();
  return (
    <>
      <p className="fs-6">
        Welcome {session ? session.user.email : <span>Please Sign in</span>}
      </p>
    </>
  );
}

export default UserWelcome;
