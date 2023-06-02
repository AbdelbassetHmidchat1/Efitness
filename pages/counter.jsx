import { TiFlashOutline } from "react-icons/ti";
import { CgGenderMale } from "react-icons/cg";
import { CgGenderFemale } from "react-icons/cg";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { CiDumbbell } from "react-icons/ci";
import { BiNotepad } from "react-icons/bi";
import { RxReset } from "react-icons/rx";
import notepad from "../public/notepad.svg";
import { useRouter } from "next/router";
import { getValue } from "@/utils/common";
import { useStore } from "@/client/context";

export default function Home() {
  const router=useRouter()
  const [state1, dispatch] = useStore();
  const authenticated = getValue(state1, ["user", "authenticated"], false);
  let Links = [
    { name: "Calorie Counter", link: "/counter" },
    { name: "Workout generator", link: "/workout" },
    { name: "Customer service", link: "/communicate" },
  ];

  const [status, setStatus] = useState(true);
  const handleStatus = () => {
    setStatus(!status);
  };

  const [age, setAge] = useState("");
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const [height, setHeight] = useState("");
  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };
  const [weight, setWeight] = useState("");
  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };
  const [gender, setGender] = useState(null);
  const [result, setResult] = useState(false);

  const [low, setLow] = useState(false);
  const [medium, setMedium] = useState(false);
  const [high, setHigh] = useState(false);
  const handleResult = (bol) => {
    setResult(bol);
  };

  const Activity = () => {
    if (low) {
      return 1.375;
    } else if (medium) {
      return 1.55;
    } else if (high) {
      return 1.725;
    }
  };

  const CalorieCounter = () => {
    if (gender || gender === false) {
      if (gender) {
        let resultCalorie =
          (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * Activity();
        return parseInt(resultCalorie);
      } else if (gender === false) {
        let resultCalorie =
          (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * Activity();
        return parseInt(resultCalorie);
      }
    } else if (
      gender == null ||
      age <= 0 ||
      weight <= 0 ||
      height <= 0 ||
      (!low && !medium && !high)
    ) {
      return null;
    }
  };

  return authenticated ? (
    <>
      <aside
        className={`md:w-[250px] bg-[#252525] h-screen md:h-screen absolute top-0 left-0 shadow-2xl md:py-[4%] md:visible  md:flex md:flex-col text-black rounded-r-2xl  grid transition-all ${
          status ? "w-full" : "w-0 overflow-hidden"
        } z-[999]  `}
      >
        <div className="absolute top-10 right-10">
          {status ? (
            <span onClick={() => handleStatus()}>
              <AiOutlineClose className="w-12 h-12 text-white md:invisible visible hover:rotate-90 transition-all duration-700 " />
            </span>
          ) : (
            <span onClick={() => handleStatus()}>
              <AiOutlineMenu className="w-12 h-12 text-white md:invisible visible hover:rotate-90 transition-all duration-700" />
            </span>
          )}
        </div>

        <div className=" w-full md:mt-12 mt-0 bg-[#252525] flex-1 grid grid-rows-3 md:py-[30%] p-0 text-white ">
          <button className="  transition duration-1000 rounded-3xlxl md:px-6 px-32 hover:bg-black hover:text-white  ">
            <a
              href={Links[0].link}
              className="flex justify-between items-center"
            >
              <TiFlashOutline className="h-[100px] w-[100px] text-white" />
              <span>{Links[0].name}</span>
            </a>
          </button>
          <button className=" transition duration-1000 rounded-3xlxl md:px-6 px-32 hover:bg-black hover:text-white  ">
            <a
              href={Links[1].link}
              className="flex justify-between items-center"
            >
              <CiDumbbell className="h-[100px] w-[100px] text-white" />
              <span>{Links[1].name}</span>
            </a>
          </button>
          <button className="transition duration-1000 rounded-3xlxl md:px-6 px-32 hover:bg-black hover:text-white   ">
            <a
              href={Links[2].link}
              className="flex justify-between items-center"
            >
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M4 21V18.5C4 15.4624 6.46243 13 9.5 13H14.5C17.5376 13 20 15.4624 20 18.5V21M8 21V18M16 21V18M11 9H7.5C6.67157 9 6 8.32843 6 7.5V6.5C6 5.16725 6.57938 3.96983 7.5 3.14585M18 8.00001V6.50001C18 5.16726 17.4206 3.96983 16.5 3.14585M20 7.5V6M4 7.5V6M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                    stroke="##ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.4"
                  ></path>
                </g>
              </svg>{" "}
              <span>{Links[2].name}</span>
            </a>
          </button>
        </div>
      </aside>

      <main className="h-screen w-full bg-black md:pl-[250px] text-white ">
        <article
          className={`absolute top-0 left-0 h-screen w-full md:pl-[250px] bg-black ${
            result ? "opacity-100 visible z-50" : "opacity-0 invisible -z-50"
          } transition-all duration-700`}
        >
          <RxReset
            className="absolute top-10 right-10 hover:rotate-180 transition-all text-white w-12 h-12 duration-700  "
            onClick={() => handleResult(false)}
          />

          <div className="grid place-items-center grid-rows-5 h-full w-full py-[15%] px-[10%] ">
            <h1>Result</h1>
            <div className="border border-white rounded-2xl h-full w-full grid grid-cols-2 content-center px-14 ">
              <div className="self-center">
                {" "}
                <span className="font-thin ">Maintain weight</span>{" "}
              </div>
              <div className="justify-self-end self-center">
                {" "}
                <div className="flex flex-col items-center">
                  <span className="text-center font-thin text-lg">
                    {result ? CalorieCounter() : ""}
                  </span>
                  <span className="text-gray-300 text-xs font-extralight">
                    Calories/day
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="border border-white rounded-2xl h-full w-full grid grid-cols-2 content-center px-14 ">
              <div>
                {" "}
                <span className="font-thin">Mild weight loss</span> <br />{" "}
                <span className="font-extralight text-xs text-gray-300">
                  0.25kg/week
                </span>{" "}
              </div>
              <div className="justify-self-end self-center">
                {" "}
                <div className="flex flex-col items-center">
                  <span className="text-center font-thin text-lg text-green-600">
                    {result ? CalorieCounter() - 250 : ""}
                  </span>
                  <span className="text-gray-300 text-xs font-extralight">
                    Calories/day
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="border border-white rounded-2xl h-full w-full grid grid-cols-2 content-center px-14 ">
              <div>
                {" "}
                <span className="font-thin">Weight loss</span> <br />{" "}
                <span className="font-extralight text-xs text-gray-300">
                  0.5kg/week
                </span>{" "}
              </div>
              <div className="justify-self-end self-center">
                {" "}
                <div className="flex flex-col items-center">
                  <span className="text-center font-thin text-lg text-yellow-600">
                    {result ? CalorieCounter() - 500 : ""}
                  </span>
                  <span className="text-gray-300 text-xs font-extralight">
                    Calories/day
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="border border-white rounded-2xl h-full w-full grid grid-cols-2 content-center px-14 ">
              <div>
                {" "}
                <span className="font-thin">
                  Extreme weight loss
                </span> <br />{" "}
                <span className="font-extralight text-xs text-gray-300">
                  1kg/week
                </span>{" "}
              </div>
              <div className="justify-self-end self-center">
                {" "}
                <div className="flex flex-col items-center">
                  <span className="text-center font-thin text-lg text-red-600">
                    {result ? CalorieCounter() - 1000 : ""}
                  </span>
                  <span className="text-gray-300 text-xs font-extralight">
                    Calories/day
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="absolute top-16 left-5 md:invisible">
          {!status ? (
            <div>
              <span onClick={() => handleStatus()}>
                <AiOutlineMenu className="w-8 h-8 text-white lg:invisible visible hover:rotate-90 transition-all duration-700" />
              </span>
            </div>
          ) : (
            <span className="hidden"></span>
          )}
        </div>
        <div className="px-[20%] h-[10vh] flex justify-center">
          <TiFlashOutline className=" w-full h-full object-fill " />
        </div>
        <article className=" md:px-[20%] px-[10%] h-[90vh] pb-[5vh]   ">
          <div className="grid grid-cols-2 grid-rows-[5fr,1fr,1fr]  gap-x-40 h-[85vh]  ">
            <div className="grid grid-rows-4">
              <span className="text-center my-9">Information:</span>
              <div>
                <span className="block mb-8">Age:</span>
                <div className="relative">
                  <input
                    type="text"
                    className="outline-none bg-transparent border-b text-2xl border-white w-full"
                    value={age}
                    onChange={handleAgeChange}
                  />
                  <span className="absolute right-0 text-gray-500 opacity-90 font-thin">
                    yo
                  </span>
                </div>
              </div>
              <div>
                <span className="block mb-8">Height:</span>
                <div className="relative">
                  <input
                    type="text"
                    className="outline-none bg-transparent border-b text-2xl border-white w-full"
                    value={height}
                    onChange={handleHeightChange}
                  />
                  <span className="absolute right-0 text-gray-500 opacity-90 font-thin">
                    cm
                  </span>
                </div>
              </div>
              <div>
                <span className="block mb-8">Weight:</span>
                <div className="relative">
                  <input
                    type="text"
                    className="outline-none bg-transparent border-b text-2xl border-white  w-full "
                    value={weight}
                    onChange={handleWeightChange}
                  />
                  <span className="absolute right-0 text-gray-500 opacity-90 font-thin">
                    kg
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-4">
              <span className="text-center my-6">Activity Amount:</span>
              <button
                className={`border border-white rounded-2xl px-8 my-8 hover:bg-red-600 transition duration-1000 ${
                  low ? "bg-red-600" : ""
                }`}
                onClick={() => {
                  setLow(true);
                  setMedium(false);
                  setHigh(false);
                }}
              >
                Light
              </button>
              <button
                className={`border border-white rounded-2xl px-8 my-8 hover:bg-yellow-600 transition duration-1000 ${
                  medium ? "bg-yellow-600" : ""
                }`}
                onClick={() => {
                  setLow(false);
                  setMedium(true);
                  setHigh(false);
                }}
              >
                Moderate
              </button>
              <button
                className={`border border-white rounded-2xl px-8 my-8 hover:bg-green-600 transition duration-1000 ${
                  high ? "bg-green-600" : ""
                }`}
                onClick={() => {
                  setLow(false);
                  setMedium(false);
                  setHigh(true);
                }}
              >
                Active
              </button>
            </div>

            <div className="flex justify-between my-16 col-span-2  ">
              <div
                className={`border border-white rounded-2xl flex justify-between w-96 px-10 py-10 items-center mr-8  hover:bg-blue-500 transition duration-1000 cursor-pointer ${
                  gender ? "bg-blue-500" : ""
                }`}
                onClick={() => {
                  setGender(true);
                }}
              >
                <CgGenderMale className=" h-[50px] w-[50px] object-contain " />{" "}
                <span>Male</span>
              </div>
              <div
                className={`border border-white rounded-2xl flex justify-between  w-96 px-10 py-10 items-center ml-8 hover:bg-pink-500 transition duration-1000 cursor-pointer ${
                  gender === false ? "bg-pink-500" : ""
                }`}
                onClick={() => {
                  setGender(false);
                }}
              >
                <CgGenderFemale className="h-[50px] w-[50px] object-contain " />{" "}
                <span>Female</span>
              </div>
            </div>
            <div
              className="w-full box-border flex justify-center col-span-2 "
              onClick={() => {
                if (CalorieCounter() && age > 0 && weight > 0 && height > 0) {
                  {
                    handleResult(true), CalorieCounter();
                  }
                } else {
                  alert("Wrong information please fill correctly.");
                }
              }}
            >
              <button className="border border-white py-10 rounded-2xl bg-black  hover:bg-green-500 transition duration-1000 w-1/2 ">
                Confirm
              </button>
            </div>
          </div>
        </article>
      </main>
    </>
  ) : (
    <article className="h-screen w-screen bg-black grid place-items-center">
      <h1 className="text-2xl text-white">Go to the Signin page</h1>
      <img src="/right.gif" width={300} height={300} alt="" />
      <button
        onClick={() => {
          router.push("/sign-in");
        }}
        className="bg-black border border-white rounded-lg py-2 px-4 text-white transition-all duration-700 hover:bg-white hover:text-black my-10 "
      >
        Click here
      </button>
    </article>
  );
}
