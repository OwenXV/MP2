import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import Navigation from "./components/Navigation"
import Error from "./pages/Error"
import SharedLayout from "./pages/SharedLayout"




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<SharedLayout/>}>
          <Route index element={<Home/>}/>  
          <Route path='Categories' element={<Categories/>}/>
        </Route>
        <Route path='*' element={<Error/>}/>  
      </Routes>
    </BrowserRouter>
  )
}

export default App
