import ProjectOpener from '@/components/ProjectOpener'
import React from 'react'

const page = ({params}) => {
    // console.log(params.project)
  return (
    <div className="relative">
    <embed src={`https://gaganyadav75.github.io/jsprojects/${params.project}`} className="w-full h-full"></embed>
    <ProjectOpener val={`jsprojects/${params.project}`}/>
    </div>
  )
}

export default page
