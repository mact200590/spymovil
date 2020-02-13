import { Container } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { red } from "@material-ui/core/colors";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import React from "react";

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
  dataApi: { id, name, chlorine, ph, turbidity, date, type }
}: Props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="/assets/images/colonia.jpg"
        title="Paella dish"
      />
      <Container className={classes.nameContainer}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.name}
        >
          {name}
        </Typography>
        <CardHeader
          avatar={
            <Avatar variant="rounded" className={classes.avatar}>
              {""}
            </Avatar>
          }
          title="Ph"
          className={classes.ph}
        />
      </Container>
      <Typography variant="body2" color="textSecondary" component="p">
        {moment(date).format("d MMM, YY")}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        #:{" "}
        <Typography variant="body2" color="textSecondary" component="p">
          {id}
        </Typography>
      </Typography>
    </Card>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%"
    },
    nameContainer: {
      display: "flex",
      justifyContent: "space-between",
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0
    },
    name: {
      marginBottom: 0
    },
    ph: {
      paddingTop: 2,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 2
    },
    media: {
      height: "100%",
      width: "100%",
      minHeight: 150,
      minWidth: 350,
      borderRadius: 5
      // [theme.breakpoints.down("xs")]: {
      //   width: "100%"
      // }
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
    avatar: {
      width: 50,
      height: 5,
      backgroundColor: red[500]
    }
  })
);

export default SYPCard;
