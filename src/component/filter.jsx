
import { useContext, useState } from "react";
import {TbLogout}  from "react-icons/tb"
import { Cryptocontext } from "../context/cryptoconetxt";
export const Filter = () => {
    const [currinpu,setinpu]=useState("")
    const {setcurrency}=useContext(Cryptocontext)
    const handlecureency=(e)=>{
        
         e.preventDefault();
         
        setcurrency(currinpu)
    }
  return (
    <div>
        <form className="flex w-40 mr-16 items-center justify-between" onSubmit={handlecureency}>
            <label htmlFor="usd" className="font-bold">currency:</label>
            <input type={"text"} value={currinpu} id="usd" onChange={(e)=>setinpu(e.target.value)} className="w-16 h-7  p-1 font-nunito text-[14px] bg-gray-200  border border-transperant focus:border-cyan rounded placeholder:text-bg-gray-100 placeholder:px-1 outline-none" placeholder="usd"/>
            <button type="submit" ><TbLogout size={20} className="text-cyan"/></button>
        </form>
        </div>
  )
}
