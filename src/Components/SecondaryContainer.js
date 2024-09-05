
import Movielist from './Movielist'
import { useSelector } from 'react-redux'


function SecondaryContainer() {
   let movelist = useSelector(state=>state.movies)
   
  return (
    <div className='h-screen w-[100%] '>

      <div className='-mt-52 z-20 relative flex flex-col gap-10'>
      <Movielist title={"now playing"} movelist={movelist.nowPlaying}  />
      <Movielist title={"popular"} movelist={movelist.popularVideo}  />
      <Movielist title={"Top Movies"} movelist={movelist.nowPlaying}  />
      <Movielist title={"Thrill"} movelist={movelist.nowPlaying}  />
      </div>
    
    </div>
  )
}

export default SecondaryContainer
