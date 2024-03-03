
import Header from "@/components/Header"
import Mode from "@/components/Mode"
function layout({children,params}) {
  return (
   <>
   <Header act={params==""?"home":params.allroute}/>
   {children}
  
   </>
  )
}

export default layout
