import React from 'react'
import { makeStyles } from '@material-ui/styles';

interface Props {
    scores: { score: number, winner: string }[];
    tittle: string
}

const GDScore = ({ scores, tittle }: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <h1>{tittle}</h1>
            <div className={classes.row}>
                <p className={classes.round}>Round</p>
                <p className={classes.winner}>Winner</p>
            </div>
            {scores.map((score) =>
                <div className={classes.row} >
                    <p className={classes.score}> {score.score}</p>
                    <p className={classes.winner}>{score.winner}</p>
                </div>
            )}
        </div>
    )
}

export default GDScore;

const useStyles = makeStyles(theme => ({
    mainContainer: {
        display: "flex",
        flexDirection: "column",
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    column: {
        display: 'flex',
        flexDirection: 'column'
    },
    score: {
        marginRight: 70
    },
    round: {
        marginRight: 35
    },
    winner: {
        fontFamily: 'sans-serif'
    }
}));
