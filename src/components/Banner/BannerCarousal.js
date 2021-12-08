import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import { TrendingCoins } from "../../Config/config";
import { CryptoState } from "../../CriptoContext";

const useStyles = makeStyles(() => ({
  carousalContent: {},
}));
const BannerCarousal = () => {
  const classess = useStyles();
  const { currancy, Symbol } = CryptoState();
  const [tranding, setTranding] = useState([]);
  const FetchApiData = async () => {
    const { data } = await axios.get(TrendingCoins(currancy));
    setTranding(data);
  };
  useEffect(() => {
    FetchApiData();
  }, [currancy]);

  const items = tranding.map((coin) => {
    console.log(coin);
    const profit = coin?.market_cap_change_percentage_24h >= 0;
    return (
      <Link className={classess.carousalContent} to={`/coins/${coin.id}`}>
        <img
          height="80"
          style={{ marginBottom: 10 }}
          src={coin?.image}
          alt={coin?.name}
        />
        <br />
        <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "green" : "red",
            }}
          >
            {profit && "+"}
            {coin?.market_cap_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <br />
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {Symbol}
          {coin?.current_price.toFixed()}
        </span>
      </Link>
    );
  });
  const responsive = {
    0: {
      items: 3,
    },
    1024: {
      items: 4,
    },
  };
  console.log(tranding);
  return (
    <div className={classess.carousalContent}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        autoPlay
        responsive={responsive}
        items={items}
      />
    </div>
  );
};

export default BannerCarousal;
