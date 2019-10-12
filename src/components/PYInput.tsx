import { FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import React, { useMemo } from "react";

type InputType = "login" | "primary" | "secondary";

type Props = {
  typeVariant: InputType;
  error?: string;
} & PYInputProps;

export type PYInputProps = Omit<TextFieldProps, "error">;

export const PYInput: React.FC<Props> = ({
  typeVariant,
  required = false,
  error,
  ...rest
}) => {
  const classes = useStyles();
  const variant = useMemo(
    () =>
      ({ login: "outlined", primary: "standard", secondary: "filled" }[
        typeVariant
      ] as any),
    [typeVariant]
  );
  return (
    <div>
      <TextField error={error ? true : false} {...rest} variant={variant} />
      <FormHelperText className={classes.error} id="component-error-text">{error}</FormHelperText>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  error: {
    color: theme.palette.error.main,
    width: "100%",
    textAlign: "left"
  }
}));
