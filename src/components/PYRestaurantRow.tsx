import { Avatar, Link } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import React from "react";
import logo from "../asserts/logo.png";
import { Restaurant } from "../types";
export const PYRestaurantRow: React.FC<Restaurant> = ({
  name,
  topCategories,
  deliveryTimeMaxMinutes,
  link
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar src={logo}></Avatar>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Categorías: {topCategories.join(", ")}
                </Typography>
                <Rating
                  name="half-rating"
                  value={2.5}
                  precision={0.5}
                  readOnly
                />
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  Tiempo máximo de entrega: {deliveryTimeMaxMinutes} minutos
                </Typography>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  <Link href={link}>Perfil en PedidosYa</Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  }
}));
