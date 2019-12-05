import React from 'react'
import GDScore from './GDScore'
import GDRoundView from './GDRoudView'
import { makeStyles } from '@material-ui/styles'

interface Props {

}




const GDUnionRoundScoreView = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div>
                <GDRoundView options={['Scissors', 'Rock', 'Paper']} numberRound={10} labelButton={'OK'} activePlayer="ALEJANDRO" />
            </div>
            <div className={classes.score}>
                <GDScore tittle={'Score'} scores={[{ score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }, { score: 1, winner: "Alejandro" }]} />
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
        justifyContent:'center',
        marginTop:30
        //backgroundColor: 'red'
    },
    score: {
        // backgroundColor:'green',
        paddingLeft: 90
    }
}));