import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { GDButton } from "./GDButton";
import GDSelect from "./GDSelect";
import Size from "../style/size";

export type GDAddValuesType = "primary" | "secondary";


interface Props {
    textPlaceHolder: string;
    labelButton: string;
    onClick?: (move: string, skills: string) => void;
    typeVariant?: GDAddValuesType;
}

const GDRules = ({
    textPlaceHolder,
    onClick,
    labelButton,
    typeVariant = "primary"
}: Props) => {
    const classes = useStyles();
    const [move, setMove] = useState("Scissors");
    const [kills, setKills] = useState("Scissors");
    
    const arr=['Scissor','Rock','Paper']

    return (
        <div className={classes.container}>
            <GDSelect
                label={"Add move"}
                typeVariant={typeVariant}
                options={arr}  //data && data.movements ? data.movements.map(move => move.name) : []
                onChange={setMove as any}
                styleContainer={{ minWidth: Size.box.base }}
            />
            <GDSelect
                label={'Add kills'}
                typeVariant={typeVariant}
                options={arr}
                onChange={setKills as any}
                styleContainer={{ minWidth: Size.box.base }}
            />

            <GDButton
                className={classes.button}
                label={labelButton}
                typeVariant={typeVariant}
                fullWidth={false}
                type="submit"
                onClick={() => {
                    onClick && onClick(move, kills);
                
                }}
            />
        </div>
    );
};
export default GDRules;

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: "row"
    },
    button: {
        marginTop: 25,
        maxHeight: 35,
        marginLeft: 5
    }
}));
