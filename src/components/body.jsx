import React from 'react'
import './body.css'
import "./header.css"
import image from '../testimg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'     
import {faGraduationCap,faFolderOpen,faBriefcase} from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect} from 'react'
function BodyCom() {
  
  
  const CardTitle =({icon,title ,propCard})=>{
    return(<div style={{paddingBottom:'30px'}}> 
     <div style={{display:'flex', alignItems:"center",gap:'10px',paddingBottom:'30px'}}>
     <FontAwesomeIcon icon={icon} size="2x" style={{color:'blueviolet'}}/>
      <h2 style ={{margin:0,paddingTop:"",}} >{title}</h2>
     </div>
     {propCard}
     </div>
    )
  }
  const Timeline=(swip)=>{
    const display =swip? 'none': "block"
    return(
      <div style={{display:'flex', flexDirection:"column",  width:"fit-content", alignItems:'center',paddingTop:'5px', gap:""}}>
     
     <div style={{backgroundColor:'black', width:'10px',height:"10px",borderRadius:'10px' }}></div>
      
      <div style={{backgroundColor:'black',width:'3px',flexGrow:1, display:display}}></div> 
       
      </div>
    )
  }
  const Cards= (prop)=> {
   
    const items =['item1','item2','item3','item4']
    return(
    // <div  className=" subDiv2Card-1">  
     
       <div style={{display:'flex',paddingLeft:'50px', paddingBottom:'10px'  }} >
            {prop.Timeline}
             <div style={{flex:0.25,}}><p style={{margin:0,paddingLeft:'5px' }}>{prop.dateTo}</p> </div>

             <div style={{ flex:1, }}><h4 style={{margin:0, paddingLeft:"40px", height:'fit-content', color:"blueviolet"}}>{prop.inst_Name}</h4>
             <ul style={{margin:0, listStyleType: 'none'}}>
             {items.map((item , index)=>{
              return(
              prop[item] ? <li key={index}>{prop[item] }</li >:null)
             
             })}
            </ul> 
           </div>  

     </div>
   /* </div> */
   
  )};



  const PersonDtCards =(prop) =>{
    
    return(
      
      <div>
        <h3 style={{paddingLeft:'10px', letterSpacing:"2px", fontFamily:"sans-serif"}}>
           {prop.title}
        </h3>
        <ul>
         { prop.Data ? prop.Data.map((item, index)=>{
            return <li key={index}>{item}</li>
            }): null}
        
        </ul>    
        <hr  style={{backgroundColor:"blueviolet"}}/>    
      </div>
    )
  }

  return (
    <>
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

    <div className='mainDivContainer'>
        <div className='subDiv1'>
          <div className='subDiv1_CardContainer'>
            <div className='subDiv1_Container_Card1' style={{boxShadow:'-5px 2.5px blur blueviolet', clipPath:"path('M 0 0 L 70% 0 Q 100% 0 100% 30% L 100% 100% L 0 100% Z')"}}> 
            <PersonDtCards title='CONTACTS' Data={['babalombulawa@gmail.com','067 980 6629']} /> 
              
              <PersonDtCards title='LANGUAGES' Data={['Fluent in English & isiXhosa']} /> 
              
              <PersonDtCards title ='CERTIFICATES' Data= {['National Certifícate  – System Development','National Certifícate  – System Support ','Microsoft 365 Fundamentals']}/>
            </div>

            <div className='subDiv1_Container_Card2'> 
             <div className='card2ContantContainer'> 
              <h3>SKILLS</h3>
              <div className='skillsContainer'>
               
                <div className='subDiv1_Card2_Skills'> <h4>REACTJS    </h4>   </div>
                <div className='subDiv1_Card2_Skills'> <h4>JAVA SCRIPT</h4> </div>
                <div className='subDiv1_Card2_Skills'> <h4>HTML       </h4>       </div>
                <div className='subDiv1_Card2_Skills'> <h4>GIT        </h4>       </div>
                <div className='subDiv1_Card2_Skills'> <h4>CSS        </h4>       </div>
                <div className='subDiv1_Card2_Skills'> <h4>GITHUB     </h4>    </div>
                
              </div>
              
             </div>
            </div>
         </div>
        </div>
         <div    className='subDiv2'> 
        
          <div style={{paddingTop:'',display:'flex',flexDirection:'column', }}>
            <CardTitle 
                    icon={faBriefcase} 
                    title="Work Experience"
                    propCard={
                      <>
                        <Cards
                          Timeline={Timeline()}
                          display="none"
                          dateTo="2024 - Present"
                          inst_Name="SpintHive"
                          item1="Document Tagger"
                        />
                        <Cards
                        Timeline ={Timeline(1)}
                          display="none"
                          dateTo="2022 - 2023"
                          inst_Name="Kove Collection"
                          item1="Barback"
                        />
                      </>
                    }
                    />
            <CardTitle 
                    icon={faGraduationCap} 
                    title="Education"
                    propCard={
                      <>
                        <Cards
                          Timeline={Timeline()}
                          display="none"
                          dateTo="2022 - 2024"
                          inst_Name="iSudent Academy (IT Engineering)"
                          item1="info@istudentacademy.co.za"
                          item2='021 824 1170'
                        />
                        <Cards
                        Timeline ={Timeline(1)}
                          display="none"
                          dateTo="2019 - 2022"
                          inst_Name="Cape Town High School (Matric)"
                          item1="capetown.high@wcgschools.gov.za"
                          item2="021 424 2168 "
                        />
                      </>
                    }
                    />
             <CardTitle 
                    icon={faFolderOpen} 
                    title="Projects"
                    propCard={
                      <>
                        <Cards
                          Timeline={Timeline()}
                          display="none"
                          dateTo="2023"
                          inst_Name="Computer Store Website"
                          item1="HTML, CSS, JS"
                          item2=" https://kellysand.github.io/TechNow-Website/"
                        />
                         <Cards
                          Timeline={Timeline(1)}
                          display="none"
                          dateTo="2024"
                          inst_Name=" ReactJs Static Resume"
                          item1='REACT.JS'
                          item2="https://github.com/kellysand/ReactJS-Static-Resume"
                        />
                      </>
                    }
                    />
       
          </div>
        </div>
    </div>
    </>
  )
}

export default BodyCom