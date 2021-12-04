import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Homepages from "./pages/Homepages";
import CoinPage from "./pages/CoinPage";
import { makeStyles } from "@material-ui/core";
function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));
  const classess = useStyles();
  return (
    <Router>
      <div className={classess.App}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepages />} />
          <Route exact path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
