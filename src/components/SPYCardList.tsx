import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataApi } from '../components/SPYCard'
import SYPCard from '../components/SPYCard'
import { ListItem, List } from '@material-ui/core';

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
                    id={item.id}
                    name={item.name}
                    chlorine={item.chlorine} 
                    ph={item.ph}
                    turbidity={item.turbidity}
                    date={item.date}
                    type={item.type}
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







