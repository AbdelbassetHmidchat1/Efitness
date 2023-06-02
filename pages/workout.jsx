import { CiDumbbell } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { TiFlashOutline } from "react-icons/ti";
import { useState } from "react";
import { useStore } from "@/client/context";
import { useRouter } from "next/router";
import { getValue } from "@/utils/common";


export default function Workout() {
  const router=useRouter()
  const [state1, dispatch] = useStore();
  const authenticated = getValue(state1, ["user", "authenticated"], false);

  let Links = [
    { name: "Calorie Counter", link: "/counter" },
    { name: "Workout generator", link: "/workout" },
    { name: "Customer service", link: "/communicate" },
  ];
  const [status, setStatus] = useState(true);
  const [day, setDay] = useState(null);
  const handleStatus = () => {
    setStatus(!status);
  };
  const handleDay = (day) => {
    setDay(day);
  };

  let workoutPrograms = {
    fullBody: {
      day1: [
        {
          exercises: [
            {
              legs: [
                {
                  name: "Squat",
                  videoLink: "https://example.com/squat-video",
                },
                {
                  name: "Lying leg curl",
                  videoLink: "https://example.com/squat-video",
                },
              ],

              Back: [
                {
                  name: "Lat pulldown",
                  videoLink: "https://example.com/squat-video",
                },
                {
                  name: "Machine Seated Rows",
                  videoLink: "https://example.com/squat-video",
                },
              ],
              Chest: [
                {
                  name: "Bench Press (Dumbbells)",
                  videoLink: "https://example.com/squat-video",
                },
                {
                  name: "Incline Bench Press (Dumbbells)",
                  videoLink: "https://example.com/squat-video",
                },
              ],
              Arms: [
                {
                  name: "Biceps Curl (Dumbbell)",
                  videoLink: "https://example.com/squat-video",
                },
                {
                  name: "Triceps Rope Pushdown (Rope)",
                  videoLink: "https://example.com/squat-video",
                },
              ],
              Core: [
                {
                  name: "Plank",
                  videoLink: "https://example.com/squat-video",
                },
              ],
            },
          ],
        },
      ],
    },
    twoDaySplit: {
      day1: [
        {
          exercises: [
            {
              Back: [
                {
                  name: "Lat Pulldown",
                  videoLink: "https://example.com/exercise1-back-video",
                },
                {
                  name: "Seated Machine Row",
                  videoLink: "https://example.com/exercise2-back-video",
                },
              ],
              Chest: [
                {
                  name: " Bench press (Dumbbells)",
                  videoLink: "https://example.com/exercise1-chest-video",
                },
                {
                  name: "Cable Fly Crossover",
                  videoLink: "https://example.com/exercise2-chest-video",
                },
              ],
              Shoulders: [
                {
                  name: "Shoulder press (Dumbbell)",
                  videoLink: "https://example.com/exercise1-shoulders-video",
                },
                {
                  name: "Lateral raises (Dumbbell)",
                  videoLink: "https://example.com/exercise2-shoulders-video",
                },
              ],
              Biceps: [
                {
                  name: "Biceps Curl (EZ Bar Curl)",
                  videoLink: "https://example.com/exercise1-biceps-video",
                },
              ],
              Triceps: [
                {
                  name: "Triceps Pushdown (Rope)",
                  videoLink: "https://example.com/exercise1-triceps-video",
                },
              ],
            },
          ],
        },
      ],
      day2: [
        {
          exercises: [
            {
              Quads: [
                {
                  name: "Smith Machine Squat",
                  videoLink: "https://example.com/exercise1-back-video",
                },
                {
                  name: " Walking Lunges (Dumbbell)",
                  videoLink: "https://example.com/exercise2-back-video",
                },
              ],
              Hamstrings: [
                {
                  name: " Romanian Deadlift (Dumbbell)",
                  videoLink: "https://example.com/exercise1-chest-video",
                },
                {
                  name: " Lying leg Curl ",
                  videoLink: "https://example.com/exercise2-chest-video",
                },
              ],
              Glutes: [
                {
                  name: " Hip thrusts (Barbell)",
                  videoLink: "https://example.com/exercise1-chest-video",
                },
              ],
              Calves: [
                {
                  name: "Calf Raises",
                  videoLink: "https://example.com/exercise1-shoulders-video",
                },
              ],
            },
          ],
        },
      ],
    },
    threeDaySplit: {
      day1: [
        {
          exercises: [
            {
              Chest: [
                {
                  name: "Bench Press",
                  videoLink: "https://example.com/exercise1-back-video",
                },
                {
                  name: "Incline Dumbbell Bench Press",
                  videoLink: "https://example.com/exercise2-back-video",
                },
                {
                  name: "Cable Crossovers",
                  videoLink: "https://example.com/exercise2-back-video",
                },
              ],
              Shoulders: [
                {
                  name: " Shoulder press (Dumbbells)",
                  videoLink: "https://example.com/exercise1-chest-video",
                },
                {
                  name: "Lateral raises",
                  videoLink: "https://example.com/exercise2-chest-video",
                },
                {
                  name: "Face Pulls",
                  videoLink: "https://example.com/exercise2-chest-video",
                },
              ],
              Triceps: [
                {
                  name: "Triceps Rope Pushdown",
                  videoLink: "https://example.com/exercise1-shoulders-video",
                },
                {
                  name: "Triceps skullcrusher (EZ Bar Curl)",
                  videoLink: "https://example.com/exercise2-shoulders-video",
                },
              ],
            },
          ],
        },
      ],
      day2: [
        {
          exercises: [
            {
              Back: [
                {
                  name: "Lat Pulldown",
                  videoLink: "https://example.com/exercise1-back-video",
                },
                {
                  name: " Seated Machine Row",
                  videoLink: "https://example.com/exercise2-back-video",
                },
                {
                  name: " T Bar Rows",
                  videoLink: "https://example.com/exercise2-back-video",
                },
                {
                  name: " Lat Pushdown",
                  videoLink: "https://example.com/exercise2-back-video",
                },
                {
                  name: " Dumbbell Shrugs ",
                  videoLink: "https://example.com/exercise2-back-video",
                },
              ],
              Biceps: [
                {
                  name: " Biceps Curl (EZ Bar Curl)",
                  videoLink: "https://example.com/exercise1-chest-video",
                },
                {
                  name: " Incline Curl (Dumbbell) ",
                  videoLink: "https://example.com/exercise2-chest-video",
                },
                {
                  name: " Hammer Cul (Rope)",
                  videoLink: "https://example.com/exercise2-chest-video",
                },
              ],
            },
          ],
        },
      ],
      day3: [
        {
          exercises: [
            {
              Quads: [
                {
                  name: "Smith Machine Squat",
                  videoLink: "https://example.com/exercise1-back-video",
                },
                {
                  name: " Walking Lunges (Dumbbell)",
                  videoLink: "https://example.com/exercise2-back-video",
                },
              ],
              Hamstrings: [
                {
                  name: " Romanian Deadlift (Dumbbell)",
                  videoLink: "https://example.com/exercise1-chest-video",
                },
                {
                  name: " Lying leg Curl ",
                  videoLink: "https://example.com/exercise2-chest-video",
                },
              ],
              Glutes: [
                {
                  name: " Hip thrusts (Barbell)",
                  videoLink: "https://example.com/exercise1-chest-video",
                },
              ],
              Calves: [
                {
                  name: "Calf Raises",
                  videoLink: "https://example.com/exercise1-shoulders-video",
                },
              ],
              Core: [
                {
                  name: "Plank",
                  videoLink: "https://example.com/squat-video",
                },
              ],
            },
          ],
        },
      ],
    },

    fourDaySplit: {
      day1: [
        {
          exercises: [
            {
              Chest: [
                {
                  name: "Bench Press",
                  videoLink: "https://example.com/exercise1-back-video",
                },
                {
                  name: "Incline Dumbbell Bench Press",
                  videoLink: "https://example.com/exercise2-back-video",
                },
                {
                  name: "Cable Crossovers",
                  videoLink: "https://example.com/exercise2-back-video",
                },
              ],
              Shoulders: [
                {
                  name: " Shoulder press (Dumbbells)",
                  videoLink: "https://example.com/exercise1-chest-video",
                },
                {
                  name: "Lateral raises",
                  videoLink: "https://example.com/exercise2-chest-video",
                },
                {
                  name: "Face Pulls",
                  videoLink: "https://example.com/exercise2-chest-video",
                },
              ],
              Triceps: [
                {
                  name: "Triceps Rope Pushdown",
                  videoLink: "https://example.com/exercise1-shoulders-video",
                },
                {
                  name: "Triceps skullcrusher (EZ Bar Curl)",
                  videoLink: "https://example.com/exercise2-shoulders-video",
                },
              ],
            },
          ],
        },
      ],
      day2: [
        {
          exercises: [
            {
              Back: [
                {
                  name: "Lat Pulldown",
                  videoLink: "https://example.com/exercise1-back-video",
                },
                {
                  name: " Seated Machine Row",
                  videoLink: "https://example.com/exercise2-back-video",
                },
                {
                  name: " T Bar Rows",
                  videoLink: "https://example.com/exercise2-back-video",
                },
                {
                  name: " Lat Pushdown",
                  videoLink: "https://example.com/exercise2-back-video",
                },
                {
                  name: " Dumbbell Shrugs ",
                  videoLink: "https://example.com/exercise2-back-video",
                },
              ],
              Biceps: [
                {
                  name: " Biceps Curl (EZ Bar Curl)",
                  videoLink: "https://example.com/exercise1-chest-video",
                },
                {
                  name: " Incline Curl (Dumbbell) ",
                  videoLink: "https://example.com/exercise2-chest-video",
                },
                {
                  name: " Hammer Cul (Rope)",
                  videoLink: "https://example.com/exercise2-chest-video",
                },
              ],
            },
          ],
        },
      ],
      day3: [
        {
          exercises: [
            {
              Quads: [
                {
                  name: "Smith Machine Squat",
                  videoLink: "https://example.com/exercise1-back-video",
                },
                {
                  name: " Walking Lunges (Dumbbell)",
                  videoLink: "https://example.com/exercise2-back-video",
                },
              ],
              Hamstrings: [
                {
                  name: " Romanian Deadlift (Dumbbell)",
                  videoLink: "https://example.com/exercise1-chest-video",
                },
                {
                  name: " Lying leg Curl ",
                  videoLink: "https://example.com/exercise2-chest-video",
                },
              ],
              Glutes: [
                {
                  name: " Hip thrusts (Barbell)",
                  videoLink: "https://example.com/exercise1-chest-video",
                },
              ],
              Calves: [
                {
                  name: "Calf Raises",
                  videoLink: "https://example.com/exercise1-shoulders-video",
                },
              ],
              Core: [
                {
                  name: "Plank",
                  videoLink: "https://example.com/squat-video",
                },
              ],
            },
          ],
        },
      ],
      day4: [
        {
          exercises: [
            {
              legs: [
                {
                  name: "Squat",
                  videoLink: "https://example.com/squat-video",
                },
                {
                  name: "Lying leg curl",
                  videoLink: "https://example.com/squat-video",
                },
              ],

              Back: [
                {
                  name: "Lat pulldown",
                  videoLink: "https://example.com/squat-video",
                },
                {
                  name: "Machine Seated Rows",
                  videoLink: "https://example.com/squat-video",
                },
              ],
              Chest: [
                {
                  name: "Bench Press (Dumbbells)",
                  videoLink: "https://example.com/squat-video",
                },
                {
                  name: "Incline Bench Press (Dumbbells)",
                  videoLink: "https://example.com/squat-video",
                },
              ],
              Arms: [
                {
                  name: "Biceps Curl (Dumbbell)",
                  videoLink: "https://example.com/squat-video",
                },
                {
                  name: "Triceps Rope Pushdown (Rope)",
                  videoLink: "https://example.com/squat-video",
                },
              ],
              Core: [
                {
                  name: "Plank",
                  videoLink: "https://example.com/squat-video",
                },
              ],
            },
          ],
        },
      ],
    },
    fiveDaySplit: {
      day1: [
        {
          exercises: [
            {
              Chest: [
                {
                  name: "Bench Press",
                  videoLink: "https://example.com/exercise1-back-video",
                },
                {
                  name: "Incline Dumbbell Bench Press",
                  videoLink: "https://example.com/exercise2-back-video",
                },
                {
                  name: "Cable Crossovers",
                  videoLink: "https://example.com/exercise2-back-video",
                },
              ],
              Shoulders: [
                {
                  name: " Shoulder press (Dumbbells)",
                  videoLink: "https://example.com/exercise1-chest-video",
                },
                {
                  name: "Lateral raises",
                  videoLink: "https://example.com/exercise2-chest-video",
                },
                {
                  name: "Face Pulls",
                  videoLink: "https://example.com/exercise2-chest-video",
                },
              ],
              Triceps: [
                {
                  name: "Triceps Rope Pushdown",
                  videoLink: "https://example.com/exercise1-shoulders-video",
                },
                {
                  name: "Triceps skullcrusher (EZ Bar Curl)",
                  videoLink: "https://example.com/exercise2-shoulders-video",
                },
              ],
            },
          ],
        },
      ],
      day2: [
        {
          exercises: [
            {
              Back: [
                {
                  name: "Lat Pulldown",
                  videoLink: "https://example.com/exercise1-back-video",
                },
                {
                  name: " Seated Machine Row",
                  videoLink: "https://example.com/exercise2-back-video",
                },
                {
                  name: " T Bar Rows",
                  videoLink: "https://example.com/exercise2-back-video",
                },
                {
                  name: " Lat Pushdown",
                  videoLink: "https://example.com/exercise2-back-video",
                },
                {
                  name: " Dumbbell Shrugs ",
                  videoLink: "https://example.com/exercise2-back-video",
                },
              ],
              Biceps: [
                {
                  name: " Biceps Curl (EZ Bar Curl)",
                  videoLink: "https://example.com/exercise1-chest-video",
                },
                {
                  name: " Incline Curl (Dumbbell) ",
                  videoLink: "https://example.com/exercise2-chest-video",
                },
                {
                  name: " Hammer Cul (Rope)",
                  videoLink: "https://example.com/exercise2-chest-video",
                },
              ],
            },
          ],
        },
      ],
      day3: [
        {
          exercises: [
            {
              Quads: [
                {
                  name: "Smith Machine Squat",
                  videoLink: "https://example.com/exercise1-back-video",
                },
                {
                  name: " Walking Lunges (Dumbbell)",
                  videoLink: "https://example.com/exercise2-back-video",
                },
              ],
              Hamstrings: [
                {
                  name: " Romanian Deadlift (Dumbbell)",
                  videoLink: "https://example.com/exercise1-chest-video",
                },
                {
                  name: " Lying leg Curl ",
                  videoLink: "https://example.com/exercise2-chest-video",
                },
              ],
              Glutes: [
                {
                  name: " Hip thrusts (Barbell)",
                  videoLink: "https://example.com/exercise1-chest-video",
                },
              ],
              Calves: [
                {
                  name: "Calf Raises",
                  videoLink: "https://example.com/exercise1-shoulders-video",
                },
              ],
              Core: [
                {
                  name: "Plank",
                  videoLink: "https://example.com/squat-video",
                },
              ],
            },
          ],
        },
      ],
      day4: [
        {
          exercises: [
            {
              Back: [
                {
                  name: "Lat Pulldown",
                  videoLink: "https://example.com/exercise1-back-video",
                },
                {
                  name: "Seated Machine Row",
                  videoLink: "https://example.com/exercise2-back-video",
                },
              ],
              Chest: [
                {
                  name: " Bench press (Dumbbells)",
                  videoLink: "https://example.com/exercise1-chest-video",
                },
                {
                  name: "Cable Fly Crossover",
                  videoLink: "https://example.com/exercise2-chest-video",
                },
              ],
              Shoulders: [
                {
                  name: "Shoulder press (Dumbbell)",
                  videoLink: "https://example.com/exercise1-shoulders-video",
                },
                {
                  name: "Lateral raises (Dumbbell)",
                  videoLink: "https://example.com/exercise2-shoulders-video",
                },
              ],
              Biceps: [
                {
                  name: "Biceps Curl (EZ Bar Curl)",
                  videoLink: "https://example.com/exercise1-biceps-video",
                },
              ],
              Triceps: [
                {
                  name: "Triceps Pushdown (Rope)",
                  videoLink: "https://example.com/exercise1-triceps-video",
                },
              ],
            },
          ],
        },
      ],
      day5: [
        {
          exercises: [
            {
              Quads: [
                {
                  name: "Smith Machine Squat",
                  videoLink: "https://example.com/exercise1-back-video",
                },
                {
                  name: " Walking Lunges (Dumbbell)",
                  videoLink: "https://example.com/exercise2-back-video",
                },
              ],
              Hamstrings: [
                {
                  name: " Romanian Deadlift (Dumbbell)",
                  videoLink: "https://example.com/exercise1-chest-video",
                },
                {
                  name: " Lying leg Curl ",
                  videoLink: "https://example.com/exercise2-chest-video",
                },
              ],
              Glutes: [
                {
                  name: " Hip thrusts (Barbell)",
                  videoLink: "https://example.com/exercise1-chest-video",
                },
              ],
              Calves: [
                {
                  name: "Calf Raises",
                  videoLink: "https://example.com/exercise1-shoulders-video",
                },
              ],
            },
          ],
        },
      ],
    },
  };
  const program = day;

  const workoutProgram = workoutPrograms[program];

  return authenticated ? (
    <>
      <aside
        className={`md:w-[250px] bg-[#252525] h-screen md:h-screen absolute top-0 left-0 shadow-2xl md:py-[4%] md:visible  md:flex md:flex-col text-black rounded-r-2xl  grid transition-all ${
          status ? "w-full" : "w-0 overflow-hidden"
        } z-[998] `}
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
        <div className=" w-full md:mt-12 mt-0 bg-[#252525] flex-1 grid grid-Rows-3 md:py-[30%] p-0 text-white ">
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
      <main className="w-full bg-black md:pl-[250px] text-white flex flex-col ">
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
        <div className="h-screen w-full py-[5%]">
          <div className="flex justify-center items-center h-full w-full flex-col   ">
            <div className="flex justify-center items-center flex-col h-1/2">
              <CiDumbbell className="text-white object-fill w-64 h-64" />
              <h1 className="text-4xl ">Workout generator</h1>
            </div>
            <article className="grid place-items-center font-['Clash_Display'] h-1/2 w-full   ">
              <h1 className="text-lg mt-12 font-extralight">
                How many times do you want to work out?
              </h1>
              <div className="md:w-2/3 h-[0.125rem] bg-white rounded-2xl relative w-4/5 transition-all ">
                <div className="grid grid-cols-5 place-items-center w-full top-[-24px] absolute   ">
                  <div>
                    <div
                      className="h-12 w-12  bg-black  rounded-full  text-white font-extrabold border-2 border-white flex justify-center items-center cursor-pointer transition-all duration-700 hover:bg-red-700"
                      onClick={() => handleDay("fullBody")}
                    >
                      1
                    </div>
                  </div>
                  <div>
                    <div
                      className="h-12 w-12  bg-black  rounded-full  text-white font-extrabold border-2 border-white flex justify-center items-center cursor-pointer transition-all duration-700 hover:bg-red-400 "
                      onClick={() => handleDay("twoDaySplit")}
                    >
                      2
                    </div>
                  </div>
                  <div>
                    <div
                      className="h-12 w-12  bg-black  rounded-full  text-white font-extrabold border-2 border-white flex justify-center items-center cursor-pointer transition-all duration-700 hover:bg-green-300 "
                      onClick={() => handleDay("threeDaySplit")}
                    >
                      3
                    </div>
                  </div>
                  <div>
                    <div
                      className="h-12 w-12  bg-black  rounded-full  text-white font-extrabold border-2 border-white flex justify-center items-center cursor-pointer transition-all duration-700 hover:bg-green-500 "
                      onClick={() => handleDay("fourDaySplit")}
                    >
                      4
                    </div>
                  </div>
                  <div>
                    <div
                      className="h-12 w-12  bg-black  rounded-full  text-white font-extrabold border-2 border-white flex justify-center items-center cursor-pointer transition-all duration-700 hover:bg-green-700 "
                      onClick={() => handleDay("fiveDaySplit")}
                    >
                      5
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        {day ? (
          <div
            className={`absolute top-0 left-0 w-full bg-black text-white ${
              day ? "visible opacity-100 z-[999]" : "invisible opacity-0 -z-50"
            }  md:px-80 px-[50px]   transition-all duration-700  `}
          >
            <div className="absolute top-10 right-10">
              {status ? (
                <span onClick={() => handleDay(null)}>
                  <AiOutlineClose className="w-12 h-12 text-white  visible hover:rotate-90 transition-all duration-700  " />
                </span>
              ) : (
                <span onClick={() => handleDay(null)}>
                  <AiOutlineClose className="w-12 h-12 text-white  visible hover:rotate-90 transition-all duration-700" />
                </span>
              )}
            </div>
            <h1 className="text-center my-28">Workout generated succesfully</h1>
            <table className="w-full  ">
              <thead>
                <tr>
                  <th className="border border-white px-4 py-2">Day</th>
                  <th className="border border-white px-4 py-2">Exercises</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(workoutProgram).map(([day, dayExercises]) => (
                  <tr key={day}>
                    <td className="border border-white py-2 text-center">
                      {day}
                    </td>
                    <td className="border border-white   ">
                      {Object.entries(dayExercises[0].exercises[0]).map(
                        ([muscleGroup, muscleExercises]) => (
                          <div
                            key={muscleGroup}
                            className="grid grid-cols-[1fr,1px,1fr] w-full gap-x-6  py-8 border-b border-white "
                          >
                            <div className="font-bold mb-2 text-2xl px-4">
                              {muscleGroup}
                            </div>
                            <div className="w-[1px] h-full bg-white"></div>

                            <div>
                              {muscleExercises.map((exercise) => (
                                <div className="mb-2 " key={exercise.name}>
                                  <div className="text-lg">{exercise.name}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="invisible"></div>
        )}
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
