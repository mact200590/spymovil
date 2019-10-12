import { Button } from "@material-ui/core";
import { ButtonBaseProps } from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";
import React, { useMemo } from "react";

type ButtonType = "primary" | "secondary";

type Props = {
  label: string;
  typeVariant: ButtonType;
  fullWidth: boolean;
} & ButtonBaseProps;

export const PYButton: React.FC<Props> = ({
  label,
  typeVariant,
  fullWidth,
  ...rest
}) => {
  const classes = useStyles();
  const variant = useMemo(
    () => ({ primary: "contained", secondary: "outlined" }[typeVariant] as any),
    [typeVariant]
  );
  console.log(classes);
  return (
    <Button
      type="submit"
      {...rest}
      fullWidth
      variant={variant}
      color="primary"
      className={classes.primary}
    >
      {label}
    </Button>
  );
};

const useStyles = makeStyles((theme: any) => (
   {
    primary: {
      color: theme.palette.primary
    },
    secondary: {
      color: theme.palette.primary
    }
  }
));
