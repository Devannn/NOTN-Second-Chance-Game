import "./Introduction.css";
import ButtonTriangle from "../../components/Buttons/ButtonTriangle.jsx";
import BgIntro from "../../assets/logo-white.png";
import { useState } from "react";
import Button from "../../components/Buttons/Button.jsx";
import PromCards from "../../components/Cards/PromCards.jsx";

export default function Introduction2() {
  const [pageNr, setPageNr] = useState(1);
  return (
    <div className="introduction-wrapper">
      <div className="content">
        <img className="bg-intro-img" src={BgIntro}></img>

        <div className="intro-information">
          {pageNr === 1 ? (
            <h2>
              Fast fashion is one of the biggest challenges of our time. Every
              year, millions of tons of clothing end up in landfills, polluting
              our planet and wasting resources.
            </h2>
          ) : pageNr === 2 ? (
            <>
              <h2>
                "Behind the cheap price tags are hidden costs—environmental
                destruction, exploitative labor, and a throwaway culture."
              </h2>
              <h2>
                Can you navigate the temptations of fast fashion, stay on trend,
                and still make sustainable choices?
              </h2>
            </>
          ) : pageNr === 3 ? (
            <>
              <h1>Your goal- look your best for Prom!</h1>
              <h2>Try and unlock the dresses!</h2>
              <PromCards type="dress-container-intro"></PromCards>
            </>
          ) : (
            <>
              <div className="intro-4-information">
                <h1>Can you survive the school year and reach Prom? </h1>
                <h2>
                  During this game you will have to make choices between fast
                  fashion and slow fashion.
                </h2>
              </div>
              <div className="intro-4-informaiton">
                {/* <p>Test your fashion skills!</p> */}
                <h3>Can you beat the game?</h3>
              </div>
            </>
          )}
        </div>

        {pageNr <= 3 ? (
          <div className="button-wrapper">
            {pageNr >= 2 ? (
              <ButtonTriangle
                left
                onClick={() => setPageNr(pageNr - 1)}
              ></ButtonTriangle>
            ) : (
              <div></div>
            )}
            <ButtonTriangle
              onClick={() => setPageNr(pageNr + 1)}
            ></ButtonTriangle>
          </div>
        ) : (
          <Button link="/rules" label={"just beat it"}></Button>
        )}
      </div>
    </div>
  );
}
