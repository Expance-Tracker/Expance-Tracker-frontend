import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { login } from "../../redux/auth/operations";
import Loader from "../Loader/Loader";

import walletIcon from "../../assets/walletIcon.svg";
import loginImg from "../../assets/loginImg.svg";
import { BiSolidEnvelope } from "react-icons/bi";
import { MdLock } from "react-icons/md";

import css from "./LoginForm.module.css";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().min(3).max(64).required("Required"),
  password: Yup.string().min(8).max(64).required("Required"),
});

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    setIsLoading(true);
    dispatch(login(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome, ${res.name}`);
        navigate("/");
        resetForm();
      })
      .catch((err) => {
        toast.error(err || "Login failed");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={css.login__container}>
      {isLoading && <Loader />}
      <div className={css.wrapper}>
        <div className={css.logo}>
          <img src={walletIcon} alt="Spendy Logo" width={54} height={54} />
          <h1 className={css.logo__title}>Spendy</h1>
        </div>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <div className={css.block}>
              <label className={css.label__block}>
                <Field
                  name="email"
                  type="email"
                  className={css.input}
                  placeholder="E-mail"
                  autoComplete="off"
                />
                <BiSolidEnvelope className={css.field__icon} />
              </label>
              <ErrorMessage name="email" component="span" className={css.error} />
            </div>

            <div className={css.block}>
              <label className={css.label__block}>
                <Field
                  name="password"
                  type="password"
                  className={css.input}
                  placeholder="Password"
                  autoComplete="off"
                />
                <MdLock className={css.field__icon} />
              </label>
              <ErrorMessage name="password" component="span" className={css.error} />
            </div>

            <button type="submit" className={css.button}>Log In</button>
          </Form>
        </Formik>

        <NavLink to="/register">
          <button type="button" className={css.button__redirect}>Register</button>
        </NavLink>

        <img src={loginImg} className={css.helloImg} alt="Welcome illustration" />
      </div>
    </div>
  );
}
