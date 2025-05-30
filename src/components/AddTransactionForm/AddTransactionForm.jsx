import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { VscChevronDown } from "react-icons/vsc";
import { MdDateRange } from "react-icons/md";
import "./ReactSelect.css";
import s from "./AddTransactionForm.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { addTransaction } from "../../redux/transactions/operations";

// Перемикач типу транзакцій
const IncomeExpenseToggle = ({ field, form }) => {
  const { name, value } = field;
  const { setFieldValue } = form;

  const handleToggle = () => {
    const newValue = value === "income" ? "expense" : "income";
    setFieldValue(name, newValue);

    if (newValue === "income") {
      setFieldValue("category", "Income");
    } else {
      setFieldValue("category", "");
    }
  };

  return (
    <div className={s.toggleContainer}>
      <div className={s.toggleWrapper}>
        <span className={s.toggleLabel}>Income</span>
        <div onClick={handleToggle} className={s.toggleSwitch}>
          <div
            className={`${s.toggleButton} ${
              value === "income" ? s.toggleButtonLeft : s.toggleButtonRight
            }`}
          >
            <span className={s.toggleIcon}>
              {value === "income" ? (
                <AiOutlinePlus className={s.iconComponent} />
              ) : (
                <AiOutlineMinus className={s.iconComponent} />
              )}
            </span>
          </div>
        </div>
        <span className={s.toggleLabel}>Expense</span>
      </div>
    </div>
  );
};

// Стрілка в дропдауні
const CustomDropdownIndicator = (props) => {
  return (
    <VscChevronDown
      size={24}
      color="#081222"
      style={{
        transform: props.selectProps.menuIsOpen
          ? "rotate(180deg)"
          : "rotate(0deg)",
        transition: "transform 0.25s ease"
      }}
    />
  );
};

//Дропдаун
const CustomSelectField = ({ field, form, options, placeholder, ...props }) => {
  const { name, value } = field;
  const { setFieldValue } = form;
  const selectedOption =
    options.find((option) => option.value === value) || null;
  return (
    <Select
      {...props}
      name={name}
      value={selectedOption}
      onChange={(option) => setFieldValue(name, option ? option.value : "")}
      onBlur={() => form.setFieldTouched(name, true)}
      options={options}
      placeholder={placeholder}
      components={{ DropdownIndicator: CustomDropdownIndicator }}
      classNamePrefix="react-select"
    />
  );
};

//Вибір дати
const CustomDatePicker = ({ field, form, ...props }) => {
  const { name, value } = field;
  const { setFieldValue, setFieldTouched } = form;

  const fiveYearsAgo = new Date();
  fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 5);

  return (
    <div className={s.datePickerWrapper}>
      <DatePicker
        {...props}
        selected={value ? new Date(value) : null}
        onChange={(date) => setFieldValue(name, date)}
        onBlur={() => setFieldTouched(name, true)}
        dateFormat="dd.MM.yyyy"
        placeholderText="Select date"
        minDate={fiveYearsAgo}
        maxDate={new Date()}
        showPopperArrow={false}
        className={s.dateInput}
      />
      <MdDateRange className={s.dateIcon} />
    </div>
  );
};

const CustomAmountField = ({ field, form, ...props }) => {
  const { name } = field;
  const { setFieldValue, setFieldTouched } = form;

  const handleAmountInput = (e) => {
    let value = e.target.value;

    value = value.replace(/[^0-9.,]/g, "");

    value = value.replace(",", ".");

    const parts = value.split(".");
    if (parts.length > 2) {
      value = parts[0] + "." + parts.slice(1).join("");
    }

    if (parts[1] && parts[1].length > 2) {
      value = parts[0] + "." + parts[1].substring(0, 2);
    }

    setFieldValue(name, value);
  };

  const handleBlur = () => {
    setFieldTouched(name, true);
  };

  return (
    <input
      {...props}
      type="text"
      value={field.value}
      onInput={handleAmountInput}
      onBlur={handleBlur}
      placeholder="0.00"
    />
  );
};

//Форма додавання транзакції
const AddTransactionForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const categories = useSelector((state) => state.categories.items);
  const categoryOptions = categories.map((item) => ({
    value: item.name,
    label: item.name
  }));

  const initialValues = {
    type: "expense",
    amount: "",
    category: "",
    date: new Date(),
    comment: ""
  };

  const handleSubmit = async (values) => {
    try {
      const result = await dispatch(addTransaction(values));

      if (addTransaction.fulfilled.match(result)) {
        toast.success(result.payload.message);
        onClose();
      } else {
        toast.error(result.payload);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const validationSchema = Yup.object({
    type: Yup.string()
      .required("Transaction type is required")
      .oneOf(["income", "expense"], "Type must be income or expense"),

    amount: Yup.number()
      .required("Amount is required")
      .positive("Amount must be positive")
      .max(1000000, "Amount cannot exceed 1,000,000"),

    category: Yup.string().when("type", {
      is: "expense",
      then: (schema) => schema.required("Category is required for expenses"),
      otherwise: (schema) => schema.notRequired()
    }),

    date: Yup.date()
      .required("Date is required")
      .min(
        new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
        "Date cannot be more than 5 years ago"
      )
      .max(new Date(), "Date cannot be in the future"),

    comment: Yup.string()
      .min(2, "Comment must be at least 2 characters")
      .max(15, "Comment cannot exceed 15 characters")
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values }) => (
          <Form>
            <Field name="type" component={IncomeExpenseToggle} />
            <ErrorMessage
              name="type"
              component="span"
              className={s.errorMessage}
            />
            <div className={s.inputsContainer}>
              {values.type === "expense" && (
                <div>
                  <Field
                    name="category"
                    component={CustomSelectField}
                    options={categoryOptions}
                    placeholder="Category"
                    className={s.selectField}
                  />
                  <ErrorMessage
                    name="category"
                    component="span"
                    className={s.errorMessage}
                  />
                </div>
              )}
              <div className={s.smallContainer}>
                <div>
                  <Field
                    className={s.amountInput}
                    component={CustomAmountField}
                    name="amount"
                  />
                  <ErrorMessage
                    name="amount"
                    component="span"
                    className={s.errorMessage}
                  />
                </div>
                <div>
                  <Field name="date" component={CustomDatePicker} />
                  <ErrorMessage
                    name="date"
                    component="span"
                    className={s.errorMessage}
                  />
                </div>
              </div>
              <div>
                <Field
                  className={s.comment}
                  placeholder="Comment"
                  name="comment"
                />
                <ErrorMessage
                  name="comment"
                  component="span"
                  className={s.errorMessage}
                />
              </div>
            </div>
            <button className={s.submitBtn} type="submit">
              Add
            </button>
          </Form>
        )}
      </Formik>
      <button className={s.closeBtn} onClick={onClose} type="button">
        Cancel
      </button>
    </div>
  );
};

export default AddTransactionForm;
