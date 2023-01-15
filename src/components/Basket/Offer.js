import React, { useState, useContext } from "react";
import { ProductContext, ProductDispath } from "../Context/ContextProvider";

function Offer() {
  const [offerInput, setOfferInput] = useState("");
  const [clickButton, setClickButton] = useState(false);
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);

  const inputHandler = (e) => {
    setOfferInput(e.target.value);
  };

  const checkOfferCode = () => {
    if (offerInput) {
      setClickButton(true);
      dispath({ type: "OFFER_CODE", payload: offerInput });
    }
  };

  return (
    <div className="offer_container">
      <span> how much do you want from this  </span>
      <div className="offer_box">
        <input
          value={offerInput}
          onChange={(e) => inputHandler(e)}
          type="text"
          disabled={state.isEnterOfferCode}
          placeholder=" enter the code : 1414"
        />
        <button disabled={state.isEnterOfferCode} onClick={checkOfferCode}>
          press
        </button>
      </div>
      {clickButton && state.isEnterOfferCode && (
        <span className="offer_true">{state.offerMessage}</span>
      )}
      {clickButton && !state.isEnterOfferCode && (
        <span className="offer_false">{state.offerMessage}</span>
      )}
    </div>
  );
}

export default Offer;
