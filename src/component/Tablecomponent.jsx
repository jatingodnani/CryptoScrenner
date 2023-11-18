import { useContext } from "react"
import { Cryptocontext } from "../context/cryptoconetxt"



export const Tablecompo = () => {
    const {cryptoalldata,currency}=useContext(Cryptocontext)
 
  return (
   <div className='flex w-full mb-12 flex-col border  border-gray-100 rounded box-border'>

    <table className="w-full h-full table-auto">
        <tr className="text-[18px] text-gray-200 font-nunito font-medium border-b border-gray-100 last:border-b-0 box-border">
            <th className="py-1 box-border">
                Asset
            </th>
            <th className="py-1">
            Name
            </th>
            <th className="py-1">
                Price
            </th>
            <th className="py-1"> 
                Total Volume
            </th>
            <th className="py-1">
                Market Cap Change
            </th>
            <th className="py-1">
                1M
            </th>
            <th className="py-1">
                24H
            </th>
            <th className="py-1">
                7D
            </th>
        </tr>
        <tbody>
            
         {
         cryptoalldata?.map((eachcoin)=>(
   <tr className="text-center font-nunito text-[16px] border-b border-gray-100 hover:bg-gray-200" key={eachcoin.id}>
        <th className="py-3 flex item-centern gap-2  justify-center "><img src={eachcoin.image} className="w-[20px]"/>{eachcoin.symbol}</th>
        <th className="py-3">{eachcoin.name}</th>
        <th className="py-3">
            { 
        new Intl.NumberFormat("en-IN", {
          style: "currency",
  currency: currency,
}).format(eachcoin.current_price)}</th>
        <th className="py-3">{eachcoin.total_volume}</th>
        <th className="py-3">{eachcoin.market_cap}</th>
         <th className={`py-3 ${eachcoin.price_change_percentage_1h_in_currency<0?"text-red":"text-green"}`}>{eachcoin.price_change_percentage_1h_in_currency.toFixed(2)}%</th>
        <th className={`py-3 ${eachcoin.price_change_percentage_24h_in_currency<0?`text-red`:`text-green`}`}>{eachcoin.price_change_percentage_24h_in_currency.toFixed(2)}%</th>
        <th className={`py-3 ${eachcoin.price_change_percentage_7D_in_currency<0?`text-red`:`text-green`}`}>{eachcoin.price_change_percentage_7d_in_currency.toFixed(2)}%</th>
            </tr>
             ))
         }
        </tbody>
    </table>

    </div>
  )
}
