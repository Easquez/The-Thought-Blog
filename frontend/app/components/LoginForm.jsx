"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

const schema = yup.object().shape({
  email: yup.string().email().required("E-mail is required."),
  password: yup.string().min(5).max(15).required("Please type a valid e-mail"),
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const [errorFb, setErrorFb] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (data) => {
    try {
      const signInResponse = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      setIsLoading(true);

      if (signInResponse.ok) {
        setErrorFb(false);

        setTimeout(() => {
          router.replace("/");
          Swal.fire({
            icon: "success",
            title: "Welcome Back!",
            showConfirmButton: false,
            timer: 1500,
          });
        }, 3000);
      }

      if (signInResponse.error) {
        console.log(signInResponse.error);
        setIsLoading(false);

        setErrorFb(true);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <br />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">Sign In</h5>
              <form onSubmit={handleSubmit(submitForm)}>
                <div className="mb-3">
                  {errorFb && (
                    <p className="text-danger text-center">
                      Invalid Input. Please verify your credentials.
                    </p>
                  )}

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

                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Sign In"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
