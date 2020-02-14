import { Container } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import React from "react";
import { phValueToLabel } from "../utils/helper";

interface Plants {
  id: number;
  name: string;
}

export interface DataApi {
  id: number;
  name: string;
  chlorine: number;
  ph: number;
  turbidity: number;
  date: string;
  type: Plants;
}

interface Props {
  dataApi: DataApi;
}

const SYPCard = ({
  dataApi,
  dataApi: { id, name, chlorine, ph, turbidity, date, type }
}: Props) => {
  const classes = useStyles({ dataApi });
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const imagePath = `/assets/images/${id}.jpg`;

  return (
    <Card className={classes.root}>
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className={classes.name}
      >
        {name}
      </Typography>
      <CardMedia className={classes.media} image={imagePath} title="Paella dish" />

      <Container className={classes.nameContainer}>
        <Typography
          className={classes.date}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {moment(date).format("DD MMM, YYYY")}
        </Typography>
        <Avatar variant="rounded" className={classes.avatar}>
          {""}
        </Avatar>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.ph}
        >
          Ph
        </Typography>
      </Container>

      <Typography
        className={classes.itemValue}
        variant="body2"
        color="textSecondary"
        component="p"
      >
        <Typography variant="body2" color="textSecondary" component="p">
          {`Chlorine: ${chlorine}`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {`Turbidity: ${turbidity}`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {`Type: ${type.name}`}
        </Typography>
      </Typography>
    </Card>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      borderWidth: 0,
      boxShadow: "0px 0px 0px #FFFFFF"
    },
    nameContainer: {
      display: "flex",
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0
    },
    name: {
      marginBottom: 0,
      textShadow: "1px 2px 3px #3e3b3b",
      color: "#3a3838"
    },
    ph: {
      alignSelf: "center",
      marginLeft: 5
    },
    media: {
      height: "100%",
      width: "100%",
      minHeight: 250,
      minWidth: 350,
      borderRadius: 5
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: (props: Props) => ({
      width: 10,
      height: 10,
      backgroundColor: phValueToLabel(props.dataApi.ph).color,
      alignSelf: "center",
      marginLeft: 15
    }),
    date: {
      borderRadius: 5,
      maxWidth: 150,
      border: 2,
      borderStyle: "solid",
      borderColor: "#858585",
      opacity: 1,
      paddingLeft: 5,
      paddingRight: 5,
      marginTop: 5
    },
    itemValue: {
      paddingLeft: 5
    }
  })
);

export default SYPCard;
