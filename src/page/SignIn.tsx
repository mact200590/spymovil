import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useFormik } from "formik";
import React from "react";
import logo from "../asserts/logo.png";
import { Copyright } from "../components/Copyright";
import { PYButton } from "../components/PYButton";
import { PYInput } from "../components/PYInput";

export default function SignIn() {
  const classes = useStyles();
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
    }
  });
  const [email, metadataEmail] = getFieldProps("email", "text");
  const [password, metadataPassword] = getFieldProps("password", "text");

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar src={logo}></Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <PYInput
            typeVariant="login"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            {...email}
            autoComplete="email"
            autoFocus
            error={
              metadataEmail.touch && metadataEmail.error
                ? metadataEmail.error
                : undefined
            }
          />
          <div className={classes.password}>
            <PYInput
              typeVariant="login"
              required
              fullWidth
              {...password}
              label="Password"
              id="password"
              type="password"
              autoComplete="current-password"
              error={
                metadataPassword.touch && metadataPassword.error
                  ? metadataPassword.error
                  : undefined
              }
            />
          </div>
          <div className={classes.remember}>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordar me"
            />
          </div>

          <PYButton
            label="Registrar"
            typeVariant="primary"
            fullWidth
            type="submit"
          />
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(2)
  },
  password: {
    marginTop: theme.spacing(2)
  },
  remember: {
    width: "100%",
    textAlign: "center"
  }
}));
