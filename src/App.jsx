
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Trending from './pagesco/trending'
import { Saved } from './pagesco/saved'
import Crypto from './pagesco/crypto'
import Logo from './component/logo'
import { Navigation } from './component/Navigation'
function App() {

  return (
  <main className='bg-gray-300  w-screen min-h-screen flex flex-col box
   content-center overflow-x-hidden items-center relative text-white font-nunito'>
    <Logo/>
    <Navigation/>
 
  <Routes>
    <Route path='/' element={<Crypto/>} />
  <Route path='/trending' element={<Trending />} />
  <Route path='/saved' element={<Saved />} />
  </Routes>
  </main>
 );

    
  
}

export default App
