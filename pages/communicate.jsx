import { TiFlashOutline } from "react-icons/ti";
import { CiDumbbell } from "react-icons/ci";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { useStore } from "@/client/context";
import { getValue } from "@/utils/common";
import { signOut } from "next-auth/react";
import { authConstants } from "@/client/context/constants";
import { useForm, ValidationError } from "@formspree/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [state, handleSubmit] = useForm("mgebjvdo");
  if (state.succeeded) {
    router.push("/thankyou");
  }

  let Links = [
    { name: "Calorie Counter", link: "/counter" },
    { name: "Workout generator", link: "/workout" },
    { name: "Customer service", link: "/communicate" },
  ];

  const [status, setStatus] = useState(true);
  const handleStatus = () => {
    setStatus(!status);
  };
  const [state1, dispatch] = useStore();
  function findValueByKey(obj, key) {
    if (typeof obj !== "object" || obj === null) {
      return null; // Object is not valid, return null
    }

    if (key in obj) {
      return obj[key]; // Key found, return the corresponding value
    }

    // Recursively search for the key in nested objects
    for (const nestedKey in obj) {
      const nestedValue = findValueByKey(obj[nestedKey], key);
      if (nestedValue !== null) {
        return nestedValue; // Key found in nested object, return the value
      }
    }

    return null; // Key not found in the object
  }
  const user = findValueByKey(state1, "name");
  const authenticated = getValue(state1, ["user", "authenticated"], false);

  return authenticated ? (
    <main className="md:h-screen  w-full  bg-black md:pl-[250px] text-white transition-all ">
      <aside
        className={`md:w-[250px] bg-[#252525] h-screen md:h-screen absolute top-0 left-0 shadow-2xl md:py-[4%] md:visible  md:flex md:flex-col text-black rounded-r-2xl  grid transition-all ${
          status ? "w-full" : "w-0 overflow-hidden"
        }  `}
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

      <div className="w-full h-[15vh] ">
        <div className="absolute top-16 left-5 md:invisible">
          {!status ? (
            <div>
              <span onClick={() => handleStatus()}>
                <AiOutlineMenu className="w-8 h-8 text-white md:invisible visible hover:rotate-90 transition-all duration-700" />
              </span>
            </div>
          ) : (
            <span className="hidden"></span>
          )}
        </div>
        <div className="h-full  pt-6 flex justify-between px-12">
          <div className="flex justify-start items-center w-[50%]">
            <h2
              className="text-sm m-0 px-4 py-2 rounded-xl cursor-pointer border border-white transition-all duration-700 hover:bg-white hover:text-black"
              onClick={() => {
                const result = signOut({
                  redirect: false,
                }).then((result) => {
                  dispatch({
                    type: authConstants.LOGIN_FAILURE,
                  });
                });
              }}
            >
              Log out
            </h2>
          </div>
          <div className="flex justify-end items-center w-[50%]">
            {authenticated ? (
              <h2 className="text-sm m-0 pr-6">Hello{" " + user + "!"}</h2>
            ) : (
              <h2 className="text-sm m-0 pr-6">Hello guest</h2>
            )}
          </div>
        </div>
      </div>
      <article className=" md:px-[10%] px-[5%] h-[85vh] bg-black  text-black  transition-all lg:w-1/2 mx-auto ">
        <h1 className="text-3xl text-white text-center">Customer service</h1>
        <form onSubmit={handleSubmit} className="flex flex-col py-[20vh] ">
          <input
            id="email"
            type="email"
            name="email"
            className="bg-black border border-white rounded-lg py-2 px-4 text-white my-10 "
            placeholder="type your email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            className="bg-black border border-white rounded-lg py-2 px-4 text-white my-10 "
            placeholder="type your questions here!"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-black border border-white rounded-lg py-2 px-4 text-white transition-all duration-700 hover:bg-white hover:text-black my-10 "
          >
            Submit
          </button>
        </form>
      </article>
    </main>
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
