import { Button } from "@material-ui/core";
import { ButtonBaseProps } from "@material-ui/core/ButtonBase";
import React, { useMemo } from "react";

type ButtonType = "primary" | "secondary";

type Props = {
  label: string;
  typeVariant: ButtonType;
  fullWidth: boolean;
} & ButtonBaseProps;

export const SPYButton: React.FC<Props> = ({
  label,
  typeVariant,
  fullWidth,
  ...rest
}) => {
  const variant = useMemo(
    () => ({ primary: "contained", secondary: "outlined" }[typeVariant] as any),
    [typeVariant]
  );
  return (
    <Button
      fullWidth={fullWidth}
      variant={variant}
      {...rest}
      color="primary"
    >
      {label}
    </Button>
  );
};

