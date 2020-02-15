import React from "react";
import { makeStyles } from "@material-ui/styles";

interface Props {
  title: string;
  titleSubtitle?: string;
  fontSize?: number;
}

const SPYText = ({ title, titleSubtitle, fontSize }: Props) => {
  const classes = useStyles({ title, titleSubtitle, fontSize });
  return (
    <div className={classes.container}>
      <p className={classes.title}>{title}</p>
      {titleSubtitle && (
        <p className={classes.titleSubtitle}>{titleSubtitle}</p>
      )}
    </div>
  );
};

export default SPYText;

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column"
  },
  title: ({ fontSize }: Props) => ({
    fontFamily: "Times New Roman",
    fontSize: fontSize || 40,
    marginBottom: "0px",
    marginTop: "0px"
  }),
  titleSubtitle: {
    fontFamily: "Times New Roman",
    fontSize: 20,
    paddingLeft: 20
  }
}));
