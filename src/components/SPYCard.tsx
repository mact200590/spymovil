import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';


interface Plants {
    id: number,
    name: string
}

interface DataApi {
    id: number,
    name: string,
    chlorine: number,
    ph: number,
    turbidity: number,
    date: string,
    type: Plants
}

const SYPCard = ({id, name, chlorine, ph, turbidity, date, type }: DataApi) => {
    const classes = useStyles();
    return (
        <Card className={classes.card} variant="elevation">
        <CardHeader className={classes.title}
        title={name}>
            </CardHeader>
            <CardContent className={classes.content}>
                <Typography variant="h5" component="h2">
                { `Chlorine: ${chlorine}`}
                </Typography>
                <Typography variant="h5" component="h2">
                    {`Ph: ${ph}`}
                </Typography>
                <Typography variant="h5" component="h2">
                    {`Turbidity: ${turbidity}`}
                </Typography>
                <Typography variant="h5" component="h2">
                    {`Date: ${date}`}
                </Typography>
                <Typography variant="h5" component="h4">
                 {`Type of plant: ${type.name}`}
                </Typography>
            </CardContent>
        </Card>
    )
}

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    title: {
        fontSize: 54,
        color: 'white', 
        textAlign:'center',
        backgroundColor:'blue'
    },
    content: {
        fontSize: 24, 
        textAlign:'left'
    }
});


export default SYPCard;