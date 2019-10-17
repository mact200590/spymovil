import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { PYSpinner } from "../../components/PYSpinner";
import {
  useFetchPedidosYaApiTest,
  useFetchPedidosYaApiTestLazy
} from "../../hooks/fetch";
import SignInForm from "./SignInForm";
import { useSnackbar } from "notistack";
import { Redirect } from "react-router";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Correo no válido")
    .required("Correo necesario")
    .label("email"),

  password: yup.string().required("Contraseña necesaria")
});

export default function SignIn() {
  const { enqueueSnackbar } = useSnackbar();
  const { isLoading, error: ErrorAppToken } = useFetchPedidosYaApiTest(
    {
      pathApi: "/tokens/app",
      params: {
        clientId: "test",
        clientSecret: "PeY@@Tr1v1@943"
      }
    },
    []
  );
  const {
    trigger,
    data,
    error: ErrorSignIn,
    clearError: clearErrorSignIn,
    isLoading: isLoadingSignIn
  } = useFetchPedidosYaApiTestLazy();
  const { getFieldProps, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values, bag) => {
      trigger({
        pathApi: "/tokens/user",
        params: {
          userName: values.email,
          password: values.password
        }
      });
    }
  });
  const [email, metadataEmail] = getFieldProps("email", "text");
  const [password, metadataPassword] = getFieldProps("password", "text");

  const notifyInvalidCredentials = (ErrorSignIn: any) => {
    enqueueSnackbar("Sus credenciales no son válidas", { key: ErrorSignIn.code,variant: "error" , preventDuplicate: true});
    clearErrorSignIn();
  };

  const notifyLoggedSuccess = () => {
    enqueueSnackbar("Bienvenido a pedidosYa", { variant: "success", });
  };

  if (isLoading) return <PYSpinner />;
  if (ErrorSignIn) notifyInvalidCredentials(ErrorSignIn);
  if (data) {
    notifyLoggedSuccess();
    return <Redirect to={"/restaurants"}/>
  }

  return (
    <SignInForm
      handleSubmit={handleSubmit}
      email={[email, metadataEmail]}
      password={[password, metadataPassword]}
    />
  );
}
