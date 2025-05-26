import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";

import PasswordStrengthBar from "react-password-strength-bar";
import axiosInstance from "../../api/axiosConfig";
import css from "./RegistrationForm.module.css";
import { useState } from "react";
import walletWave from '../../assets/register/wallet_wave.webp';

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
    .required("Required field")
});

export default function RegistrationForm() {
  const [backendError, setBackendError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className={css["register-container"]}>
      <div className={css["register-card"]}>
        <div className={css["register-logo"]} />
        <h2 className={css["register-title"]}>Spendy</h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
          }}
          validationSchema={RegistrationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setBackendError("");
            try {
              const res = await axiosInstance.post("/register", {
                name: values.name,
                email: values.email,
                password: values.password
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
              <div className={css["form-group-registration"]}>
                <div className={css["input-with-icon-register"]}>
                  <i className={`fas fa-user ${css["input-icon-register"]}`} />
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={css["form-input-register"]}
                  />
                </div>
                <ErrorMessage
                  name="name"
                  component="div"
                  className={css["form-error-register"]}
                />
              </div>

              <div className={css["form-group-registration"]}>
                <div className={css["input-with-icon-register"]}>
                  <i
                    className={`fas fa-envelope ${css["input-icon-register"]}`}
                  />
                  <Field
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className={css["form-input-register"]}
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css["form-error-register"]}
                />
              </div>

              <div className={css["form-group-registration"]}>
                <div className={css["input-with-icon-register"]}>
                  <i className={`fas fa-lock ${css["input-icon-register"]}`} />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={css["form-input-register"]}
                    onChange={(e) => {
                      setFieldValue("password", e.target.value);
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className={css["form-error-register"]}
                />
              </div>

              <div className={css["form-group-registration"]}>
                <div className={css["input-with-icon-register"]}>
                  <i className={`fas fa-lock ${css["input-icon-register"]}`} />
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className={css["form-input-register"]}
                    onChange={(e) => {
                      setFieldValue("confirmPassword", e.target.value);
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </div>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className={css["form-error-register"]}
                />
                <PasswordStrengthBar
                  password={password}
                  minLength={8}
                  className={css["password-bar"]}
                />
                {confirmPassword && confirmPassword !== password && (
                  <div className={css["form-error-register"]}>
                    The passwords should match
                  </div>
                )}
              </div>

              {backendError && (
                <div
                  className={`${css["form-error-register"]} ${css["backend-error-register"]}`}
                >
                  {backendError}
                </div>
              )}

              <button
                type="submit"
                className={css["register-btn"]}
                disabled={isSubmitting}
              >
                Register
              </button>

              <Link to="/login" className={css["login-link-register"]}>
                Login
              </Link>
            </Form>
          )}
        </Formik>
      </div>

      <img
        src={walletWave}
        alt="Happy Wallet"
        className={css["wallet-image-registration"]}
      />
    </div>
  );
}
