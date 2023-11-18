import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

const Logo = () => {
  return (
    <Link to="/"
    className="absolute left-[20px] top-[20px] text-cyan flex flex-col items-center
     [text-decoratio:none] text-[22px]">  
    <img src={logo} className="w-[70px]"/>
        <span>Crypto Insights</span>
    </Link>
  )
}

export default Logo