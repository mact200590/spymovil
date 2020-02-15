import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select, { SelectProps } from "@material-ui/core/Select";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React, { useMemo } from "react";

export type SelectType = "primary" | "secondary";

type Props = {
  label?: string;
  defaultValue?: string;
  typeVariant: SelectType;
  fullWidth?: boolean;
  options: string[];
  onChange?: ((value: string) => void) | undefined;
  styleContainer?: React.CSSProperties | undefined;
} & SelectProps;

const SPYSelect = ({
  label,
  typeVariant,
  fullWidth,
  options,
  onChange,
  styleContainer,
  defaultValue = ""
}: Props) => {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(defaultValue);
  const variant = useMemo(
    () => ({ primary: "standard", secondary: "outlined" }[typeVariant] as any),
    [typeVariant]
  );
  React.useEffect(() => {
    onChange && onChange(selected);
  }, [selected, onChange]);
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelected(event.target.value as string);
  };

  return (
    <FormControl
      style={{ ...styleContainer, marginLeft: "0px", marginRight: "0px" }}
      variant={variant}
      className={classes.formControl}
      fullWidth={fullWidth || false}
    >
      {label && <InputLabel>{label}</InputLabel>}
      <Select value={selected} onChange={handleChange}>
        {options.map((item, i) => (
          <MenuItem key={i} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const useStyles = makeStyles(theme =>
  createStyles({
    formControl: {
      margin: theme.spacing(0),
      minWidth: 120
    }
  })
);

export default SPYSelect;
