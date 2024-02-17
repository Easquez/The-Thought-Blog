"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function BlogDetails() {
  const { id } = useParams();
  //   console.log(params);
  //   console.log(id);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:5001/blogs/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch blog");
        }
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error(`Error fetching blog:`, error);
      }
    };
    fetchBlog();
  }, []);

  if (!blog) {
    return <div>Loading...</div>;
  }

  // blog component
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card mt-5">
            <div className="card-body">
              <h1 className="card-title display-6">{blog.title}</h1>
              <hr />
              <p className="card-text">{blog.body}</p>
            </div>
          </div>
          <div className="text-end mt-3">
            <Link href="/blogs">
              <button className="btn btn-success btn-sm">Back to Blogs</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
