import React from 'react'
import GDScore from './GDScore'
import GDRoundView from './GDRoudView'
import { makeStyles } from '@material-ui/styles'

interface Props {
    options: string[]
    numberRound: number
    labelButton: string
    activePlayer: string
    tittleBoard: string
    scores: { score: number, winner: string }[]
}

const GDUnionRoundScoreView = ({ options, numberRound, labelButton, activePlayer, tittleBoard }: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div>
                <GDRoundView options={options} numberRound={numberRound} labelButton={labelButton} activePlayer={activePlayer} />
            </div>
            <div className={classes.score}>
                <GDScore tittle={tittleBoard} scores={[{ score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }]} />
            </div>
        </div>
    )
}

export default GDUnionRoundScoreView;

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: "row",
        paddingLeft: 10,
        justifyContent: 'center',
    },
    score: {
        paddingLeft: 90
    }
}));