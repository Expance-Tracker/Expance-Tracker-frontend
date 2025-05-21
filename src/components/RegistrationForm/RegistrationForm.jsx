import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PasswordStrengthBar from "react-password-strength-bar";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosConfig";
import "./RegistrationForm.css";

const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Should be at least 2 symbols")
    .max(32, "Max 32 symbols")
    .required("Required field"),
  email: Yup.string()
    .email("Incorrect email")
    .max(64, "Max 64 symbols")
    .required("Required field"),
  password: Yup.string()
    .min(8, "Should be at least 8 symbols")
    .max(64, "Max 64 symbols")
    .required("Required field"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "The passwords should match")
    .required("Required field"),
});

export default function RegistrationForm() {
  const [backendError, setBackendError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-logo"></div>
        <h2 className="register-title">Spendy</h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={RegistrationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setBackendError("");
            try {
              const res = await axiosInstance.post("/register", {
                name: values.name,
                email: values.email,
                password: values.password,
              });
              localStorage.setItem("token", res.data.token);
              navigate("/dashboard");
            } catch (error) {
              setBackendError(
                error.response?.data?.message || "Registration error - backend"
              );
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              {/* обгортка з іконкою */}
              <div className="form-group-registration input-with-icon-register">
                <i className="fas fa-user input-icon-register"></i>
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-input-register"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="form-error-register"
                />
              </div>

              <div className="form-group-registration input-with-icon-register">
                <i className="fas fa-envelope input-icon-register"></i>
                <Field
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="form-input-register"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="form-error-register"
                />
              </div>

              <div className="form-group-registration input-with-icon-register">
                <i className="fas fa-lock input-icon-register"></i>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-input-register"
                  onChange={(e) => {
                    setFieldValue("password", e.target.value);
                    setPassword(e.target.value);
                  }}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="form-error-register"
                />
              </div>

              <div className="form-group-registration">
  <div className="input-with-icon-register">
    <i className="fas fa-lock input-icon-register"></i>
    <Field
      type="password"
      name="confirmPassword"
      placeholder="Confirm Password"
      className="form-input-register"
      onChange={(e) => {
        setFieldValue("confirmPassword", e.target.value);
        setConfirmPassword(e.target.value);
      }}
    />
  </div>
  <ErrorMessage
    name="confirmPassword"
    component="div"
    className="form-error-register"
  />
  <PasswordStrengthBar
    password={password}
    minLength={8}
    className="password-bar"
  />
  {confirmPassword && confirmPassword !== password && (
    <div className="form-error-register">The passwords should match</div>
  )}
</div>
              {backendError && (
                <div className="form-error-register backend-error-register">{backendError}</div>
              )}
              <button
                type="submit"
                className="register-btn"
                disabled={isSubmitting}
              >
                Register
              </button>
              <Link to="/login" className="login-link-register">
                Login
              </Link>
            </Form>
          )}
        </Formik>
      </div>
      <img
        src="/src/assets/register/wallet_wave.png"
        alt="Happy Wallet"
        className="wallet-image-registration"
      />
    </div>
  );
}
