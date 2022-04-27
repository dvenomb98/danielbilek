import React from 'react'
import {LinkIcon, ExternalLinkIcon} from "@heroicons/react/outline"



function SingleProject({title, img, cz, en, language, tc1, tc2, tc3, tc4, tc5, reverse, link, git}) {

  return (
    <div className="
    w-80 overflow-hidden bg-white
    flex flex-col justify-center items-center 
    shadow-lg shadow-darkPurple/60 rounded-lg gap-5
    lg:w-1/3
    "
    data-aos="fade"
    >
      <div className="overflow-hidden h-full">
          <img  
          src={img} 
          alt="" />
      </div>

        <div className="flex flex-col gap-5">

            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="px-3 font-light">{language ? cz : en}</p>
            <div className="mt-3 flex flex-row flex-wrap gap-2 justify-center items-center">
                <button className="cursor-default font-bold border-2 rounded-lg border-white shadow shadow-darkPurple px-2">{tc1}</button>
                <button className="cursor-default font-bold border-2 rounded-lg border-white shadow shadow-darkPurple">{tc2}</button>
                <button className="cursor-default font-bold border-2 rounded-lg border-white shadow shadow-darkPurple">{tc3}</button>
                <button className="cursor-default font-bold border-2 rounded-lg border-white shadow shadow-darkPurple">{tc4}</button>
                {tc5 && <button className="cursor-default font-bold border-2 rounded-lg border-white shadow shadow-darkPurple">{tc5}</button>}
            </div>

            <div className="mb-8 flex flex-row items-center justify-center gap-5 mt-4">
            <a href={link} target="_blank">
            <button className="bg-cyan-400/90 text-white font-bold border-2 rounded-lg border-white hover:opacity-70
            py-1 px-2 flex flex-row items-center justify-center gap-1">
              <LinkIcon className="w-8 h-8" />
              {git ? "Live demo" : "Live website"}
            </button>
            </a>
            {git && <a href={git} target="_blank">
            <button className="bg-violet-400/80 text-white border-white font-bold border-2 rounded-lg hover:opacity-70
            py-1 px-2 flex flex-row items-center justify-center gap-1">
              <ExternalLinkIcon className="w-8 h-8" />
              Github
            </button></a>}
            </div>
        </div>
    </div>
  )
}

export default SingleProject