import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InfoCircle.css';
import ButtonForNext from '../Buttons/ButtonForNext';

function InfoCircle() {
  const [pageNr, setPageNr] = useState(1);
  const [animationActive, setAnimationActive] = useState(false);
  const navigate = useNavigate(); 

  const handleStartClick = () => {
    setAnimationActive(true);

    setTimeout(() => {
      navigate('/game');
    }, 2000); 
  };

  return (
    <div className={`rule_box ${animationActive ? 'animate' : ''}`}>
      {pageNr === 1 ? (
        <>
          <h1>Rules</h1>
          <p>
            You start with <b> € 100</b>. You need to survive the school year
            with enough money to buy yourself the prom dress of your dreams.
          </p>
        </>
      ) : pageNr === 2 ? (
        <>
          <h1>Rules</h1>
          <p>
            You start with your wardrobe from last year. It is your responsibility now to make it last more than just a year!
          </p>
        </>
    ) : pageNr === 3 ? (
      <>
        <h1>Rules</h1>
        <p>
          Before each event starts it might be smart to check your wardrobe. <br /> Item's durability goes down after each event.
        </p>
      </>
    ) : (
      <>
        <h1>Rules</h1>
        <p>For each event you are going to be presented the choice between buying or wearing from the closet</p>
        <p><b>Prepare your fashion self for various challenges!</b></p>
      </>
    )}

      {pageNr < 4 ? (
        <ButtonForNext
          label="Next >"
          onClick={() => setPageNr(pageNr + 1)}
        />
      ) : (
        <ButtonForNext 
          label="Start the Game"
          onClick={handleStartClick}
        />
      )}
    </div>
  );
}

export default InfoCircle;