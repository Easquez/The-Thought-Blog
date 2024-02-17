"use client";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const RemoveBtn = ({ blogId }) => {
  const router = useRouter();
  const handleRemove = async () => {
    try {
      const res = await fetch(`http://localhost:5001/blogs/delete/${blogId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        Swal.fire({
          icon: "error",
          title: "Done...",
          text: "Blog deleted successfully!",
          footer: "<span>Redirecting to blogs...</span>",
        });
        setTimeout(() => {
          router.push("/blogs");
          window.location.reload();
        }, 1000);
      } else {
        console.error("Failed to delete blog:", res.statusText);
      }
    } catch (error) {
      console.error("Failed to delete blog:", error);
    }
  };

  return (
    <button
      className="btn btn-danger mx-1"
      type="button"
      onClick={handleRemove}
    >
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
