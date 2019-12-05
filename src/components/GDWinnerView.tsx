import React from 'react'
import { GDButton } from './GDButton'
import { makeStyles } from '@material-ui/styles'
import GDText from './GDText'

interface Props {
    tittleResult: string
    labelButton: string
}

const GDWinnerView = ({ tittleResult, labelButton }: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.column}>
            <GDText title={'We have a WINNER'} titleSubtitle={`${tittleResult}` + "is the new EMPEROR"} />
            <div className={classes.button}>
                <GDButton
                    label={labelButton}
                    typeVariant="primary"
                    fullWidth={true}
                    type="submit"
                    onClick={() => {

                    }}
                />
            </div>
        </div>
    )
}

export default GDWinnerView;

const useStyles = makeStyles(theme => ({
    column: {
        display: "flex",
        flexDirection: "column",
        paddingLeft: 10,
    },
    row: {
        display: "flex",
        flexDirection: "row"
    },
    button: {
        maxWidth: 250,
        paddingLeft: 90,
    }
}));