import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, LoginOtp } from "../store/users/action";
import { useAuth } from "../context/AuthContext";

const LoginWithOtp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [otpRequested, setOtpRequested] = useState(false);
  const logindata = useSelector((state) => state.userss);
  console.log(logindata);

  return (
    <div className="signupBanner d-flex justify-content-center">
      <div className="formbg">
        <div className="row g-0">
          <div className="col col-6">
            <div className="otpbg"></div>
          </div>
          <div className="col col-6">
            <div className="text-center py-5 pe-4">
              <img src={logo} className="w-25 mb-2" alt="" />
              <Formik
                initialValues={{ email: "", otp: "" }}
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
                  if (otpRequested && !values.otp) {
                    errors.otp = "Please Enter OTP ";
                  }
                  return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                  if (!otpRequested) {
                    try {
                      await dispatch(sendOtp(values.email)).unwrap();
                      console.log(typeof(values.email))
                      setOtpRequested(true); // Enable OTP input for the next step
                    } catch (error) {
                      console.error("Error sending OTP", error);
                    }
                  } else {
                    try {
                      const userData = await dispatch(LoginOtp(values)).unwrap();
                      login(userData)
                     navigate("/");
                    } catch (error) {
                      console.error("Login error", error);
                    }
                  }

                  setSubmitting(false);
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
                    {otpRequested && (
                      <div>
                        <input
                          type="text"
                          name="otp"
                          onChange={handleChange}
                          className="form-control mt-3"
                          placeholder="OTP"
                          onBlur={handleBlur}
                          value={values.otp}
                        />
                        <span style={{ color: "green" }}>
                          {logindata?.otpmessage?.message}
                        </span>
                        <span style={{ color: "red" }}>
                          {errors.otp && touched.otp && errors.otp}
                        </span>
                      </div>
                    )}
                    <button
                      type="submit"
                      className="explore_btn mt-4 w-100"
                      disabled={isSubmitting}
                    >
                      {otpRequested ? 'verify OTP' : 'Send OTP'}
                    </button>
                    <h5>
                      {logindata.error?.response?.logindata?.message ? (
                        <Link to={"/sign-up"}>
                          {logindata.error?.response?.logindata?.message}
                        </Link>
                      ) : (
                        logindata.error?.response?.logindata?.message
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
                  <span role="button" className="me-5 pe-5">
                    Sign Up
                  </span>
                </Link>
                <Link className="text-dark text-decoration-none" to={"/login"}>
                  <span role="button" className="ms-5 ps-5">
                    Login
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

export default LoginWithOtp;
