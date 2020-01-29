import React from 'react'
import { makeStyles } from '@material-ui/styles';
import SPYSelect from '../components/SPYSelect'
import { SelectType } from './SPYSelect'
import SPYText from './SPYText'


const phScale = [
   "Very acid",
   "Moderately acidic",
   "Slightly acidic",
   "Neutral",
   "Slightly alkaline",
   "Moderately alkaline",
   "Very alkaline"
]
interface Props {
   typeVariant: SelectType
   onChange:(((value: string) => void) & ((event: React.ChangeEvent<{value: unknown}>) => void)) | undefined
   title:string
   defaultValue?:string
}


const SPYOrderBy = ({ defaultValue="",title, typeVariant,onChange }: Props) => {
   const classes = useStyles();
   return (
      <div className={classes.container}>
         <SPYText title={title} />
         <SPYSelect className={classes.tittle}
            typeVariant={typeVariant}
            options={phScale}
            onChange={onChange}
            defaultValue={defaultValue}
         />
      </div>
   )
}

const useStyles = makeStyles(theme => ({
   container: {
       display: "flex",
       flexDirection: "column",
   },
   tittle: {
       fontFamily: "Times New Roman",
       backgroundColor:"red"
   },
   titleSubtitle: {
       fontFamily: "Times New Roman",
       fontSize: 20,
       paddingLeft: 20,
   }
}));





export default SPYOrderBy