import About from "@/components/About"
import Skills from "@/components/Skills"
import Error from "@/components/Error"
function page({params}) {
    if (params.allroute=="about") {
        return (
            <About/>
        )
    }
    else if (params.allroute=="skills"){
      return  <Skills/>
    }else{
        return (
         <Error/>
        )
    }
}

export default page
