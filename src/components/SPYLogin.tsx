import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SPYText from './SPYText';
import { SPYInput } from './SPYInput'
import { SPYButton } from './SPYButton'
import { ButtonType } from './SPYButton'

interface Props {
    title: string
    label: string
    fullWidth: boolean
    typeVariant: ButtonType;
    onClick: (user: string, password: string) => void
}


const SPYLogin = ({ title, label, fullWidth, typeVariant, onClick }: Props) => {
    const [user,setUser]=useState('');
    const [password,setPassword]=useState('');

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <SPYText title={title} />
            <div className={classes.fields}>
                <SPYInput typeVariant={'login'} 
                  value={user}
                  onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>setUser(event.target.value)}
                />
                <SPYInput 
                type={"password"}
                value={password}
                onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>setPassword(event.target.value)}
                typeVariant={'login'} />
            </div>
            <SPYButton 
                  title={title} 
                  label={label} 
                  fullWidth={fullWidth} 
                  typeVariant={typeVariant}
                  onClick={()=>{onClick(user,password)}}
                />
        </div>
    )
}
const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        textAlign:"center"
    },
    fields: {
        fontSize: 54,
        color: 'white',
        textAlign: 'center',
    },
    content: {
        fontSize: 24,
        textAlign: 'left'
    }
});


export default SPYLogin;