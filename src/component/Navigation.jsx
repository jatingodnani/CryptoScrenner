import { NavLink } from "react-router-dom"

export const Navigation = () => {
  return (
    <nav className="w-[40%] ml- box-border  flex mt-16 align-middle border  border-cyan rounded-[5px] justify-around">
        <NavLink to="/"
        className={({isActive})=>{
           return `w-full  text-center m-2 font-nunito p-[3px] 
           ${isActive?`text-gray-300 bg-cyan`: `bg-gray-200 text-gray-100 hover:text-cyan ` }
           border-0 cursor-pointer capitalize font-semibold`
        }
    }
    >
           Crypto
        </NavLink>
                <NavLink to="/trending"
        className={({isActive})=>{
          return `w-full  text-center m-2 font-nunito p-[3px] 
           ${isActive?`text-gray-300 bg-cyan`: `bg-gray-200 text-gray-100 hover:text-cyan ` }
           border-0 cursor-pointer capitalize font-semibold`
        }
    }
    >
     Trending
       </NavLink>
       <NavLink to="/saved"
        className={({isActive})=>{
          return `w-full  text-center m-2 font-nunito p-[3px] 
           ${isActive?`text-gray-300 bg-cyan`: `bg-gray-200 text-gray-100 hover:text-cyan ` }
           border-0 cursor-pointer capitalize font-semibold`
        }
    }
    >
            Saved
        </NavLink>
    </nav>
  )
}
