import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  AppBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "20px",
  },
  title: {
    fontFamily: "Montserrat",
    flex: 1,
    color: "gold",
    fontSize: "1.6rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
  selectBox: {
    borderColor: "red",
  },
}));
const Header = () => {
  const classess = useStyles();
  const navigate = useNavigate();
  const HandlClick = () => {
    return navigate("/");
  };
  return (
    <AppBar color="transparent" position="static ">
      <Container className={classess.AppBox}>
        <Typography onClick={HandlClick} className={classess.title}>
          Crypto Hunter
        </Typography>
        <Select
          variant="outlined"
          style={{ width: "100", height: 40, marginLeft: 15 }}
        >
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="INR">INR</MenuItem>
        </Select>
      </Container>
    </AppBar>
  );
};

export default Header;
