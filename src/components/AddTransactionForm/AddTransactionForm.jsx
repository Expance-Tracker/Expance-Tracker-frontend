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
          <Field type="checkbox" name="type"></Field>
          <div className={s.inputsContainer}>
            <Field as="select" name="category">
              <option value="">Category</option>
              <option value="Main expenses">Main expenses</option>
              <option value="Products">Products</option>
              <option value="Car">Car</option>
              <option value="Self care">Self care</option>
              <option value="Child care">Child care</option>
              <option value="Household products">Household products</option>
              <option value="Education">Education</option>
              <option value="Leisure">Leisure</option>
            </Field>
            <div className={s.smallContainer}>
              <Field
                className={s.amountInput}
                type="number"
                name="amount"
                placeholder="0.00"
              ></Field>
              <Field className={s.dateInput} type="date" name="date"></Field>
            </div>
            <Field
              className={s.comment}
              placeholder="Comment"
              name="comment"
            ></Field>
          </div>
          <button className={s.submitBtn} type="submit">
            Add
          </button>
        </Form>
      </Formik>
      <button className={s.closeBtn} onClick={onClose} type="button">
        Cancel
      </button>
    </div>
  );
};

export default AddTransactionForm;
