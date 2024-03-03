"use client"
import React,{useEffect} from 'react'

import '../CSS/mode.css'


const Mode = () => {


    
 useEffect(()=>{
    let banner = document.querySelector(".banner")

    document.querySelector(".modeswitch").addEventListener("click",()=>{
        banner.classList.toggle("night")
    })

 },[])

  return (
    <div 
    className="modeswitch"
    >
        <img src="https://img.icons8.com/?size=25&id=9313&format=png" alt="Day"/>
        <img src="https://img.icons8.com/?size=25&id=88SZJSqr139N&format=png" alt="Night"/>
    </div>
  )
}

export default Mode
