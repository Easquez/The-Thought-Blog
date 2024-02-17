import Link from "next/link";

function NotFound() {
  return (
    <div className="text-center my-5 mx-5">
      <h2 className="text-3xl text-danger">There was a problem</h2>
      <p>We could not find the blog you requested</p>
      <p>
        Go back to the
        <Link href="/" style={{ textDecoration: "none" }}>
          home page
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
