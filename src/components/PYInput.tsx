import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import React, { useMemo } from "react";

type InputType = "login" | "primary" | "secondary";

type Props = {
  typeVariant: InputType;
} & TextFieldProps;

export const PYInput: React.FC<Props> = ({
  typeVariant,
  required = false,
  ...rest
}) => {
  const variant = useMemo(
    () =>
      ({ login: "outlined", primary: "standard", secondary: "filled" }[
        typeVariant
      ] as any),
    [typeVariant]
  );
  return (
    <TextField
      {...rest}
      variant={variant}
    />
  );
};
