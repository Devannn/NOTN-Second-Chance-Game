import React from "react";
import "./PromCards.css";
import poorDress from "../../assets/clothes_for_game/poor_dress.png";
import averageDress from "../../assets/clothes_for_game/average_dress.png";
import expensiveDress from "../../assets/clothes_for_game/expensive_dress.png";

// function PromCards() {
//   return (
//     <div className="prom-card-wrapper">
//       <div className="dress-container">
//         <img className="prom-dress-img" src={poorDress} />
//         {/* <p>
//           50 <span>$</span>
//         </p> */}
//       </div>
//       <div className="dress-container">
//         <img className="prom-dress-img" src={averageDress} />
//         {/* <p>
//           100 <span>$</span>
//         </p> */}
//       </div>
//       <div className="dress-container">
//         <img className="prom-dress-img" src={expensiveDress} />
//         {/* <p>
//           200 <span>$</span>
//         </p> */}
//       </div>
//     </div>
//   );
// }

// export default PromCards;

export default function PromCards({ type }) {
  return (
    <div className="prom-card-wrapper">
      {type === "dress-container-prom" ? (
        <>
          <div className="card-price-wrapper">
            <div className="dress-container-prom">
              <img className="prom-dress-img" src={poorDress} />
            </div>
            <p>
              50 <span>€</span>
            </p>
          </div>
          <div className="card-price-wrapper">
            <div className="dress-container-prom">
              <img className="prom-dress-img" src={averageDress} />
            </div>
            <p>
              80 <span>€</span>
            </p>
          </div>
          <div className="card-price-wrapper">
            <div className="dress-container-prom">
              <img className="prom-dress-img" src={expensiveDress} />
            </div>
            <p>
              100 <span>€</span>
            </p>
          </div>
        </>
      ) : type === "dress-container-intro" ? (
        <>
          <div className="dress-container-intro">
            <img className="prom-dress-img" src={poorDress} />
          </div>
          <div className="dress-container-intro">
            <img className="prom-dress-img" src={averageDress} />
          </div>
          <div className="dress-container-intro">
            <img className="prom-dress-img" src={expensiveDress} />
          </div>
        </>
      ) : null}
    </div>
  );
}
