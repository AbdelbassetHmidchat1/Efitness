import { useState } from "react";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useStore } from "@/client/context";
import { authConstants } from "@/client/context/constants";
import { getValue } from "@/utils/common";

export default function SignIn() {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [state,dispatch]=useStore()
  const user= getValue(state,["user","user"],null)
  const authenticated= getValue(state,["user","authenticated"],false)
  if(authenticated){
    router.replace('/workout')
  }



  const loginHandler = async (e) => {

    e.preventDefault();
    const payload = { email, password };
    let session = await getSession()
    const result = await signIn("credentials",{...payload,redirect:false})
    dispatch({type:authConstants.LOGIN_REQUEST})
    if(!result.error){
      const session = await getSession()
      dispatch({
        type:authConstants.LOGIN_SUCCESS,
        payload:session
      })
      router.replace('/workout')
    }else{
      dispatch({
        type:authConstants.LOGIN_FAILURE,
        payload: result.error

      })
      setErrorMessage("Email or password incorrect!")

    }
    setEmail('')
    setPassword('')

  };


  return (
    <>
      <main className="h-screen w-full ">
        <article className="h-screen w-full bg-white">
          <img
            src="/man.png"
            className="md:w-full md:h-full md:object-fill transition-all opacity-0 md:opacity-100 absolute top-0 left-0 md:static "
          />
          <form
            className="md:w-1/3 bg-slate-100 h-full absolute top-0 left-0 shadow-xl py-[5%] px-[5%] w-full transition-all grid place-items-center"
            onSubmit={loginHandler}
          >
            <h1 className="text-center mb-24">Sign in</h1>
            {errorMessage && (
              <p className="text-center text-red-600">{errorMessage}</p>
            )}
            <div className=" w-full mt-12">
              <span className=" font-['Montserrat'] font-light">
                Email adress
              </span>
              <input
                type="email"
                className=" w-full block bg-transparent border-black border-b outline-none  text-xl mt-2 pb-1 "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-12 w-full">
              <span className="font-light font-['Montserrat']">Password</span>
              <input
                type="text"
                className="w-full block bg-transparent border-black border-b outline-none text-xl mt-2 pb-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-24 grid place-items-center w-full  ">
              <button
                className=" bg-black text-white border-black border rounded-full py-4 hover:bg-slate-100 hover:border-black hover:border hover:text-black transition duration-700 w-[90%]  "
                type="submit"
              >
                <span className="font-['Montserrat'] font-light">Sign in</span>
              </button>
            </div>
          </form>
        </article>
      </main>
    </>
  );
}
