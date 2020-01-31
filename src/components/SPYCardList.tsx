import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataApi } from "../components/SPYCard";
import SYPCard from "../components/SPYCard";
import { ListItem, List } from "@material-ui/core";
import { SPYSpinner } from "./SPYSpinner";

interface Props {
  listCardApi: DataApi[];
  isLoading: boolean;
}

const SYPCardList = ({ isLoading, listCardApi }: Props) => {
  const classes = useStyles();
  return (
    <div>
      {isLoading ? (
        <SPYSpinner />
      ) : (
        <List className={classes.root}>
          {listCardApi.map(item => (
            <ListItem id={`${item.id}`}>
              <SYPCard dataApi={item} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: 360,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300
    }
});

export default SYPCardList;
