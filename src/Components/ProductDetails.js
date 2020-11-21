import { Paper } from '@material-ui/core';
import React from 'react'
import { useParams } from 'react-router';
import Shoes from './../shoes.json';

function ProductDetails() {

  const {productID} = useParams();
  console.log(productID)
  const product=Shoes[productID];
  const {name,img,price}=product;
  

  return (
    <div>
      <Paper style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',width: '500px',textAlign: 'center',margin: 'auto',boxShadow: '2px 2px 5px black',alignContent:'center',justifyContent:'center',display:'flex',flexWrap:'wrap'}}>
      <h2>{name}</h2>
      <img src={img} alt={name} width='80%'/>
        <h1>{price}</h1>
        
      </Paper>
      </div>
    
       
  );
}

export default ProductDetails;