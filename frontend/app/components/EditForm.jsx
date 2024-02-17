"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import * as yup from "yup";
import Swal from "sweetalert2";

const schema = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().required(),
});

function EditForm() {
  const { id } = useParams();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await fetch(`http://127.0.0.1:5001/blogs/edit/${id}`, {
        // Update route for editing
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Your blog has been updated",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/blogs");
      } else {
        console.error("Failed to update blog:", res.statusText);
      }
    } catch (error) {
      console.error("Failed to update blog:", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className={`form-control`}
            placeholder="Title"
            {...register("title")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body:
          </label>
          <textarea
            type="text"
            name="body"
            id="body"
            className={`form-control`}
            placeholder="Body"
            {...register("body")}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Update Blog
        </button>
      </form>
    </div>
  );
}

export default EditForm;
