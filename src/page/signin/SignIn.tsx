import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import React, { useEffect } from "react";
import { Redirect } from "react-router";
import * as yup from "yup";
import { PYSpinner } from "../../components/PYSpinner";
import { useAuth } from "../../hooks/auth";
import { useFetchPedidosYaApiTestLazy } from "../../hooks/fetch";
import SignInForm from "./SignInForm";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Correo no válido")
    .required("Correo necesario")
    .label("email"),

  password: yup.string().required("Contraseña necesaria")
});

export default function SignIn() {
  const [{ auth, isUserLogged, isAppRegistered }, saveAuth] = useAuth();
  const { enqueueSnackbar: notify } = useSnackbar();
  const {
    trigger: registerApp,
    data: dataApp,
    error: errorApp,
    clearError: clearErrorApp,
    isLoading: isLoadingApp
  } = useFetchPedidosYaApiTestLazy();
  const {
    trigger: signIn,
    data: dataSignIn,
    error: errorSignIn,
    clearError: clearErrorSignIn
  } = useFetchPedidosYaApiTestLazy();
  const { getFieldProps, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values, bag) => {
      signIn({
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
  useEffect(() => {
    if (dataApp) saveAuth(dataApp);
  }, [dataApp]);
  useEffect(() => {
    if (dataSignIn) saveAuth(dataSignIn);
  }, [dataSignIn]);
  useEffect(() => {
    if (isAppRegistered === false && isUserLogged === false)
      registerApp({
        pathApi: "/tokens/app",
        params: {
          clientId: "test",
          clientSecret: "PeY@@Tr1v1@943"
        }
      });
  }, []);
  const notifyInvalidCredentials = (error: any) => {
    notify("Sus credenciales no son válidas", {
      key: error.code,
      variant: "error",
      preventDuplicate: true
    });
    clearErrorSignIn();
  };

  const notifyAppError = (error: any) => {
    notify(
      "Se a producido un error registrando su app, póngase en contacto con el proveedor del servicio",
      { key: error.code, variant: "error", preventDuplicate: true }
    );
    clearErrorApp();
  };

  const notifyLoggedSuccess = () => {
    notify("Bienvenido a pedidosYa", {
      key: "Bienvenido a pedidosYa",
      variant: "success",
      preventDuplicate: true
    });
  };

  if (isUserLogged) {
    return <Redirect to={"/restaurants"} />;
  }
  if (isLoadingApp) return <PYSpinner />;
  if (errorApp) notifyAppError(errorApp);

  if (errorSignIn) notifyInvalidCredentials(errorSignIn);
  if (auth && auth.tokenType === "user") {
    return <Redirect to={"/restaurants"} />;
  }

  return (
    <SignInForm
      handleSubmit={handleSubmit}
      email={[email, metadataEmail]}
      password={[password, metadataPassword]}
    />
  );
}
