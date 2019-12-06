import React from 'react'
import GDAddValues from '../components/GDAddValues'
import { makeStyles } from '@material-ui/styles';
import GDRules from '../components/GDRules';
import { Typography, Theme } from '@material-ui/core';


interface Props {
    // addMove?: (value: string) => void | undefined
    addRule?: (move: string, skills: string) => void | undefined
    onClick?: (value: string) => void;
}
const GDConfiguration = ({ addRule, onClick }: Props) => {
    const classes = useStyles();
    //TODO: Here do something and tell to your father 
    onClick = (value) => {
        console.log(`Insert this value in the BD and tell to your DAD ${value}`)
    }
    //TODO: Here add the rule to the BD and print it
    addRule = (move, skills) => {
        console.log(`Print this and add to BD , also tell to your DAD ${move} ${skills}`)
    }

    return (
        <div className={classes.mainContainer}>
            <Typography variant="h2" color={"textPrimary"} align="center" className={classes.tittle}>
                Configuration
            </Typography>
            {/* <div className={classes.container}> */}
            <div className={classes.row}>
                <div className={classes.column}>
                    <Typography variant="h4" color={"textPrimary"} align="center">
                        Add Rule
                    </Typography>
                    <GDRules labelButton={'ADD'} typeVariant={'primary'} onClick={addRule} textPlaceHolder={'Add Move'} />
                </div>
                <div className={classes.column}>
                    <Typography variant="h4" color={"textPrimary"} align="center">
                        Add Move
                     </Typography>
                    <GDAddValues labelButton={"ADD"} typeVariant={'primary'} onClick={onClick} textPlaceHolder={'Add Move'} />
                </div>
            </div>
        </div>
    )
}

export default GDConfiguration;

const useStyles = makeStyles((theme: Theme) => ({
    mainContainer: {
        display: "flex",
        flexDirection: "column",
    },
    row: {
        display: "flex",
        flexDirection: "row"
    },
    column: {
        display: "flex",
        flexDirection: "column",
    },
    tittle:{
        paddingBottom:theme.spacing(12)
    }
}));
