import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { useFetchSPYAuth } from "../hooks/auth";
import { SPYButton } from "./SPYButton";
import { SPYInput } from "./SPYInput";
import { SPYSpinner } from "./SPYSpinner";
import SPYText from "./SPYText";

interface Props {
  onClick: (user: string, password: string) => void;
}

const SPYLogin = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const { loading, error, data, auth } = useFetchSPYAuth();

  return (
    <div className={classes.container}>
      {loading && (
        <div className={classes.center}>
          <SPYSpinner />
        </div>
      )}
      <SPYText title={"Sign in"} />

      <div className={classes.fields}>
        <SPYInput
          typeVariant={"login"}
          value={user}
          placeholder={"User"}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setUser(event.target.value)}
        />
        <SPYInput
          type={"password"}
          placeholder={"Password"}
          value={password}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setPassword(event.target.value)}
          typeVariant={"login"}
        />
      </div>
      <SPYButton
        label={"Login"}
        fullWidth={false}
        typeVariant={"primary"}
        onClick={() => {
          auth({ user, password });
        }}
      />
      {error && <p className={classes.error}>{error}</p>}
    </div>
  );
};
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  },
  fields: {
    fontSize: 54,
    color: "white",
    textAlign: "center"
  },
  error: {
    color: "red",
    textAlign: "center",
    fontSize: 14
  },
  center: { textAlign: "center" }
});

export default SPYLogin;
