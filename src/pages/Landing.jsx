import React from 'react';
import {Link} from "react-router-dom";
import Footer from '../components/Footer';

import '../landing.css'


const LandingPage = () => {
  return (
  <>
      <header className="showcase">
            <div className="showcase-top">
                <img src="https://i.ibb.co/r5krrdz/logo.png "alt="logo"/>
                <Link to="/" className="btn btn-rounded text-white">
                    Sign In
                </Link>
            </div>
            <div className ="showcase-content">
                <h1>Unlimited movies, TV shows and more</h1>
                <p>Watch anywhere.Cancel Anytime</p>
                <Link to="/Home" className="btn btn-xl text-white">
                    Watch Free For 30 Days 
                    <i className="fas fa-chevron-right btn-icon"></i>
                </Link>
            </div>
            
    </header>
    <Footer/>

    </>

  );
};

export default LandingPage;