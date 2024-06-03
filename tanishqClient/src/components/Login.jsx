import React, { useEffect } from "react";
import { Formik } from "formik";
import sideImage from "../assets/images/login-side-img.jpg";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/users/action";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {login} = useAuth()
  
  const data = useSelector((state) => state.userss);


  return (
    <div className="signupBanner d-flex justify-content-center">
      <div className="formbg">
        <div className="row g-0">
          <div className="col col-6">
            <img src={sideImage} className="formsideimg" alt="" />
          </div>
          <div className="col col-6">
            <div className="text-center py-5 pe-4">
              <img src={logo} className="w-25 mb-2" alt="" />
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validate={(values) => {
                  const errors = {};

                  if (!values.email) {
                    errors.email = "Email is required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  if (!values.password) {
                    errors.password = "Password is required";
                  }
                  return errors;
                }}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  try {
                    
                    const userData = await dispatch(loginUser(values)).unwrap();
                    login(userData)
                    navigate("/");
                  } catch (error) {
                    console.error("Login failed:", error);
                  } finally {
                    resetForm();
                    setSubmitting(false);
                  }
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  resetForm,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div>
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        className="form-control mt-3"
                        placeholder="Email Address"
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <span style={{ color: "red" }}>
                        {errors.email && touched.email && errors.email}
                      </span>
                    </div>
                    <div>
                      <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        className="form-control mt-3"
                        placeholder="password"
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <span style={{ color: "red" }}>
                        {errors.password && touched.password && errors.password}
                      </span>
                    </div>
                    <button
                      type="submit"
                      className="explore_btn mt-4 w-100"
                      disabled={isSubmitting}
                    >
                      Login
                    </button>
                    <h5>
                      {data.error?.response?.data?.message ? (
                        <Link to={"/sign-up"}>
                          {data.error?.response?.data?.message}
                        </Link>
                      ) : (
                        data.error?.response?.data?.message
                      )}{" "}
                    </h5>
                  </form>
                )}
              </Formik>
              <div className="my-2">
                <Link
                  className="text-dark text-decoration-none"
                  to={"/sign-up"}
                >
                  <span role="button" className="me-5">
                    Sign Up
                  </span>
                </Link>
                <Link
                  className="text-dark text-decoration-none"
                  to={"/otp-login"}
                >
                  <span role="button" className="">
                    login with otp
                  </span>
                </Link>
                <Link
                  className="text-dark text-decoration-none"
                  to={"/forget-password"}
                >
                  <span role="button" className="ms-5">
                    Forget Password ?
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
