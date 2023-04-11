import {Link, Outlet} from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from  '../components/Footer'



function Landing() {
  return (
    <>
        <Navigation/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Landing