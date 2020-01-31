import React from 'react'
import { createStyles, makeStyles } from "@material-ui/core/styles";
import SPYOrderBy from '../components/SPYOrderBy'
import SPYCardListContainer from '../components/SPYCardListContainer'
import SPYFilters from '../components/SPYFilters';
import SPYText from '../components/SPYText';

const SPYPageMain = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <SPYFilters
          onClick={() => {}}
          onClickClear={() =>{}}
        />
      </div>
      <div className={classes.order}>
        <SPYOrderBy
          typeVariant={'primary'} title={"Ordenar"} onChange={() => {}} />
      </div>
      <div className={classes.result}>
        <SPYText title={"Resultado"} />
        <SPYCardListContainer />
      </div>
    </div>
  )
}

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column"
    },
    result: {
      textAlign: "center",
      marginTop: "25px"
    },
    order: {
      textAlign: "center",

    }
  })
);


export default SPYPageMain 