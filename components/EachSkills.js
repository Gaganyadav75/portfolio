import React from 'react'

function EachSkills({img,label}) {
  return (
    <div className="eachskilldiv max-h-[200px] min-h-[170px] h-[10%] tablet:h-[28%] w-[15%] min-w-[120px] p-6 flex flex-col items-center justify-between gap-3 text-black bg-gray-200 shadow-sm shadow-gray-300">
      <img className="w-[80%]" src={img} alt={label}/>
      <h2 className="text-xl">{label}</h2>
    </div>
  )
}

export default EachSkills
