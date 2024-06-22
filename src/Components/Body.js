import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
function Body() {
 const approute=createBrowserRouter([
    {
        path:"/",
        element:<Login />
    },
    {
        path:"/browse",
        element:<Browse />
    }
 ])
  return (
    <div className='h-[100vh] w-[100vw] bg-zinc-900'>
      <RouterProvider router={approute}/>
    </div>
  )
}

export default Body
