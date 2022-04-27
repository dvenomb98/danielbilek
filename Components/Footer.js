import { ChevronDoubleUpIcon } from '@heroicons/react/outline'
import React from 'react'
import {Link} from "react-scroll"
import {ReactComponent as ReactLogo} from "../svg/react.svg"
import {ReactComponent as TwLogo} from "../svg/tailwindcss.svg"

function Footer({language}) {
  return (
    <div className="bg-white flex flex-col items-center justify-center gap-5 text-darkPurple">
        <div className="flex items-center justify-center">
            <Link to="Header" spy={true} smooth={true} offset={50} duration={500}>
                <ChevronDoubleUpIcon className="w-8 h-8 mt-5 cursor-pointer hover:text-darkPurple transition ease-in-out"/>
            </Link> 
        </div>

        <div className="flex flex-col md:flex-row gap-1 md:gap-10 mb-10">
            <div className="flex items-center justify-center gap-2">
                <p>{language ? "Vytvořeno v" : "Build with" } <strong>React</strong></p>
                <ReactLogo className="w-8 h-8" fill="cyan" />
            </div>
            <div className="flex items-center justify-center gap-2">
                <p>{language ? "Styling pomocí" : "Styled with"} <strong>Tailwind</strong></p>
                <TwLogo className="w-8 h-8 " fill="cyan"  />
            </div> 
        </div>

    </div>

    
  )
}

export default Footer