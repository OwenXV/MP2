import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"
import FAQ from "./pages/FAQ"
import Navigation from "./components/Navigation"
import Movies from "./pages/Movies"
import Tvshow from "./pages/Tvshow";
import Login from "./pages/Login"
import Error from "./pages/Error"
import SharedLayout from "./pages/SharedLayout"
import LandingPage from "./pages/Landing";

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<LandingPage/>}/> 
        <Route path='/' element ={<SharedLayout/>}>
        <Route path='Home' element={<Home/>}/>
          <Route path='FAQ' element={<FAQ/>}/>
          <Route path='Movies' element={<Movies/>}/>
          <Route path='Tvshow' element={<Tvshow/>}/>
          <Route path='Login' element={<Login/>}/>
        </Route>
        <Route path='*' element={<Error/>}/>  
      </Routes>
    </BrowserRouter>
  )
}

export default App
