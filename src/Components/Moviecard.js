import React from 'react'
import { Poster } from '../Utils/constents'
function Moviecard({poster}) {
  return (
    <div className='flex-shrink-0 rounded overflow-hidden'>
      <img alt='poster' src={Poster+poster} />
    </div>
  )
}

export default Moviecard
