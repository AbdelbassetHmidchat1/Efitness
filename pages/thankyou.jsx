

import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter()

  return (
    <>

        <article className="  h-[100vh] bg-black  text-black  transition-all flex flex-col items-center justify-center w-screen ">
          <h1 className="text-3xl text-white text-center">Thank you!</h1>
          <img src="/success.gif" width={300} height={300}/>
          <h1 className="text-xl text-white text-center">Your email will be reviewed and reponded to as soon as possible!</h1>
          <h1 onClick={()=>{router.push("/workout")}} className="bg-black border border-white rounded-lg py-2 px-4 text-white transition-all duration-700 hover:bg-white hover:text-black my-10 cursor-pointer text-sm">Go back to the homepage</h1>

        </article>
    </>
  );
}
