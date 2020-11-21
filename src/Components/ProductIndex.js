import {  Paper } from '@material-ui/core';
import {Link} from 'react-router-dom'
import React from 'react'
import Shoes from './../shoes.json';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

list:{
  listStyle:'none',
  
},
ul:{
display:'flex',
flexWrap:'wrap',
alignContent: 'center',
alignItems: 'center',
justifyItems: 'center',

},
PaperHead:{
  width: '330px',
  textAlign: 'center',
  margin: '10px',
  boxShadow: '2px 2px 5px black',
},

}));
export default function ProductIndex(){
    const shoe=Shoes;
    const classes = useStyles();
  
    return(
      <div>
  <h2 style={{textAlign:'center', }}>New Arrival</h2>
  <ul className={classes.ul}>
    {Object.entries(shoe).map(([productID,{name,img,price}])=>(
      <Paper key={productID} variant='elevation' className={classes.PaperHead}>
      <li key={productID} className={classes.list}>
        <Link to={productID}>
          <h2>{name}</h2>
          <img src={img} alt={productID} style={{height:'250px', width:'250px'}}/>
          <h1>{price}</h1>
        </Link>
  
      </li>
      </Paper>
    ))}
  </ul>
      </div>
     );
}
