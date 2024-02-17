"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import Swal from "sweetalert2";

const schema = yup.object().shape({
  username: yup.string().required("Username should be required please"),
  email: yup.string().email().required("Please type a valid e-mail address"),
  password: yup.string().min(5).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function RegisterForm() {
  const [emailError, setEmailError] = useState("");
  const [success, setSuccess] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  const submitForm = async (data, e) => {
    e.preventDefault();
    const { username, email, password } = data;

    // console.log(formData);
    try {
      const resUserExists = await fetch("http://127.0.0.1:5001/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const { exists } = await resUserExists.json();

      if (exists) {
        setEmailError("Account already exists");
        return;
      }

      const res = await fetch("http://127.0.0.1:5001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        setEmailError("");
        setSuccess("Account Created Successfully");
        setTimeout(() => {
          Swal.fire({
            icon: "success",
            title: "Account has been created!",
            showConfirmButton: false,
            timer: 1500,
          });
          router.push("/login");
        }, 1500);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">Sign Up</h5>
              <form onSubmit={handleSubmit(submitForm)}>
                {<p className="text-danger text-center">{emailError}</p>}
                {<p className="text-success text-center">{success}</p>}

                <div className="mb-3">
                  <input
                    type="text"
                    name="username"
                    {...register("username")}
                    className={`form-control ${
                      errors.username ? "is-invalid" : ""
                    }`}
                    placeholder="Username..."
                  />
                  {errors.username && (
                    <div className="invalid-feedback">
                      {errors.username.message}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="email"
                    {...register("email")}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Email..."
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    name="password"
                    {...register("password")}
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    placeholder="Password..."
                  />
                  {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password.message}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    name="confirmPassword"
                    {...register("confirmPassword")}
                    className={`form-control ${
                      errors.confirmPassword ? "is-invalid" : ""
                    }`}
                    placeholder="Confirm Password..."
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {"Passwords should match"}
                    </div>
                  )}
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-success">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
