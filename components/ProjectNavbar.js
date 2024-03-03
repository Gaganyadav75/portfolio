
import Link from 'next/link'
import '../CSS/projectmain.css'




const ProjectNavbar = () => {



  return (
    <nav
    className="projectnav overflow-y-scroll h-[100%-70px] p-[10px] flex gap-[20px] flex-col text-[2.5vw] tablet:text-[1.2vw] transition-all
    "
    >
       
       <Link href="/projects">All Projects</Link>

         
              <details>
                <summary>Projects</summary>
                <ul className="children:pl-[20px] children:mt-2">
                  <li><Link href="/projects/quizapp">Quiz App</Link></li>
                  <li><Link href="/projects/notesapp">Notes App</Link></li>
                  <li><Link href="/projects/signature">Signature</Link></li>
                  <li><Link href="/projects/todoapp">Todo App</Link></li>
                  <li><Link href="/projects/calculator">Calculator</Link></li>
                  <li><Link href="/projects/weatherapp">Weather</Link></li>
                  <li><Link href="/projects/quotegenerator">Quote</Link></li>
                </ul>
              </details>
    
              <details>
                <summary>Landing Pages</summary>
                <ul className="children:pl-[20px] children:mt-2">
                  
                  <li><Link href="/projects/gym">Gym</Link></li>
                  <li><Link href="/projects/travelling">Travelling</Link></li>
                  <li><Link href="/projects/foodapp">Food</Link></li>
                  
                </ul>
              </details>
    
              <details>
                <summary>miniproject</summary>
                <ul className="children:pl-[20px] children:mt-2">

                  <li><Link href="/projects/agecalculator">Age Calculator</Link></li>
                  <li><Link href="/projects/superheroapi">SuperHero</Link></li>
                  <li><Link href="/projects/passwordgenerator">Password Generator</Link></li>
                  <li><Link href="/projects/rps game">RPS Game</Link></li>
                </ul>
              </details>

              <details>
                <summary>Show Off</summary>
                <ul className="children:pl-[20px]">
                  
                  <li><Link href="/projects/coaching">Coaching</Link></li>
                  <li><Link href="/projects/tutionhelp">Tutionhelp</Link></li>
                  
                </ul>
              </details>
    
    </nav>
  )
}

export default ProjectNavbar
