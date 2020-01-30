import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SPYText from './SPYText';
import { SPYInput } from './SPYInput'
import { SPYButton } from './SPYButton'

interface Props {
    onClick: (user: string, password: string) => void
}

const SPYLogin = ({ onClick }: Props) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <SPYText title={"Iniciar sección"} />
            <div className={classes.fields}>
                <SPYInput
                    typeVariant={"login"}
                    value={user}
                    placeholder={"Usuario"}
                    onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setUser(event.target.value)}
                />
                <SPYInput
                    type={"password"}
                    placeholder={"Contraseña"}
                    value={password}
                    onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setPassword(event.target.value)}
                    typeVariant={"login"} />
            </div>
            <SPYButton
                label={"Entrar"}
                fullWidth={false}
                typeVariant={"primary"}
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