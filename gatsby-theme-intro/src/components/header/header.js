import React from "react"
import { BsMoon,  BsSun} from "react-icons/bs"
import { FaEnvelope } from "react-icons/fa"
import { ProfileType } from "../../types"

const Header = ({ initials }) => {

  return (
  <header className="flex justify-between p-4 lg:px-8">
    <span className="inline-flex w-14 h-14 lg:mt-4 font-header font-bold text-xl justify-center items-center text-center text-front dark:text-front-dark border-2 border-solid border-front dark:border-front-dark rounded-full">
      {initials}
    </span>

    <div className="flex gap-6">
      <div id="dark-mode-toggle" className="inline-flex items-center mr-4 hover:opacity-50">
        <BsSun size={22} alt="light mode" className="dark:hidden inline"
               onClick={() => {
                 document.getElementsByTagName("html")[0].classList.add("dark")
               }}/>
        <BsMoon size={22} alt="dark mode" className="hidden dark:inline"
                onClick={() => {
                  document.getElementsByTagName("html")[0].classList.remove("dark")
                }}/>
      </div>

      <a
        className="inline-flex w-14 h-14 font-header font-semibold px-2 bg-lead dark:bg-lead-dark rounded-full text-lead-text bg:text-lead-text-dark justify-center items-center leading-tight lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:rounded-lg lg:self-start lg:mt-4 hover:opacity-75 transition-opacity duration-150"
        href="#contact"
      >
        <FaEnvelope className="inline-block h-6 w-6 lg:hidden"/>
        <FaEnvelope className="inline-block h-4 w-4 mr-3 hidden lg:block"/>
        <span className="hidden lg:block text-xl">Contact me</span>
      </a>
    </div>


  </header>
  )
}

Header.propTypes = {
  initials: ProfileType.initials,
}

export default Header
