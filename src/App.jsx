import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link
} from "react-router-dom"
import Layout from "./components/Layout"
import Currencylayout from "./components/Currencylayout"
// import Home from "./pages/Home"
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    <Route path="/" element={<Currencylayout />}>

    {/* <Route path="about" element={<About />} /> */}
    {/* <Route path="contact" element={<Contact />} /> */}
    {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      
    </Route>
  )
)


function App() {
  return (
    <>
    <RouterProvider router={router} />

 
    </>
  )
}

export default App
