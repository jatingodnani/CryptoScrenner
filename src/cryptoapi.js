
import axios  from "axios"
export const cryptoalldatafromapi=(currency,ids,sortby,setalldata)=>{
    console.log(sortby)
    try{
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${ids}&order=${sortby}&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`)
        .then(res=>setalldata([...res.data]))
      
    }catch(err){
        console.log(err)
    }
    
}

export const searchqu=(query,setsearchquery)=>{
    try{
    axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)
.then(res=>setsearchquery(res.data.coins))

    }catch(err){
        console.log(err)
    }
}
export const selecteachcard=(ids)=>{
    try{
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`)
        .then(res=>console.log(res.data))
      
    }catch(err){
        console.log(err)
    }
    
}
selecteachcard("")