import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./LoginForm.module.css";

import walletIcon from "../../assets/walletIcon.svg";
import loginImg from "../../assets/loginImg.svg";
import { BiSolidEnvelope } from "react-icons/bi";
import lockIcon from "../../assets/lock.svg";
import { MdLock } from "react-icons/md";

import { NavLink } from "react-router-dom";
import * as Yup from "yup";

export default function LoginForm() {
  const initialValues = {
    email: "",
    password: ""
  };

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .min(3, "Min 3 symbols")
      .max(64, "Not more than 64 symbols")
      .required("Required"),
    password: Yup.string()
      .min(8, "Not less than 8 digits")
      .max(64, "Not more than 64 digits")
      .required("Required")
  });

  const handleSubmit = (values, options) => {};

  return (
    <div className={css.wrapper}>
      <div className={css.logo}>
        <img
          src={walletIcon}
          alt="Logo icon of the app"
          width={54}
          height={54}
        />
        <h1 className={css.logo__title}>Spendy</h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
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

            <ErrorMessage
              name="password"
              component="span"
              className={css.error}
            />
          </div>

          <button type="submit" className={css.button}>
            Log In
          </button>
        </Form>
      </Formik>
      <NavLink to="/register">
        <button type="button" className={css.button__redirect}>
          Register
        </button>
      </NavLink>
      <img
        src={loginImg}
        className={css.helloImg}
        alt="Hello from wallet image"
      />
    </div>
  );
}
