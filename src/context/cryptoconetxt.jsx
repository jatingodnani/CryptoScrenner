
import { createContext, useEffect, useState } from "react";
import { cryptoalldatafromapi, searchqu } from '../cryptoapi';
// first create context
export const Cryptocontext=createContext()
export const Cryptoprovider=({children})=>{
    const [cryptoalldata,setalldata]=useState([]);
   const [selectcoin,setselectcoin]=useState("")
  const [currency,setcurrency]=useState("usd")
 const [sortby,setsortby]=useState("market_cap_desc")

useEffect(()=>{
    cryptoalldatafromapi(currency,selectcoin,sortby,setalldata)
        },
        [currency,selectcoin,sortby]);

const contextobject={
    cryptoalldata:cryptoalldata,
    setalldata:setalldata,
    setselectcoin:setselectcoin,
    setcurrency:setcurrency,
    currency:currency,
    setsortby:setsortby
}
   return (<Cryptocontext.Provider value={contextobject}>
    {children}
   </Cryptocontext.Provider>)
}