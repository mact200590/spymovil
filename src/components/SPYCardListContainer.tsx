import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataApi } from '../components/SPYCard'
import SYPCardList from './SPYCardList';
import { SPYSpinner } from './SPYSpinner';

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
    const [dataApis, setDataApis] = useState<DataApi[]>([])
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            setDataApis(data);
            setIsLoading(false);
        };
        fetchData();
    }, [dataApis, setIsLoading, setIsError, setDataApis]);

    return (
        <div className={classes.container}>
            {isError && <div>Algo esta mal ...</div>}
            <SYPCardList listCardApi={dataApis} isLoading={isLoading} />
            }
        </div>
    )
}

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "row",
        width: '100%',
        position: "relative",
        overflow: 'auto',
        maxHeight: "550px",
    }
});


export default SPYCardListContainer;







