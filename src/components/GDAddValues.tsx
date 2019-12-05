import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import { GDInput } from './GDInput'
import {GDButton }  from './GDButton';


interface Props {
    textPlaceHolder: string;
    labelButton: string
    onClick?: (value: string) => void;
}


const GDAddValues = ({ textPlaceHolder, onClick, labelButton }: Props) => {
    const classes = useStyles();
    const [value, setValue] = useState('');
    const handleOnchange = (e: any) => {
        setValue(e.target.value)
    }
    return (
        <div className={classes.container}>
            <GDInput
                typeVariant="primary"
                margin="normal"
                fullWidth={false}
                label={textPlaceHolder}
                autoFocus
                value={value}
                onChange={handleOnchange}

            />
            <GDButton className={classes.button}
                label={labelButton}
                typeVariant="primary"
                fullWidth={false}
                type="submit"
                onClick={() => {
                    onClick && onClick(value)
                    setValue("");
                }}
            />
        </div>
    )
}
export default GDAddValues;



const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: "row",
    },
    button: {
        marginTop: 25,
        maxHeight: 35,
        marginLeft: 5
    }
}));