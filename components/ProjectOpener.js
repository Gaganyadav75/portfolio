import React from 'react'

function ProjectOpener({val}) {
  return (
    <div className="absolute top-4 right-4">
       <button className="bg-[#f87c58] text-white p-1 pl-2 pr-2 mt-1 rounded-[5px]">
        <a href={"https://gaganyadav75.github.io/"+val}>Open</a>
        </button>
    </div>
  )
}

export default ProjectOpener
