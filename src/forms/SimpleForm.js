import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SimpleForm = () => {
  // Initial values for the form fields
  const initialValues = {
    name: "",
  };

  // const [isSubmitting, setSubmitting] = useState();
  // UI
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        console.log("form values ", values);
        setTimeout(() => {
          setSubmitting(false);
        }, 5000);
      }}
      validate={(values) => {
        let errors = {};

        //check if name doesnt exists
        if (!values.name) {
          errors.name = "Please enter the correct name";
        }

        return errors;
      }}
    >
      {({ values, errors, touched, isSubmitting }) => (
        <Form>
          <Field type="text" name="name" placeholder="enter your name" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          {/* //if error exists then show this error message */}
          <ErrorMessage name="name" component="div" style={{ color: "red" }} />
        </Form>
      )}
    </Formik>
  );
};

export default SimpleForm;
