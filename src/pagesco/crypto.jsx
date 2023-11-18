import Pagination from "../component/Pagination"
import { Searchcompnent } from "../component/Searchcompnent"
import { Tablecompo } from "../component/Tablecomponent"


const Crypto = () => {
  return (
  <section className="w-[80%] h-full relative mt-16 mb-24">
      <Searchcompnent/>
   <Tablecompo/>
   <Pagination/>
    </section>
  )
}

export default Crypto