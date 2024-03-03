"use client"
import React from 'react'
import "../CSS/mainpage.css"
import { useEffect } from 'react'
import Typed from "typed.js"
import Link from "next/link"


const MainPage = () => {


        useEffect(()=>{
          new Typed("#text",{
            strings:["CodE-Galaxy","Fresher","Coder","Gagan"],
            loop:true,
            typeSpeed:100,
            backSpeed:50,
            backDelay:1000,
        })
        },[])


  return (
  
<>

    <div className="mainsection flex" >
        <div className="insidemain p-2 tablet:p-5 w-full tablet:w-[50%] h-[40%]">
            <h1>I am <span  id="text"></span></h1>
            <p>let's Break the Matrix</p>
            <button type="button" className="joinbtn"><Link href="/projects">works</Link></button>
            <button type="button" className="chatbtn"><span><a href="https://wa.me/+917549878755">Let's Chat</a></span></button>
        </div>
        <div className="myimgdiv z-0 tablet:relative absolute bottom-0  w-full tablet:flex tablet:w-[50%] tablet:h-full tablet:justify-center items-end h-auto">
          <div className="tablet:items-end flex justify-end items-center h-auto w-full tablet:w-[50%] tablet:max-w-[700px] tablet:max-h-[800px] ">
          <img src="myself.png" className="w-60 tablet:w-full  " alt="image"/>
          </div>
        </div>
    </div>
    




</>
  )
}

export default MainPage
