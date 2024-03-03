"use client"
import React from 'react'
import "../CSS/header.css"
import Link from 'next/link'
import ActiveNav from '@/functions/ActiveNav'
import { useEffect } from 'react'

const Header = ({act}) => {


  useEffect(()=>{
    ActiveNav({target:act},".header ul li a")
  },[act])

  return (
    <header 
    className="header z-10 w-full flex center items-center justify-between border-b-zinc-400 border border-solid"
    >
    <h3 onClick={()=>ActiveNav({target:{innerText:"Home"}},".header ul li a")}><Link href="/">Cod<span>E-G</span>alaxy</Link></h3>
        <ul >
            <li ><Link id="home" href="/"   className="activenav">Home</Link></li>
            <li ><Link  id="projects" href="/projects" >Projects</Link></li>
            <li><Link  id="skills" href="/skills">Skills</Link></li>
            <li ><Link  id="about" href="/about" >About</Link></li>

        </ul>

    </header>
  )
}

export default Header
