import { ErrorMessage, Field, Form, Formik, validateYupSchema } from "formik";
import css from "./LoginForm.module.css";
import walletIcon from "../../assets/walletIcon.svg";
import loginImg from "../../assets/loginImg.svg";
import emailIcon from "../../assets/email.svg";
import lockIcon from "../../assets/lock.svg";
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
              <img
                src={emailIcon}
                className={css.field__icon}
                alt="Email icon"
              />
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
              <img
                src={lockIcon}
                className={css.field__icon}
                alt="Email icon"
              />
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
