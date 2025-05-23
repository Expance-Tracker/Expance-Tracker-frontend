import s from "./AddTransactionForm.module.css";
import { Formik, Form, Field } from "formik";

const AddTransactionForm = ({ onClose }) => {
  const initialValues = {
    type: "expense",
    amount: 0,
    category: "",
    date: "",
    comment: ""
  };

  return (
    <div>
      <Formik>
        <Form>
          <Field type="checkbox"></Field>
          <Field as="select"></Field>
          <Field type="number"></Field>
          <Field type="date"></Field>
          <Field></Field>
          <button type="submit">Add</button>
        </Form>
      </Formik>
      <button onClick={onClose} type="button">
        Cancel
      </button>
    </div>
  );
};

export default AddTransactionForm;
