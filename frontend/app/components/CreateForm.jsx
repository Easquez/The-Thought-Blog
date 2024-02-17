"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import Swal from "sweetalert2";
import Image from "next/image";

const schema = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().required(),
});

function CreateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await fetch("http://127.0.0.1:5001/blogs/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Blog has been added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/blogs");
      } else {
        console.error("Failed to create blog:", res.statusText);
      }
    } catch (error) {
      console.error("Failed to create blog:", error);
    }
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5"
        action="http://127.0.0.1:5001/blogs/create"
        method="post"
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
            placeholder="Title"
            {...register("title")}
          />
          {errors.title && (
            <div className="invalid-feedback">{errors.title.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body:
          </label>
          <textarea
            type="text"
            name="body"
            id="body"
            className={`form-control ${errors.body ? "is-invalid" : ""}`}
            placeholder="Body"
            {...register("body")}
          />
          {errors.body && (
            <div className="invalid-feedback">{errors.body.message}</div>
          )}
        </div>
        <button type="submit" className="btn btn-success">
          Add Blog
        </button>
      </form>
      <div className="container mx-5 my-5">
        <div className="card">
          <Image
            src="/blogimg.png"
            className="card-img-top"
            width={30}
            height={3}
            alt="Create a Blog"
          />
          <div className="card-body">
            <h5 className="card-title">Start Your Blogging Journey Today!</h5>
            <p className="card-text">
              Are you passionate about sharing your thoughts with the world?
              Start your own blog today and make your voice heard!
            </p>
          </div>
          <div className="card-footer text-muted">
            Need inspiration? Explore our tips and guides to kickstart your
            blogging journey!
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateForm;
