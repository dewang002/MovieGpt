import React from 'react'
import {LOGO} from '../Utils/constents' //this curly bracess is imp here
function Header() {
  return (
    <div className='h-24 w-full absolute z-[999]'>
     <img className='md:w-[16vw] w-[38vw]' src={LOGO}/>
    </div>
  )
}

export default Header
