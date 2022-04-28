import React from 'react'
import dan from "../img/dan.JPG"
import dan2 from "../img/danielbilek.JPG"
import { CloudDownloadIcon } from '@heroicons/react/outline'
import pdf from "../files/DanielBilek.pdf"


function About({language}) {

  

  return (
    <div id="About" className="text-darkPurple text-center bg-slate-200 flex flex-col items-center">
      <div className="container mx-auto px-10">
        <div className="flex flex-col justify-center items-center ">
            <h2 className="text-4xl mt-20 font-bold md:text-6xl">{language ? "O mně" : "About me"}</h2>
            <div className="border border-purple mt-2 border-2 w-48 rounded-t-md lg:w-72">
            </div>
        </div>

        <div data-aos="fade" className="flex flex-col items-center justify-center mt-16 gap-5 md:flex-row md:items-center ">
        <img className="w-1/2 h-1/2 md:hidden rounded-full shadow-lg shadow-darkPurple/60" src={dan} alt="" />
        <img className="w-1/2 lg:w-1/3 hidden md:block rounded-md shadow-lg shadow-darkPurple/60 " src={dan2} alt="" />
        <div className="flex flex-col gap-5 md:text-left">
          <h3 className="text-3xl lg:text-5xl font-bold">Daniel Bílek</h3>
          <p className="font-light sm:text-lg border-t pt-2 border-gray-300">
          {language ? `Jsem front-end vývojář žijící v České republice. Miluju programování, vytváření intuitivních a přehledných webových stránek a aplikací.` :
          "I am a Front-end developer located in Brno. I have a serious passion for programming and creating intuitive, dynamic user experiences web sites and apps."} </p>
          <p className="font-light sm:text-lg mt-3"> {language ? "Mám smysl pro organizovanou práci, kreativní řešením problémů a kritické myšlení. Pokud zrovna netvořím, tak se věnuji závodnímu grapplingu, seberozvoji a volnočasovým aktivitám. Největší ambice mám ve vytváření front endu, ale nebráním se zkušenostem ani z back endu." : "I have sense for organised work, creative problem solving and critical thinking. Competition grappler, fan of MMA, doing lot of self-education and healthy activites. Most of the time i am interested in the entire front end, but i would like to work on back end too." }</p>
          <a href={pdf} target="_blank" rel="noopener noreferrer"  download="Daniel_Bilek.pdf" className="self-center md:self-start "><button className="hover:scale-105 transition ease-in-out text-purple font-bold border-2 border-purple rounded-md py-3 px-10  flex items-center justify-center gap-2"><CloudDownloadIcon className="w-5 h-5 " />{language ? "MŮJ ŽIVOTOPIS" : "MY RESUME"}</button></a>
        </div>
        
        </div>

        
        </div>
    </div>
  )
}

export default About
