"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HiPencilAlt, HiOutlineTrash } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";
import Loading from "../blogs/loading";

async function fetchBlogs() {
  const res = await fetch("http://127.0.0.1:5001/blogs");
  return res.json();
}
async function fetchBlogCount() {
  const res = await fetch("http://127.0.0.1:5001/blogs/count");
  return res.json();
}

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [blogCount, setBlogCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchBlogs();
      setBlogs(data);
    }
    fetchData();

    async function fetchCount() {
      const countData = await fetchBlogCount();
      setBlogCount(countData.count);
    }
    fetchCount();
  }, []);

  return (
    <div className="container">
      <div className="container ">
        <p className="display-6">Here you find the most recent blogs</p>
        <p>You can click on a specific blog to read more about it!</p>
        <p className="text-muted">Happy Reading!</p>
      </div>
      <div className="container my-5 px-5">
        <h3>Total Blogs: {blogCount}</h3>

        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog._id} className="card my-3 p-3">
              <Link
                href={`/blogs/${blog._id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <span style={{ textDecoration: "none", color: "black" }}>
                  <h2 className="card-title">{blog.title}</h2>
                  <p className="card-text">{blog.body.slice(0, 250)}...</p>
                </span>
              </Link>
              <div className="d-flex justify-content-end">
                <RemoveBtn blogId={blog._id}>
                  <HiOutlineTrash size={24} />
                </RemoveBtn>
                <Link href={`/blogs/edit/${blog._id}`}>
                  <button type="button" className="btn btn-success">
                    <HiPencilAlt size={24} />
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <span>
            There are no blogs!
            <br />
            <Link
              href="/blogs/create"
              style={{ textDecoration: "none", color: "green" }}
            >
              <p className="fs-5">Click on me to create a new blog!</p>
            </Link>
          </span>
        )}
      </div>
    </div>
  );
}
