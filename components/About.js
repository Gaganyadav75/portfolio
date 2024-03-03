
const About = () => {
  return (
    <div className="aboutmaindiv overflow-y-scroll tablet:overflow-hidden w-full h-[calc(100vh-90px)] tablet:h-[calc(100vh-70px)] mt-[10%] flex justify-center items-start tablet:items-center tablet:m-0">
    <div className=" w-[90%] p-[5%] text-center flex flex-col-reverse justify-around content-center gap-4 tablet:flex-row tablet:w-full tablet:gap-0 tablet:text-start pb-[20%]">
        <div className="p-[5%] w-[100%] tablet:w-[40%]">
            <h2 className="text-[6vw] font-bold tablet:text-[2.5vw]">
                Any type of question
                <br/>
                & Discussion.
            </h2>
            <p className="mt-4 mb-8 "><span>Lets Talk  </span><span className="inline-block border-b w-[40%] ml-6 border-orange-300"></span></p>
            <h3 className="text-[2.5vw] tablet:text-[1.2vw] font-semibold mb-2 text-[#ff895e]">7549GAGANYADAV@GMAIL.COM</h3>
            <p className="mb-1">Insta: <a >gaganyadav_75</a></p>
            <p className="mb-1">whatsapp: +917549878755</p>
            
        </div>
        <div className="p-[5%] w-[100%] tablet:w-[40%]">

            <h2 className="text-[6vw] font-bold tablet:text-[3vw]">About</h2>

            <p className="text-[3vw] mt-5 mb-3 tablet:text-[1vw]">I am a FrontEnd Web-Developer from Noida-India.
                <br/>
                I am a Fresher Searching for InternShip.
            </p>

            <div className="mb-1 w-full text-sm">
                <span className="inline-block w-[20%] ">Name</span>
                <span className="inline-block w-[10%]">:</span>
                <span>Gagan</span>
            </div>
            <div className="mb-1 text-sm">
                <span className="inline-block w-[20%]">Place</span>
                <span className="inline-block w-[10%]">:</span>
                <span>Noida</span>
            </div>
            <div className="mb-1 text-sm">
                <span className="inline-block w-[20%]">Github</span>
                <span className="inline-block w-[10%]">:</span>
                <span><a href="https://github.com/Gaganyadav75" target="_blank">https://github.com/Gaganyadav75</a></span>
            </div>

            <button className="bg-[#f87c58] text-white p-1 pl-2 pr-2 mt-1 rounded-[5px]">Download CV</button>

        </div>
    </div>
    </div>
  )
}

export default About
