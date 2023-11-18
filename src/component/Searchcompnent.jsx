import React, { useContext, useEffect, useState } from 'react'
import {AiOutlineSearch} from "react-icons/ai"

import { searchqu} from '../cryptoapi';
import { Cryptocontext } from '../context/cryptoconetxt';
import { Filter } from './filter';
import Sorting from './sorting';

export const Searchcompnent = () => {
    const [inpuval,setinpu]=useState("")
    const [query,setsearchquer]=useState([]);
   const {setselectcoin}=useContext(Cryptocontext);
  const handleeachcard=(ids)=>{
      setselectcoin(ids)
      setinpu("")
    
  }
  
useEffect(()=>{
    const id=setTimeout(()=>{
        searchqu(inpuval,setsearchquer)
},300)

return ()=>{
    clearTimeout(id)
}
},[inpuval])

  return (
    <div className='w-full h-[40px] justify-between box-border py-2 
    flex items-center mb-6 border border-gray-100 font-nunito'>
        <form className="w-96 font items-center relative" >
            <input
             placeholder='search here...' 
              value={inpuval}
           className='w-full outline-0 border-transparent placeholder:text-gray-100 placeholder-p-2 py-1 px-4 text-sm ml-4 bg-gray-200 border focus:border-cyan rounded' 
           type='text'
           onChange={(e)=>setinpu(e.target.value)}
           />
        <button
      
        className="absolute right-0 bottom-1.5  cursor-pointer"
      >
        <AiOutlineSearch className='text-cyan' size={20} />
      </button>
   </form>
   
 {
    inpuval?.length>0?
    <div className='w-96 px-2 h-[150px]  scrollbar-thin scrollbar-thumb-cyan bg-gray-200 flex flex-col text-white border absolute top-10 left-4 bg-opacity-60 
    rounded backdrop-blur-md  overflow-auto  '>
   
{
   query.length>0? query.map((item,index)=>(
<div key={index} onClick={()=>handleeachcard(item.id)} className='w-full p-0 hover:bg-gray-200 cursor-pointer   h-[30px] flex items-center  text-center mt-2 border-b border-gray-100'>
    <img className='mx-1.5 h-[1.5rem] w-[1.5rem]'   src={item.thumb}  />
      {item.name}
        </div> 
   )):<div className="flex justify-center items-center h-screen">
   <div className="animate-spin rounded-full h-8 w-8 border-4 border-cyan border-b-gray-200 "></div>
 </div>
 
 
 
}
       
    
    </div>:null
 }   
   <Filter/>
     <Sorting/>
    </div>
  )
}
