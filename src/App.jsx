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

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<SharedLayout/>}>
          <Route index element={<Home/>}/>  
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
