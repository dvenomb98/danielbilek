import React from 'react'
import data from "../data"
import SingleProject from './SingleProject'
import Aos from "aos"

function Projects({language}) {

    console.log(data[0])





  return (
    <div id="Projects" className="text-darkPurple text-center bg-slate-200">
      <div className="container mx-auto px-5">

        <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl mt-20 font-bold md:text-6xl">{language ? "Projekty" : "Projects"}</h2>
            <div className="border border-purple mt-2 border-2 w-48 rounded-t-md lg:w-72">
            </div>
            
        </div>

        <div className=" mt-16 gap-6
        flex flex-col justify-center items-center 
        md:flex-row md:gap-10 md:flex-wrap md:items-stretch 
        lg:flex-row lg:gap-10 lg:flex-wrap lg:items-stretch">
        {data.map(data => (
            <SingleProject 
            language={language}
            key={data.id} 
            title={data.title} 
            cz={data.description_cz} 
            en={data.description_en} 
            img={data.img}
            tc1={data.tc1}
            tc2={data.tc2}
            tc3={data.tc3}
            tc4={data.tc4}
            tc5={data.tc5}
            reverse={true}
            link={data.link}
            git={data.git}


            
            
            />
            
        ))}
        </div>


      </div>
    </div>

    
  )
}

export default Projects