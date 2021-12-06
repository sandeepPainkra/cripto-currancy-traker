import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  carousalContent: {},
}));
const BannerCarousal = () => {
  const classess = useStyles();
  return <div className={classess.carousalContent}>carousal</div>;
};

export default BannerCarousal;
