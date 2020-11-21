import { Paper } from '@material-ui/core';

import React from 'react'
import { Outlet } from 'react-router';


function Product() {
  return(
<div>
  <Outlet/>
</div>
  )
   }
      export default Product;