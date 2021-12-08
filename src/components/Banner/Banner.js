import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import BannerCarousal from "./BannerCarousal";
import axios from "axios";
import { TrendingCoins } from "../../Config/config";
import { CryptoState } from "../../CriptoContext";

const useStyles = makeStyles(() => ({
  Banner: {
    backgroundImage:
      " URL('https://raw.githubusercontent.com/piyush-eon/react-crypto-tracker/master/public/banner2.jpg')",
  },
  BannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  tagline: {
    height: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
}));
const Banner = () => {
  const classess = useStyles();

  return (
    <>
      <div className={classess.Banner}>
        <Container className={classess.BannerContent}>
          <div className={classess.tagline}>
            <Typography
              variant="h2"
              style={{
                fontWeight: "bold",
                marginBottom: 15,
                fontFamily: "Montserrat",
              }}
            >
              CRYPTO HUNTER
            </Typography>
            <Typography
              style={{
                color: "darkgrey",
                fontFamily: "Montserrat",
                textTransform: "capitalize",
              }}
              variant="subtitle2"
            >
              Get all the info regarding your faviourit crypto currancy
            </Typography>
          </div>
          <BannerCarousal />
        </Container>
      </div>
    </>
  );
};

export default Banner;
