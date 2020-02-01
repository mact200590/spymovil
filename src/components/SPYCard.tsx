import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import theme from "../style/theme";

interface Plants {
    id: number,
    name: string
}

export interface DataApi {
    id: number,
    name: string,
    chlorine: number,
    ph: number,
    turbidity: number,
    date: string,
    type: Plants
}

interface Props {
    dataApi: DataApi,
}

const SYPCard = ({ dataApi: { id, name, chlorine, ph, turbidity, date, type } }: Props) => {
    const classes = useStyles();
    return (
        <Card className={classes.card} variant="elevation">
            <CardHeader
                className={classes.title}
                title={name}
            >
            </CardHeader>
            <CardContent className={classes.content}>
                <CardContent className={classes.column}>
                    <Typography component="h2">
                        {`Chlorine: ${chlorine}`}
                    </Typography>
                    <Typography component="h2">
                        {`Ph:  ${ph}`}
                    </Typography>
                    <Typography component="h2">
                        {`Turbidity: ${turbidity}`}
                    </Typography>
                </CardContent>

                <CardContent className={classes.column}>
                    <Typography component="h2">
                        {`Date: ${date}`}
                    </Typography>

                    <Typography component="h2">
                        {`Type of plant: ${type.name}`}
                    </Typography>
                </CardContent>
            </CardContent>
        </Card>
    )
}

const useStyles = makeStyles({
    card: {
        minWidth: "100%",
    },
    title: {
        fontSize: 14,
        fontFamily: "Arial",
        color: 'white',
        textAlign: 'center',
        maxHeight: "10px",
        backgroundColor: theme.palette.primary.main
    },
    content: {
        fontSize: 24,
        textAlign: 'left',
        display: "flex",
        flexDirection: "row"
    },
    typography: {
        fontFamily: "Arial",
        fontWeight: "bolder"
    },
    column: {
        display: "flex",
        flexDirection: "column"
    }
});


export default SYPCard;