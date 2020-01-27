import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataApi } from '../components/SPYCard'
import SYPCardList from './SPYCardList';



const SPYCardListContainer = () => {
    const [dataApi, setDataApi] = useState<DataApi[]>([])
    const classes = useStyles();

    return(
        <SYPCardList listCardApi={dataApi} />
    )
}

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        width: '100%',
        position: 'relative',
        overflow: 'auto',
        maxHeight: "550px",
    }
});


export default SPYCardListContainer;







