import React from 'react'
import { makeStyles } from '@material-ui/styles';
import GDSelect from './GDSelect';
import { SelectType } from './GDSelect'

interface Props {
  namePlayer: string
  typeVariant: SelectType;
  options: string[];
  onChange?: ((value: string) => void) | undefined;
}

const GDPlayer = ({ namePlayer, typeVariant, options, onChange }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p className={classes.textPlayer}>{namePlayer}</p>
      <GDSelect typeVariant={typeVariant} options={options} onChange={onChange as any} />
    </div>
  )
}

export default GDPlayer;

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textPlayer: {
    fontFamily: "sans-serif",
    fontSize: 25,
    marginRight:25
  }

}));
