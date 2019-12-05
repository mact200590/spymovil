import React, { useState } from 'react';
import GDText from './GDText';
import GDSelect from './GDSelect';
import { makeStyles } from '@material-ui/styles';
import { PYButton } from './PYButton';

interface Props {
    numberRound: number
    activePlayer: string
    options: string[]
    labelButton: string
    onClick?: (move: string) => void
}

const GDRoundView = ({ numberRound, activePlayer, options, onClick, labelButton }: Props) => {
    const classes = useStyles();
    const [value, setValue] = useState('')
    return (
        <div className={classes.column}>
            <h1>ROUND: {numberRound}</h1>
            <h2>{activePlayer}</h2>
            <div className={classes.row}>
                <p>Select Move</p>
                <GDSelect typeVariant={"primary"} options={options} onChange={setValue as any} />
            </div>
            <PYButton className={classes.button}
                label={labelButton}
                typeVariant="primary"
                fullWidth={false}
                type="submit"
                onClick={() => {
                    console.log("dsfdfsfsdf" + value)
                }}
            />
        </div>
    )
}

export default GDRoundView;

const useStyles = makeStyles(theme => ({
    column: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        paddingLeft: 10
    },
    row: {
        display: "flex",
        flexDirection: "row"
    },
    button: {
        maxWidth: 100,
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10

    }
}));