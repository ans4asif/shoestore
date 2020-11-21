import React from 'react'
import nike from '../nike.png'
function Home() {
  return (
    <div style={{
      position: ' relative',
      textAlign: 'center',
      
    }}>
      <img style={{
        backgroundSize: 'cover', minWidth: '100%', height: '768px', backgroundposition: 'center',
        backgroundRepeat: 'no-repeat', margin: '0'
      }} src={nike} alt="nike shoe" />
      <div style={{position: 'absolute', top:'1%',left:'37%',color:'yellowgreen'}}>
        <h1>Welcome To Shoe Palace</h1>
        <h3>30% OFF</h3>
      </div>


    </div>
  );
}

export default Home;