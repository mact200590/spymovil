import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataApi } from '../components/SPYCard'
import SYPCardList from './SPYCardList';
const data: DataApi[] = [
    {
        id: 1,
        name: "Colonia",
        chlorine: 6.5,
        ph: 1.9,
        turbidity: 5.0,
        date: "2020-01-01T13:54:37",
        type: {
            id: 1,
            name: "Tipo A"
        }
    },
    {    
        id: 2,
        name: "Rivera",
        chlorine: 6.0,
        ph: 9.0,
        turbidity: 7.0,
        date: "2020-01-02T15:17:14",
        type: {
            id: 2,
            name: "Tipo B"
        }
    },
    {
        id: 18,
        name: "Soriano",
        chlorine: 1.0,
        ph: 9.0,
        turbidity: 3.0,
        date: "2020-01-21T15:28:54",
        type: {
            id: 2,
            name: "Tipo B"
        }
    },
    {
        id: 18,
        name: "Soriano",
        chlorine: 1.0,
        ph: 9.0,
        turbidity: 3.0,
        date: "2020-01-21T15:28:54",
        type: {
            id: 2,
            name: "Tipo B"
        }
    },
    {
        id: 18,
        name: "Soriano",
        chlorine: 1.0,
        ph: 9.0,
        turbidity: 3.0,
        date: "2020-01-21T15:28:54",
        type: {
            id: 2,
            name: "Tipo B"
        }
    },
    {
        id: 18,
        name: "Soriano",
        chlorine: 1.0,
        ph: 9.0,
        turbidity: 3.0,
        date: "2020-01-21T15:28:54",
        type: {
            id: 2,
            name: "Tipo B"
        }
    },
    {
        id: 19,
        name: "Treinta y Tres",
        chlorine: 7.0,
        ph: 4.0,
        turbidity: 3.0,
        date: "2020-01-21T15:29:32",
        type: {
            id: 3,
            name: "Tipo C"
        }
    }
]


const SPYCardListContainer = () => {
    const [dataApi, setDataApi] = useState<DataApi[]>([])
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                setDataApi(data);
            } catch (error) {
                setIsError(true);
                setIsLoading(false);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [dataApi,setIsLoading,setIsError]);


    return (
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







