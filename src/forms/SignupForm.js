import React from "react";
import DropList from "./DropList";
import { withFormik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import Error from "./Error";

const formikWrapper = withFormik({
  mapPropsToValues: () => ({
    username: "",
    email: "",
    topics: [],
  }),
  handleSubmit: (values, { setSubmitting }) => {
    const payload = {
      ...values,
      topics: values.topics.map((topic) => topic.value),
    };
    setTimeout(() => {
      alert(JSON.stringify(payload, null, 2));
      setSubmitting(false);
    }, 5000);
  },

  validationSchema: Yup.object({
    username: Yup.string().required("Required").max(15, "must be 15 char"),
    email: Yup.string().email("Invalid email address").required("Required"),
    topics: Yup.array().min(1, "must choose at least 1 option "),
  }),
});

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const SignupForm = (props) => {
  const {
    values,
    setFieldValue,
    setFieldTouched,
    handleReset,
    isSubmitting,
    dirty,
  } = props;
  return (
    <Form className="p-5">
      <h1>Sign up form</h1>
      <div className="form-group">
        <label htmlFor="">User name:</label>
        <Field
          className="form-control"
          type="text"
          name="username"
          placeholder="Enter username"
        />
        <ErrorMessage component={Error} name="username" />
      </div>
      <div className="form-group">
        <label htmlFor="">Email</label>
        <Field
          className="form-control"
          type="email"
          name="email"
          placeholder="Enter email"
        />
        <ErrorMessage component={Error} name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="">Favourite List</label>
        <DropList
          value={values.topics}
          onChange={setFieldValue}
          onBlur={setFieldTouched}
          options={options}
        />
        <ErrorMessage component={Error} name="topics" />
      </div>
      <div className="form-group mt-1">
        <span className="p-1 ">
          <button
            onClick={handleReset}
            className="btn btn-secondary"
            disabled={!dirty || isSubmitting}
          >
            Reset
          </button>
        </span>
        <span className="p-1">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </span>
      </div>
    </Form>
  );
};

const enhancedFrom = formikWrapper(SignupForm);
export default enhancedFrom;
