import React, {useState} from 'react'
import {ChevronDoubleDownIcon, ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/outline"
import {Link} from "react-scroll"
import {ReactComponent as ReactLogo} from "../svg/react.svg"
import {ReactComponent as CssLogo} from "../svg/css3.svg"
import {ReactComponent as HtmlLogo} from "../svg/html5.svg"
import {ReactComponent as JsLogo} from "../svg/javascript.svg"
import {ReactComponent as JqLogo} from "../svg/jquery.svg"
import {ReactComponent as NextLogo} from "../svg/nextdotjs.svg"
import {ReactComponent as SassLogo} from "../svg/sass.svg"
import {ReactComponent as TwLogo} from "../svg/tailwindcss.svg"
import {ReactComponent as GitLogo} from "../svg/git.svg"


function Header({language, setLanguage}) {


function switchLanguage() {
    setLanguage(prevState => !prevState)
}

  return (
    <main id="Header" className="text-white bg-gradient-to-r from-purple to-lighPurple/80 flex flex-col justify-center items-center text-center gap-12 lg:gap-20 2xl:gap-40">
        
        <div className="mt-5 gap-2 cursor-pointer flex justify-center items-center lg:self-end lg:mr-5 hover:text-darkPurple transition ease-in-out"
            onClick={switchLanguage}
        >
            {language ? 
            <ChevronUpIcon className="w-4 h-4 m-0"/> : 
            <ChevronDownIcon className="w-4 h-4 m-0"/>
            }
            <p>{language ? "Čeština" : "English"}</p>
        </div>

        <div className="lg:mt-20">
            <h1 className="text-5xl font-bold lg:text-7xl">Front end developer</h1>
            <p className="text-xl mt-5 font-light mx-5 ">{language ? "Dokonalé webové stránky s moderní technologií" : "Building beatiful websites with modern technologies"}</p>
            <div className="flex flex-row items-center justify-center gap-5 mt-6 flex-wrap mx-5 lg:mx-0">
                <ReactLogo className="w-8 h-8 "/>
                <JsLogo className="w-8 h-8 "/>
                <NextLogo className="w-8 h-8 "/>
                <JqLogo className="w-8 h-8 "/>
                <HtmlLogo className="w-8 h-8 "/>
                <CssLogo className="w-8 h-8 "/>
                <TwLogo className="w-8 h-8 "/>
                <SassLogo className="w-8 h-8 "/>
                <GitLogo className="w-8 h-8 "/>
            </div>
        </div>

        <nav className="m-5 lg:m-10 lg:text-2xl font-light ">
            <ul className="flex gap-5 flex-col lg:flex-row">
            <li className="cursor-pointer hover:text-darkPurple transition ease-in-out">
                <Link to="Projects" spy={true} smooth={true} offset={50} duration={500}>{language ? "PROJEKTY" : "PROJECTS"}</Link>
            </li>
            <li className="cursor-pointer hover:text-darkPurple transition ease-in-out">
                <Link to="About" spy={true} smooth={true} offset={50} duration={500} >{language ? "O MNĚ" : "ABOUT ME"}</Link>
            </li>
            <li className="cursor-pointer hover:text-darkPurple transition ease-in-out">
                <Link to="Contact" spy={true} smooth={true} offset={50} duration={500}>{language ? "KONTAKT" : "CONTACT"}</Link>
            </li>
            </ul>
        </nav>

        <Link to="Contact" spy={true} smooth={true} offset={50} duration={8000}>
            <ChevronDoubleDownIcon className="w-8 h-8 mb-5 cursor-pointer hover:text-darkPurple transition ease-in-out"/>
        </Link> 

    
    
    </main>

  )
}

export default Header