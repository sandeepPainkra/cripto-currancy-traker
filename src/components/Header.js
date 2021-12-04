import {
  AppBar,
  Container,
  createTheme,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
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
}));
const Header = () => {
  const classess = useStyles();
  const navigate = useNavigate();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  const HandlClick = () => {
    return navigate("/");
  };
  return (
    <ThemeProvider theme={darkTheme}>
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
    </ThemeProvider>
  );
};

export default Header;
