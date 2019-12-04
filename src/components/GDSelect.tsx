import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select, { SelectProps } from "@material-ui/core/Select";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { useMemo } from "react";

export type SelectType = "primary" | "secondary";

type Props = {
  label?: string;
  typeVariant: SelectType;
  fullWidth?: boolean;
  options: string[];
  onChange?: ((value: string) => void) | undefined;
  styleContainer?: React.CSSProperties | undefined;
} & SelectProps;

const GDSelect = ({
  label,
  typeVariant,
  fullWidth,
  options,
  onChange,
  styleContainer
}: Props) => {
  const classes = useStyles();
  const [selected, setSelected] = React.useState("");
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
    <div>
      <FormControl
        style={styleContainer}
        variant={variant}
        className={classes.formControl}
        fullWidth={fullWidth || false}
      >
        {label && <InputLabel>{label}</InputLabel>}
        <Select value={selected} onChange={handleChange}>
          {options.map((item, i) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  })
);

export default GDSelect;
