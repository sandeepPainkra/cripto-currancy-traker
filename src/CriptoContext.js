import React, { createContext, useState, useContext, useEffect } from "react";

const Crypto = createContext();
const CriptoContext = ({ children }) => {
  const [currancy, setCurrancy] = useState("INR");
  const [Symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (currancy === "INR") setSymbol("₹");
    else if (currancy === "US") setSymbol("$");
  }, [currancy]);
  console.log(currancy);
  return (
    <Crypto.Provider value={{ currancy, Symbol, setCurrancy }}>
      {children}
    </Crypto.Provider>
  );
};

export default CriptoContext;
export const CryptoState = () => {
  return useContext(Crypto);
};
