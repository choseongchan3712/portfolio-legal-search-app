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
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    height: 60px;
  }

  @media (max-width: 480px) {
    height: 55px;
  }
`;

const theme = createTheme({
  components: {
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          width: "calc(100% / 4)",
          height: "100%",
          backgroundColor: "transparent",
          minWidth: "none",
          maxWidth: "none",
          color: "#8f8f8f",
          transition: "all 0.3s ease",
          fontSize: "16px",
          "&.Mui-selected": {
            color: "#7874f1",
            backgroundColor: "rgba(120, 116, 241, 0.1)",
            fontWeight: "600",
          },
          "&:hover": {
            backgroundColor: "rgba(120, 116, 241, 0.05)",
          },
          "@media (max-width: 768px)": {
            "& .MuiBottomNavigationAction-label": {
              fontSize: "14px",
            },
          },
          "@media (max-width: 480px)": {
            "& .MuiBottomNavigationAction-label": {
              fontSize: "13px",
            },
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
