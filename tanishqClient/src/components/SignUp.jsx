import React from "react";
import { Formik } from "formik";
import sideImage from "../assets/images/sign-up-banner.jpg";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../store/users/action";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
                  name: "",
                  email: "",
                  password: "",
                  contact: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.name) {
                    errors.name = "Name is required";
                  }
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
                  if (!values.contact) {
                    errors.contact = "Contact is required";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setTimeout(() => {
                    dispatch(signUp(values));
                    setSubmitting(false);
                    navigate("/login");
                    resetForm();
                  }, 400);
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
                        type="text"
                        name="name"
                        onChange={handleChange}
                        className="form-control mt-3"
                        placeholder="Username"
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      <span style={{ color: "red" }}>
                        {errors.name && touched.name && errors.name}
                      </span>
                    </div>
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
                    <div>
                      <input
                        type="text"
                        name="contact"
                        onChange={handleChange}
                        className="form-control mt-3"
                        placeholder="Contact"
                        onBlur={handleBlur}
                        value={values.contact}
                      />
                      <span style={{ color: "red" }}>
                        {errors.contact && touched.contact && errors.contact}
                      </span>
                    </div>
                    <button
                      type="submit"
                      className="explore_btn mt-4 w-100"
                      disabled={isSubmitting}
                    >
                      Sign Up
                    </button>
                  </form>
                )}
              </Formik>
              <div className="my-2">
                <Link className="text-dark text-decoration-none" to={"/login"}>
                  <span role="button" className="me-5 pe-5">
                    Login
                  </span>
                </Link>
                <Link
                  className="text-dark text-decoration-none"
                  to={"/forget-password"}
                >
                  <span role="button" className="ms-5 ps-5">
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

export default SignUp;
