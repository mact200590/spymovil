import { useFormik } from "formik";
import React from "react";
import { PYSpinner } from "../../components/PYSpinner";
import { useFetchPedidosYaApiTest } from "../../hooks/fetch";
import SignInForm from "./SignInForm";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Correo no válido")
    .required("Correo necesario")
    .label("email"),

  password: yup.string().required("Contraseña necesaria")
});

export default function SignIn() {
  const { isLoading, error } = useFetchPedidosYaApiTest({
    pathApi: "/tokens/app",
    params: {
      clientId: "test",
      clientSecret: "PeY@@Tr1v1@943"
    }
  });
  
  const { getFieldProps, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: validationSchema,
    // validate: values => {
    //   const err: any = {};
    //   const message = "Campo obligatório";
    //   if (!values.email) err.email = message;
    //   if (!values.password) err.password = message;
    //   return err;
    // },
    onSubmit: (values, bag) => {}
  });
  const [email, metadataEmail] = getFieldProps("email", "text");
  const [password, metadataPassword] = getFieldProps("password", "text");

  if (isLoading) return <PYSpinner />;

  return (
    <SignInForm
      handleSubmit={handleSubmit}
      email={[email, metadataEmail]}
      password={[password, metadataPassword]}
    />
  );
}
