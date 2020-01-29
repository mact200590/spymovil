import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataApi } from '../components/SPYCard'
import SYPCard from '../components/SPYCard'
import { ListItem, List } from '@material-ui/core';
import { GDSpinner } from './SPYSpinner';

interface Props {
    listCardApi: DataApi[]
    isLoading: boolean
}

const SYPCardList = ({ isLoading, listCardApi }: Props) => {
    const classes = useStyles();
    return (
        <div>
            {isLoading && <GDSpinner />}
            <List className={classes.root}>
                {listCardApi.map(item => (
                    <ListItem>
                        <SYPCard
                            dataApi={item}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
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


export default SYPCardList;







