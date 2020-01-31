import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core';
import { SPYInput } from './SPYInput';
import { SPYButton } from './SPYButton'
import SPYSelect from './SPYSelect'
import SPYText from './SPYText'
import { FIELDS_API } from '../utils/constant'
import { TURBIDITY_OF_WATER } from '../utils/constant'
import SPYDateSelector from './SPYDateSelector'
import theme from "../style/theme"


interface Props {
    onClick: (name: string, chlorine: string, turbidity: string, date: string, type: string, selectPh: string) => void
    onClickClear: () => void
}

const SPYFilters = ({ onClickClear, onClick }: Props) => {
    const classes = useStyles();

    const [name, setName] = useState('');
    const [chlorine, setChlorine] = useState('')
    const [turbidity, setTurbidity] = useState('')
    const [date, setDate] = useState('')
    const [type, setType] = useState('')
    const [selectPh, setSelectPh] = useState('')

    const handleOnchangeName = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setName(event.target.value)
    },[setName])

    const handleOnchangeChlorine =useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setChlorine(event.target.value)
    },[setChlorine])

    const handleOnchangeSelectTurbidity =useCallback((value: any) => {
        setTurbidity(value)
    },[setTurbidity])

    const handleOnchangeDate = useCallback((date: any) => {
        setDate(date)
    },[setDate])

    const handleOnchangeType = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setType(event.target.value)
    },[setType])


    const handleOnchangeSelectPh =useCallback( (value: any) => {
        setSelectPh(value)
    },[setSelectPh])

    return (
        <div className={classes.container}>
            <SPYText title={'Filters'} />
            <div className={classes.filters}>
                <SPYInput
                    classNameContainer={classes.input}
                    typeVariant="primary"
                    placeholder="Nombre"
                    label="Nombre"
                    value={name}
                    onChange={handleOnchangeName}
                />
                  <SPYInput
                   classNameContainer={classes.input}
                    typeVariant="primary"
                    placeholder="Cloro"
                    label="Cloro"
                    value={chlorine}
                    onChange={handleOnchangeChlorine}
                /> 
                <SPYSelect
                    label={"Turbidez"}
                    styleContainer={{ marginTop: "0px", minWidth: "150px"}}
                    typeVariant={"primary"}
                    options={TURBIDITY_OF_WATER}
                    value={turbidity}
                    onChange={handleOnchangeSelectTurbidity}
                />
                <SPYDateSelector
                    classNameContainer={classes.date}
                    variant={"inline"}
                    justify={"flex-start"}
                    disableToolbar={false}
                    id={"id-ph"}
                    label={"Elija la fecha"}
                    onChange={handleOnchangeDate}
                />

                <SPYInput
                    classNameContainer={classes.input}
                    typeVariant="primary"
                    placeholder="Tipo"
                    label="Tipo"
                    value={type}
                    onChange={handleOnchangeType}
                />
               <SPYSelect
                     styleContainer={{ marginTop: "0px", minWidth: "150px"}}
                    label={"Elija el Ph"}
                    typeVariant={"primary"}
                    options={FIELDS_API}
                    value={selectPh}
                    onChange={handleOnchangeSelectPh}
                />
               <div className={classes.button}>
                    <SPYButton  style={{ marginRight: "15px" }}
                        label={'Filtrar'} typeVariant={'primary'} fullWidth={false} onClick={() => onClick(name, chlorine, selectPh, turbidity, date, type)} />
                    <SPYButton style={{ marginRight: "15px", backgroundColor:theme.palette.secondary.main }} label={'Borrar'} typeVariant={'primary'} fullWidth={false} onClick={() => onClickClear} />
                </div> 
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
        width:"100%"
    },
    button: {
        marginTop: "10px",
        marginLeft: "10px",
        maxHeight: "40px",
        display: "flex",
        flexDirection: "row",
        width: "100%"
    },
    input:{
      marginRight:"10px",
      minWidth: "150px"
    },
    date:{
        maxWidth: "150px",
        marginRight: "10px",
    }
}));

export default SPYFilters;