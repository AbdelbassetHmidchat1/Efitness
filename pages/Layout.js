import { useStore } from "@/client/context";
import { authConstants } from "@/client/context/constants";
import { getValue } from "@/utils/common";
import { getSession } from "next-auth/react";
import { useEffect } from "react";

export default function Layout({ children }) {
    const [state, dispatch] = useStore();
  
    useEffect(() => {
      const fetchData = async () => {
        const authenticated = getValue(state, ["user", "authenticated"], false);
        if (!authenticated) {
          dispatch({ type: authConstants.LOGIN_REQUEST });
          try {
            const session = await getSession();
            
            if (session) {
              dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: session
              });
            }
          } catch (error) {
            console.error("Error getting session:", error);
          }
        } else {
          dispatch({
            type: authConstants.LOGIN_FAILURE,
            payload: null,
          });
        }
      };
  
      fetchData();
    }, []);
  
    return <div>{children}</div>;
  }
  