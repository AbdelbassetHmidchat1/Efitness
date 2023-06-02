import {TiFlashOutline} from "react-icons/ti"
import {CiDumbbell} from "react-icons/ci"
import {BiNotepad} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai"
import {AiOutlineMenu} from "react-icons/ai"
import { useState } from "react"



let Links = [
    { name: "Calorie Counter", link: "/counter" },
    { name: "Workout generator", link: "/workout" },
    { name: "Fitness Tracker", link: "/tracker" },
  ];



export default function Sidebar() {
  const [status,setStatus]=useState(true)
  const handleStatus = () => {
    setStatus(!status)
    }

    return (
          <aside className={`md:w-[250px] bg-[#252525] h-screen md:h-screen absolute top-0 left-0 shadow-2xl md:py-[4%] md:visible  md:flex md:flex-col text-black rounded-r-2xl  grid transition-all ${status?'w-full':'w-0 overflow-hidden'}  `}>
            <div className="absolute top-10 right-10">
                        {status ? (
                        <span onClick={()=>handleStatus()}><AiOutlineClose className="w-12 h-12 text-white md:invisible visible hover:rotate-90 transition-all duration-700 "/></span>
                        ) : (
                        <span onClick={()=>handleStatus()}><AiOutlineMenu className="w-12 h-12 text-white md:invisible visible hover:rotate-90 transition-all duration-700"/></span>
                        )}
                    </div>
                  <div className=" w-full md:mt-12 mt-0 bg-[#252525] flex-1 grid grid-rows-3 md:py-[30%] p-0 text-white ">
                      <button className="  transition duration-1000 rounded-3xlxl md:px-6 px-32 hover:bg-black hover:text-white  ">
                      <a href={Links[0].link} className="flex justify-between items-center">
                      <TiFlashOutline className="h-[100px] w-[100px] text-white"/> 
                      <span>{Links[0].name}</span> 
                      </a>

                      </button>
                      <button className=" transition duration-1000 rounded-3xlxl md:px-6 px-32 hover:bg-black hover:text-white  "> 
                      <a href={Links[1].link} className="flex justify-between items-center">
                      <CiDumbbell className="h-[100px] w-[100px] text-white"/>
                       <span>{Links[1].name}</span> 
                       </a>

                       </button>
                      <button className="transition duration-1000 rounded-3xlxl md:px-6 px-32 hover:bg-black hover:text-white   ">
                      <a href={Links[2].link} className="flex justify-between items-center">
                      <BiNotepad className="h-[100px] w-[100px] text-white"/>
                      <span>{Links[2].name}</span> 
                      </a>

                      </button>
  
                  </div>
                  
          </aside>
  
  
  
  
    );
  }
  