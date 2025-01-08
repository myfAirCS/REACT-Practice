import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// we can use app.js or app.jsx for outlet or create a new file as layout or root
import { Route, RouterProvider ,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import  Github,{githubInfoLoader}  from './components/Github/Github.jsx'
// const router =createBrowserRouter( [
//   {
//     path: '/',
//     element: <Layout />,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },{
//         path:"about",
//         element:<About/>
//       },{
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

// Used createBrowserRouter to create a router

const router=createBrowserRouter(
  createRoutesFromElements(
    < Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      {/* we Use HOOK {useParams} to destruct from url */}
      <Route path='user/:userid'   element={<User/>}  />
      <Route path='github' loader={githubInfoLoader} element={<Github/>} />
    </Route>
  )
)

//Used RouterProvider to provide the router to the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
