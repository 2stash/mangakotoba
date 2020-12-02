import React from 'react';
import {Link} from 'react-router-dom';
import naruto from "../../images/naruto.jpg";
import bleach from "../../images/bleach.jpg";
import gintama from "../../images/gintama.jpg";
import onepunchman from "../../images/one-punch-man.jpg";
import onepiece from "../../images/one-piece-colored.jpg";
import dragonball from "../../images/dragon-ball.jpg";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const Home = () => {
  const SimpleForm = () => <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>Use Our Custom Wordlists to Start Reading Manga in Japanese Now!</h1>
        <Link to='/books'><button className="btn">Search the Booklist</button></Link>

      </div>
      <div className="signup-form">
      <h2>Signup to get notified when new books and features are released!</h2>
        <SimpleForm />
      </div>

      {/* <div className="home-images">

      <div className='home-image'>
            <img src={naruto} alt="naruto" />
        </div>
        <div className='home-image'>
          <img src={bleach} alt='bleach' />
        </div>
        <div className='home-image'>
          <img src={dragonball} alt='dragon ball' />
        </div>
        <div className='home-image'>
          <img src={gintama} alt='gintama' />
        </div> */}
        {/* <div className='home-image'>
          <img src={onepiece} alt='one piece' />
        </div>
        <div className='home-image'>
          <img src={onepunchman} alt='one punch man' />
        </div> */}

      {/* </div> */}


    </div>
  )
}

export default Home
