import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link
} from "react-router-dom"
import Layout from "./components/Layout"
import Currencylayout from "./components/Currencylayout"
import Cryptotaxes from "./pages/Cryptotaxes"
import FreeTools from "./pages/FreeTools"
import Getstarted from "./pages/Getstarted"
import Resourcecenter from "./pages/Resourcecenter"
// import Home from "./pages/Home"
import './App.css'
import Overview from "./pages/Overview"

import Fundamentals from "./pages/Fundamentals"
import News from "./pages/News"
import Sentiments from "./pages/Sentiment"
import Team from "./pages/Team"
import Technical from "./pages/Technicals"
import Tokenomics from "./pages/Tokenomics"



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route element={<Currencylayout />}>
           

            <Route index element={< Overview/>} />
            <Route path="fundamentals" element={< Fundamentals/>} />
            <Route path="news" element={< News/>} />
            <Route path="sentiments" element={< Sentiments/>} />
            <Route path="team" element={< Team/>} />
            <Route path="technicals" element={< Technical/>} />
            <Route path="tokenomics" element={< Tokenomics/>} />
            
      </Route>
      <Route path="cryptotaxes" element={<Cryptotaxes />} />
      <Route path="freetools" element={<FreeTools />} />
      <Route path="getstarted" element={<Getstarted />} />
      <Route path="resourcecenter" element={<Resourcecenter />} />

 
      
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
