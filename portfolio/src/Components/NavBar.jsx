import React from 'react'
import "../Components/NavBar.css"

const NavBar = (props) => {
  return (
    <div className='container'>
        <div className='nav'>
            <div onClick={()=>{props.scrollTo(props.aboutMe)}} className='links'>About me</div>
            <div onClick={()=>{props.scrollTo(props.skills)}} className='links'>Skills</div>
            <div onClick={()=>{props.scrollTo(props.projects)}} className='links'>Projects</div>
            <div onClick={()=>{props.scrollTo(props.contactMe)}} style={{color: "#BAFFD1"}} className='links'>Contact me</div>
        </div>
    </div>
  )
}

export default NavBar