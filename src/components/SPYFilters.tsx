import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { SPYInput } from './SPYInput';
import { SPYButton } from './SPYButton'
import SPYSelect from './SPYSelect'
import SPYText from './SPYText'
import { FIELDS_API } from '../utils/constant'
import { TURBIDITY_OF_WATER } from '../utils/constant'
import SPYDateSelector from './SPYDateSelector'

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

    const handleOnchangeName = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setName(event.target.value)
    }

    const handleOnchangeChlorine = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setChlorine(event.target.value)
    }

    const handleOnchangeSelectTurbidity = (value: any) => {
        setTurbidity(value)
    }

    const handleOnchangeDate = (date: any) => {
        setDate(date)
    }

    const handleOnchangeType = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setType(event.target.value)
    }


    const handleOnchangeSelectPh = (value: any) => {
        setSelectPh(value)
    }

    return (
        <div className={classes.container}>
            <SPYText title={'Filters'} />
            <div className={classes.filters}>
                <SPYInput
                    typeVariant="primary"
                    placeholder="Nombre"
                    label="Nombre"
                    value={name}
                    onChange={handleOnchangeName}
                />
                <SPYInput
                    typeVariant="primary"
                    placeholder="Cloro"
                    label="Cloro"
                    value={chlorine}
                    onChange={handleOnchangeChlorine}
                />
                <SPYSelect
                    label={"Turbidez"}
                    styleContainer={{ marginTop: "5px" }}
                    typeVariant={"primary"}
                    options={TURBIDITY_OF_WATER}
                    value={turbidity}
                    onChange={handleOnchangeSelectTurbidity}
                />
                <SPYDateSelector
                    variant={"inline"}
                    justify={"center"}
                    disableToolbar={false}
                    id={"id-ph"}
                    label={"Elija la fecha"}
                    onChange={handleOnchangeDate}
                />

                <SPYInput
                    typeVariant="primary"
                    placeholder="Tipo"
                    label="Tipo"
                    value={type}
                    onChange={handleOnchangeType}
                />
                <SPYSelect
                    label={"Elija el Ph"}
                    styleContainer={{ marginTop: "5px" }}
                    typeVariant={"primary"}
                    options={FIELDS_API}
                    value={selectPh}
                    onChange={handleOnchangeSelectPh}
                />
                <div className={classes.button}>
                    <SPYButton style={{ paddingRight: "15px" }}
                        label={'Filtrar'} typeVariant={'primary'} fullWidth={false} onClick={() => onClick(name, chlorine, selectPh, turbidity, date, type)} />
                    <SPYButton label={'Borrar'} typeVariant={'primary'} fullWidth={false} onClick={() => onClickClear} />
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
        minWidth: "400px"
    },
    button: {
        marginTop: "10px",
        marginRight: "50px",
        maxHeight: "40px",
        display: "flex",
        flexDirection: "row",
        width: "100%"

    }
}));

export default SPYFilters;