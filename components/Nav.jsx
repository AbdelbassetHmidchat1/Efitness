
import { useState } from "react";
import {BiMenu} from 'react-icons/bi'
import {BiX} from 'react-icons/bi'
import {AiOutlineClose} from "react-icons/ai"
import {AiOutlineMenu} from "react-icons/ai"





export default function Navbar() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Features", link: "/#features" },
    { name: "Sign in", link: "/sign-in" },
  ];
  let [open,setOpen]=useState(false)

  const toggleMenu = () => {
    setOpen(!open);
  }
  const [status,setStatus]=useState(true)
  const handleStatus = () => {
    setStatus(!status)
    }
  

  return (
      <nav className=" shadow-md w-full fixed top-0 left-0 z-50">
                        <div className="absolute top-10 right-10">
                        {status ? (
                        <span onClick={()=>handleStatus()}><AiOutlineClose className="w-12 h-12 text-white lg:invisible visible hover:rotate-90 transition-all duration-700 "/></span>
                        ) : (
                        <span onClick={()=>handleStatus()}><AiOutlineMenu className="w-12 h-12 text-white lg:invisible visible hover:rotate-90 transition-all duration-700"/></span>
                        )}
                    </div>
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div className="cursor-pointer flex items-center">
            <h1 className="m-0 font-['Alex_Brush']">Efitness</h1>
          </div>
          <div className="md:hidden absolute right-8 top-0 py-3">
            {open ? (
                <BiX size={50} className="cursor-pointer" onClick={toggleMenu} />
                ) : (
                <BiMenu size={50} className="cursor-pointer" onClick={toggleMenu} />
            )}
          </div>
          <ul className={`md:flex md:items-center absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ${open?'top-14 opacity-100':"top-[-500px]"}`}>
          {Links.map((link) => (
            <li key={link.name} className="m-0 md:ml-8 md:my-0 my-7 ">
              <a href={link.link} className="text-xl text-[#111111] hover:text-[#FF0000] transition-all duration-500">{link.name}</a>
            </li>
          ))}
        </ul>
        </div>

      </nav>
  );
}
