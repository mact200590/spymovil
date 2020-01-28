import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { GDInput } from './SPYInput';
import GDText from './SPYText'
import { GDButton } from './SPYButton'
import GDSelect from './SPYSelect'

const phScale = [
    "Very acid",
    "Moderately acidic",
    "Slightly acidic",
    "Neutral",
    "Slightly alkaline",
    "Moderately alkaline",
    "Very alkaline"
]
interface Props{
    onClick:()=>void
}

const SPYFilters = ({onClick}:Props) => {
    const classes = useStyles();

const [name,setName]=useState('');
const [chlorine,setChlorine]=useState('')
const [turbidity,setTurbidity]=useState('')
const [date,setDate]=useState('')
const [type,setType]=useState('')
const [select,setSelect]=useState('')


    return (
        <div className={classes.container}>
            <GDText  title={'Filters'} />
            <div className={classes.filters}>
                <GDInput
                    typeVariant="primary"
                    placeholder="Name"
                    label="Name"
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{setName(event.target.value)}}
                />
                <GDInput
                    typeVariant="primary"
                    placeholder="Chlorine"
                    label="Chlorine"
                    value={chlorine}
                    onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{setChlorine(event.target.value)}}
                />
                <GDInput
                    typeVariant="primary"
                    placeholder="Turbidity"
                    label="Turbidity"
                    value={turbidity}
                    onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{setTurbidity(event.target.value)}}
                />
                <GDInput
                    typeVariant="primary"
                    placeholder="Date"
                    label="Date"
                    value={date}
                    onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{setDate(event.target.value)}}
                />
                <GDInput
                    typeVariant="primary"
                    placeholder="Type"
                    label="Type"
                    value={type}
                    onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{setType(event.target.value)}}
                />
                    <GDSelect className={classes.select}
                    typeVariant={"primary"}
                    options={phScale}
                    value={select}
                    onChange={(value: any)=>{ 
                      setSelect(value)
                      console.log(select)
                    }}
                />
                 <GDButton label={'Filter'} typeVariant={'primary'} fullWidth={false}  onClick={onClick}/>
            </div>
           
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    filters: {
        display: "flex",
        flexDirection: "row",
        marginBottom:"5px",
        marginTop:"-50px",

    },
    select: {
     paddingTop:"125px",
     backgroundColor:"blue"
    }
}));

export default SPYFilters;