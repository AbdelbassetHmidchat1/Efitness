import Navbar from "../components/Nav"
import Image from "next/image";
import flash from "../public/flash.png";
import workout from "../public/workout.png";



export default function Home() {
  
  return (
    <>
    <main className="h-screen w-full ">
    <Navbar/>
    <article className="h-screen w-full bg-white ">
      <img src="/man.png" className=" w-full h-full object-fill pt-[5vh]" />
        <div className=" w-1/3 h-full absolute top-0 left-0 flex items-center ">
        <h1 className="text-4xl pl-16">
        <span className="md:text-[100px] md:leading-[6rem] text-[50px] leading-[3rem] transition-all ">Where Fitness becomes your lifestyle</span>
        </h1>





        </div>

      </article>
    <article className="h-screen bg-white md:grid md:grid-cols-3 md:grid-rows-[1fr,2fr] md:place-items-center md:py-28 text-center   " id="features">
      <h1 className=" col-span-3 m-0">Test your limits</h1>
      <div className=" grid grid-rows-3 place-items-center w-full " >
        <span className="self-end mb-24 ">Calorie counter</span>
      <Image src={flash} width={"300px"} height={"300px"}/>
      <span className="self-start mt-24 w-[40%] ">It all starts with a good diet!</span>
      </div>
      <div className=" grid grid-rows-3 place-items-center w-full " >
        <span className="self-end mb-24">Workout generator</span>
      <Image src={workout} width={"300px"} height={"300px"} />
      <span className="self-start mt-24 w-[40%] ">generates a variety of workouts that are flexible for your time and needs</span>
      </div>
      <div className=" grid grid-rows-3 place-items-center w-full ">
      <span className="self-end mb-24">Customer service</span>
      <img src="/notepad.svg" width={300} height={300}/>
      <span className="self-start mt-24 w-[40%]">Ask an expert about further details</span>
      </div>

    </article>
    <article className="h-screen w-full bg-white  text-center py-36 md:grid md:grid-cols-2 md:grid-rows-[1fr,2fr] md:place-items-center ">
      <h1 className="text-center col-span-2">Calorie counter</h1>
      <div className="flex justify-center  ">
        <video src="/counterVid.mp4" className=" object-fit w-[90%] rounded-full my-16 md:m-0" muted loop autoPlay  ></video>
      </div>
      <div className="grid place-items-center md:block static">
        <Image src={flash}  />
      </div>


    </article>
    <article className="h-screen w-full bg-white  text-center py-36 md:grid md:grid-cols-2 md:grid-rows-[1fr,2fr] md:place-items-center ">
      <h1 className="text-center col-span-2">Workout Generator</h1>
      <div className="flex justify-center  ">
        <video src="/workoutVid.mp4" className=" object-fit w-[90%] rounded-full my-16 md:m-0 translate-x-7" muted loop autoPlay  ></video>
      </div>
      <div className="grid place-items-center md:block static">
        <Image src={workout}  />
      </div>



    </article>
    <article className="h-screen w-full bg-white  text-center py-36 md:grid grid-cols-2 md:grid-rows-[1fr,2fr] md:place-items-center ">
      <h1 className="text-center col-span-2">Customer service</h1>
      <div className="flex justify-center  ">
        <video src="/customerVid.mp4" className=" object-fit w-[90%] rounded-full my-16 md:m-0" muted loop autoPlay  ></video>
      </div>
      <div className="grid place-items-center md:block static">
      <img src="/notepad.svg" width={300} height={300}/>
      </div>



    </article>


    </main>




  
  

    </>
    
  )
}