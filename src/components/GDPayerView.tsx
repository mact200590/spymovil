import React, { useState } from 'react'
import GDtext from './GDText'
import GDPlayer from './GDPlayer'
import { PYButton } from './PYButton'
import { makeStyles } from "@material-ui/core/styles";
import GDAddValues from './GDAddValues';

interface Props {
  onClick?: (player1: string, player2: string) => void;
}

const GPPlayerView = ({ onClick }: Props) => {
  const classes = useStyles();
  const [valuePlayer1, setValuePlayer1] = useState('')
  const [valuePlayer2, setValuePlayer2] = useState('')

  return (
    <div className={classes.row}>
      <div className={classes.column}>
        <GDtext title={"Enter Player's Name "} />
        <div className={classes.center}>
          <GDPlayer namePlayer={'Payer 1'} onChange={setValuePlayer1} options={['Scissors', 'Paper', 'Rock']} typeVariant={'primary'} />
          <GDPlayer namePlayer={'Payer 2'} onChange={setValuePlayer2} options={['Scissors', 'Paper', 'Rock']} typeVariant={'primary'} />

          <PYButton className={classes.mainButton}
            label="Start"
            typeVariant="primary"
            fullWidth={true}
            type="submit"
            onClick={() => {
              console.log("Value Player", valuePlayer1, valuePlayer2)
            }}
          />
        </div>
      </div>
      <div className={classes.button}>
        <GDAddValues labelButton='Add player' textPlaceHolder={"Add Player"} onClick={() => console.log("Imprime en la BD")} />
      </div>
    </div>
  )
}

export default GPPlayerView;

const useStyles = makeStyles(theme => ({
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center'
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  center: {
    paddingLeft: 45
  },
  mainButton: {
    maxWidth: 240,
    marginLeft: 10
  },
  button: {
    paddingTop: 150,
  }
}));