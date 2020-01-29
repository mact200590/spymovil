import React from 'react'
import { makeStyles } from '@material-ui/styles';

interface Props {
    title: string;
    titleSubtitle?: string;
}

const SPYText = ({ title, titleSubtitle }: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <p className={classes.title}>{title}</p>
           {titleSubtitle &&<p className={classes.titleSubtitle}>{titleSubtitle}</p>}
        </div>
    )
}

export default SPYText;

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: "column",
    },
    title: {
        fontFamily: "Times New Roman",
        fontSize: 40,
    },
    titleSubtitle: {
        fontFamily: "Times New Roman",
        fontSize: 20,
        paddingLeft: 20,
    }
}));
