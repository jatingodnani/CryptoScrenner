import {AiFillCaretDown} from "react-icons/ai"
import { Cryptocontext } from "../context/cryptoconetxt"
import { useContext } from "react"

const Sorting = () => {
    const {setsortby}=useContext(Cryptocontext)

  return (
    <div>
        <label className='mr-10  flex items-center justify-between relative'>
            <span className='font-bold'>sort by:</span>
            <select
            onClick={(e)=>setsortby(e.target.value)}
             name="sort-by" 
            className='border leading-4 py-1
             capitalize focus:outline-0  pl-2 pr-2 ml-1 
              outline-none bg-gray-200 rounded font-nunito text-gray-100 cursor-pointer'>
   
                <option value="market_cap_desc">market cap desc</option>
                <option value="market_cap_inc">market cap inc</option>
                <option value="volume_inc">volume inc</option>
                <option value="volume_desc">volume desc</option>
                <option value="id_desc">value desc</option>
                <option value="id_asc">value asc</option>
                <option value="gecko_asc">gecko asc</option>
                <option value="gecko_desc">gecko desc</option>
            </select>
            <AiFillCaretDown size={20} className="absolute text-cyan right-0"/>
        </label>
    </div>
  )
}

export default Sorting