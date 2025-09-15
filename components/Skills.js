import EachSkills from "./EachSkills"

function Skills() {
    const allskills = [
        {img:"https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png",label:"HTML"},
        {img:"https://logospng.org/download/css-3/logo-css-3-2048.png",label:"CSS"},
        {img:"https://media.zeemly.com/zeemly/product/tailwind-css.png",label:"TAILWIND"},
        {img:"https://www.britefish.net/wp-content/uploads/2019/06/logo-javascript-2.png",label:"JAVASCRIPT"},
        {img:"https://uploads-ssl.webflow.com/60a2acace1fd91aae61c497d/60ee04a3dee9b428a836325f_React_logo_logotype_emblem-p-1600.png",label:"REACT JS"},
        {img:"https://s3.amazonaws.com/clarityfm-production/attachments/32059/default/nodejs-512.png?1573156678",label:"NODE JS"},
    
        {img:"https://pngimg.com/uploads/github/github_PNG66.png",label:"GITHUB"},
        {img:"https://pngimg.com/uploads/mysql/mysql_PNG23.png",label:"MYSQL"},
        {img:"https://assets-global.website-files.com/6047a9e35e5dc54ac86ddd90/6301872109444992761f5874_24979181.png",label:"FIREBASE"},
     
        {img:"https://www.orangemantra.com/wp-content/uploads/2021/07/mongodb_logo.png",label:"MONGODB"},
        
        
      ]
    
      return (
        <div className="mainskilldiv w-full h-[calc(100%-70px)] text-center tablet:h-[calc(100%-90px)] pt-4 p-0 tablet:p-6 flex flex-col items-center overflow-y-scroll">
         <h1 className="text-3xl first:text-orange-500 font-bold">What I Do</h1>
         <p className="skillsptag text-lg px-14 dark:text-white text-black">I am pursuing BCA at GNIOT Greate Noida.</p>
    
         <div className="flex gap-14 w-full tablet:w-[85%] flex-wrap px-4 py-8 mt-6 items-center justify-center ">
           {allskills.map((ele)=>{
            return <EachSkills key={ele.label} label={ele.label} img={ele.img}/>
           })}
         </div>
    
        </div>
      )
}

export default Skills
