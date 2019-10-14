import React from "react";
import { useFormik } from "formik";
import SignInForm from "./SignInForm";

export default function SignIn() {
  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validate: values => {
      const err: any = {};
      const message = "Campo obligatório";
      if (!values.email) err.email = message;
      if (!values.password) err.password = message;
      return err;
    },
    onSubmit: (values, bag) => {
      console.log("login")
    }
  });
  const [email, metadataEmail] = getFieldProps("email", "text");
  const [password, metadataPassword] = getFieldProps("password", "text");

  return (
    <SignInForm
      handleSubmit={handleSubmit}
      email={[email, metadataEmail]}
      password={[password, metadataPassword]}
    />
  );
}
