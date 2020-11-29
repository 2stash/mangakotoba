import React from 'react'
import naruto from "../../images/naruto.jpg";
import bleach from "../../images/bleach.jpg";
import gintama from "../../images/gintama.jpg";
import onepunchman from "../../images/one-punch-man.jpg";
import onepiece from "../../images/one-piece-colored.jpg";
import dragonball from "../../images/dragon-ball.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text">
        <p>Stop wasting time looking up words and start reading</p>
        <p>MangaKotoba has premade wordlist so you can focus on reading Japanese!</p>
      </div>
      <div className="home-images">

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
        </div>
        {/* <div className='home-image'>
          <img src={onepiece} alt='one piece' />
        </div>
        <div className='home-image'>
          <img src={onepunchman} alt='one punch man' />
        </div> */}

      </div>


    </div>
  )
}

export default Home
