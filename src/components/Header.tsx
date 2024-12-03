import {
  BottomNavigation,
  BottomNavigationAction,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  z-index: 990;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
`;

const theme = createTheme({
  components: {
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "100%",
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          width: "calc(100% / 4)",
          height: "100%",
          backgroundColor: "#eee",
          minWidth: "none",
          maxWidth: "none",
          color: "#8f8f8f",
          "&.Mui-selected": {
            color: "#fff",
            backgroundColor: "#7874f1",
          },
        },
      },
    },
  },
});

const Header = (): JSX.Element => {
  const [value, setValue] = useState<number>(0);
  const location = useLocation();
  const nowLocation:string = location.pathname;

  useEffect(()=>{
    if(nowLocation.includes("/law") || nowLocation.includes("/detail")){
      setValue(0);
    } else if (nowLocation.includes("/precedent") || nowLocation.includes("/prec_detail")) {
      setValue(1);
    } else if (nowLocation.includes("/interpretation") || nowLocation.includes("/inter_detail")) {
      setValue(2);
    } else if (nowLocation.includes("/search")) {
      setValue(3);
    }
  }, []);
  


  const changeHandler = (event: React.SyntheticEvent, newValue:number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={changeHandler}
        >
          <BottomNavigationAction label="법률" component={Link} to="/law" />
          <BottomNavigationAction
            label="판례"
            component={Link}
            to="/precedent"
          />
          <BottomNavigationAction
            label="해석례"
            component={Link}
            to="/interpretation"
          />
          <BottomNavigationAction
            label="조회하기"
            component={Link}
            to="/search"
          />
        </BottomNavigation>
      </ThemeProvider>
    </Container>
  );
};

export default Header;
