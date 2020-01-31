import { FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import React, { useMemo } from "react";

export type InputType = "login" | "primary" | "secondary";

type Props = {
  typeVariant: InputType;
  error?: string;
  classNameContainer?: string;
} & GDInputProps;

export type GDInputProps = Omit<TextFieldProps, "error">;

export const SPYInput: React.FC<Props> = ({
  typeVariant,
  required = false,
  error,
  classNameContainer,
  onChange,
  value,
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
    <div className={classes.classNameContainer}>
      <TextField error={error ? true : false} {...rest} variant={variant} onChange={onChange}  value={value}/>
      <FormHelperText className={classes.error} id="component-error-text">{error}</FormHelperText>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  error: {
    color: theme.palette.error.main,
    width: "100%",
    textAlign: "left"
  },
  classNameContainer:{
    margin:"5px"
  }
}));
