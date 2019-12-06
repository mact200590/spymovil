import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { GDButton } from "./GDButton";
import { GDInput } from "./GDInput";

export type GDAddValuesType = "primary" | "secondary";
interface Props {
    textPlaceHolder: string;
    labelButton: string;
    onClick?: (move: string, skills:string ) => void;
    typeVariant?: GDAddValuesType;

}

const GDRules = ({
    textPlaceHolder,
    onClick,
    labelButton,
    typeVariant = "primary"
}: Props) => {
    const classes = useStyles();
    const [move, setMove] = useState("");
    const [kills, setKills] = useState("");

    const handleOnchangeMove = (e: any) => {
        setMove(e.target.value);
    };


    const handleOnchangeKills = (e: any) => {
        setKills(e.target.value);
    };

    return (
        <div className={classes.container}>
            <GDInput
                typeVariant={typeVariant}
                margin="normal"
                fullWidth={false}
                label={textPlaceHolder}
                autoFocus
                value={move}
                onChange={handleOnchangeMove}
            />
            <GDInput
                typeVariant={typeVariant}
                margin="normal"
                fullWidth={false}
                label={textPlaceHolder}
                autoFocus
                value={kills}
                onChange={handleOnchangeKills}
            />

            <GDButton
                className={classes.button}
                label={labelButton}
                typeVariant={typeVariant}
                fullWidth={false}
                type="submit"
                onClick={() => {
                    onClick && onClick(move,kills);
                    console.log(`Print this ${move} `)
                    console.log(`Print this ${kills} `)
                    setMove("");
                    setKills("");
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
