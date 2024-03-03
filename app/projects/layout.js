import Header from "@/components/Header";
import ProjectNavbar from "@/components/ProjectNavbar";


const ProjectLayout = ({ children }) => {
    return (
     
<>  
<Header act="projects"/>  
<div
className="bg-[transparent] w-full relative projectmaindiv"
>
<ProjectNavbar/>
{children}
</div>
</>

    );
  };

  export default ProjectLayout