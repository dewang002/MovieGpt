import React from 'react'
import {LOGO} from '../Utils/constents' //this curly bracess is imp here
function Header() {
  return (
    <div className='h-24 w-full absolute z-[999]'>
     <img className='w-[16vw]' src={LOGO}/>
    </div>
  )
}

export default Header
