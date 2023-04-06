import {Link, Outlet} from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from  '../components/Footer'


function Home() {
  return (
    <>
        <Navigation/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Home