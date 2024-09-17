import React from 'react'
import "./header.css"
function Header() {
  return (
    <div className='headerDiv'>

      <div style={{margin: 0,}} className='jobTitile'>
        <h2 style={{margin:0,color:'white', backgroundColor:'black', width:'100%',
          height:'100%',display:'flex', justifyContent:'center', alignItems:'center', fontFamily:"sans-serif", boxShadow:' -5px 2.5px blueviolet'}} >
          Frontend Developer
        </h2>

      </div>
      <div  className='fullName' >
        <h1 style={{  margin: 0,fontFamily:'sans-serif', color:'blueviolet'}}>Babalo Mbulawa</h1>
      </div>
       
     </div> 
  )
}

export default Header