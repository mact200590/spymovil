import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataApi } from '../components/SPYCard'
import SYPCard from '../components/SPYCard'
import { ListItem, List } from '@material-ui/core';
import theme from '../style/theme';

interface Props {
    listCardApi: DataApi[]
}


const SYPCardList = ({ listCardApi }: Props) => {
    const classes = useStyles();
    return (
        <List className={classes.root}>
            {listCardApi.map(item => (
                <ListItem>
                  <SYPCard
                   dataApi={item}
                  />
                </ListItem>
            ))}
        
        </List>
    );
}

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        width: '100%',
        position: 'relative',
        overflow: 'auto',
        maxHeight:"550px",
    }
});


export default SYPCardList;







