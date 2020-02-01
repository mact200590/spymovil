import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import SYPCard, { DataApi } from "../components/SPYCard";
import { SPYSpinner } from "./SPYSpinner";

interface Props {
  listCardApi: DataApi[];
  isLoading: boolean;
  error?: string;
}

const SYPCardList = ({ error, isLoading, listCardApi }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {isLoading ? (
        <SPYSpinner />
      ) : (
        <List className={classes.list}>
          {listCardApi.map(item => (
            <ListItem className={classes.item} id={`${item.id}`}>
              <SYPCard dataApi={item} />
            </ListItem>
          ))}
        </List>
      )}
      {error && <div className={classes.error}>{error}</div>}
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%"
  },
  list: {
    width: "100%",
    maxHeight: "100%",
    overflow: "auto"
  },
  item: {
    width: "100%"
  },
  error: {
    color: "red"
  }
});

export default SYPCardList;
