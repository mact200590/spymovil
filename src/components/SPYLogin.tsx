import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SPYText from './SPYText';
import { SPYInput } from './SPYInput'
import { SPYButton } from './SPYButton'
import { ButtonType } from './SPYButton'
import {InputType} from "./SPYInput"

interface Props {
    typeInput?:string
    title: string
    label: string
    fullWidth: boolean,
    placeholderUser?:string
    placeholderPassword:string
    typeVariantButton: ButtonType
    typeVariantInput: InputType
    onClick: (user: string, password: string) => void
}


const SPYLogin = ({typeInput="password", title, label,placeholderUser,placeholderPassword, fullWidth,typeVariantInput, typeVariantButton, onClick }: Props) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <SPYText title={title} />
            <div className={classes.fields}>
                <SPYInput 
                typeVariant={typeVariantInput}
                    value={user}
                    placeholder={placeholderUser}
                    onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setUser(event.target.value)}
                />
                <SPYInput
                    type={typeInput}
                    placeholder={placeholderPassword}
                    value={password}
                    onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setPassword(event.target.value)}
                    typeVariant={typeVariantInput} />
            </div>
            <SPYButton
                title={title}
                label={label}
                fullWidth={fullWidth}
                typeVariant={typeVariantButton}
                onClick={() => { onClick(user, password) }}
            />
        </div>
    )
}
const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center"
    },
    fields: {
        fontSize: 54,
        color: 'white',
        textAlign: 'center',
    }
});


export default SPYLogin;