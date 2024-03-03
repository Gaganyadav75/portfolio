import React from 'react'

const page = ({params}) => {
    // console.log(params.project)
  return (
    <embed src={`https://gaganyadav75.github.io/jsprojects/${params.project}`} className="w-full h-full"></embed>
  )
}

export default page
