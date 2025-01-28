import { getGlobalIP } from "@/api";
import { useEffect, useState } from "react";

export const useIPFilter = (): {
  isWhiteIP: boolean | undefined;
} => {
  const [isWhiteIP, setIsWhiteIP] = useState<boolean | undefined>();

  const getGlobalIPByApi = async () => {
    const globalIP = await getGlobalIP()
    console.log(globalIP)
    if(globalIP == "202.15.17.104"){
      setIsWhiteIP(true)
    } else {
      setIsWhiteIP(false)
    }
  }

  getGlobalIPByApi()
  return {isWhiteIP}


  // useEffect(() => {
  //   if(globalIP == "")
  //   setIsWhiteIP(true)
  // }, []);

  // return {isWhiteIP, status};
};