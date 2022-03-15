import React from "react";
import DropDownMenu from "../components/DropDownMenu";
// import MenuDrawer from '../components/MenuDrawer';
import { Button, AppBar, Box, Toolbar } from "@mui/material/";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
// import { changeTheme, getTheme } from "../store/currentViewSlice";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import {
  getCurrentEndpoint,
  changeMetric,
  resetRunValue,
} from "../store/currentViewSlice";
import { ThemeContext } from "@emotion/react";
import Logo from '../assets/vantage-logo.svg';

const TitleContainer = () => {
  const dispatch = useDispatch();
  // const mode = useSelector(getTheme);
  const currentEndpoint = useSelector(getCurrentEndpoint);

  const handleClick = () => {
    dispatch(changeMetric("default"));
    dispatch(resetRunValue());
  };

  return (
    <div id='titleContainer'>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <AppBar position='static'>
          <Toolbar sx={{background: 
          'linear-gradient(0deg, rgba(25,25,34,1) 0%, rgba(46,46,68,1) 52%, rgba(66,66,97,1) 100%)', justifyContent: "space-between",
          }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Logo style ={{height:'50px'}}/>
              {/* <MenuDrawer /> */}
              <Typography 
                color ='text.primary' 
                variant='h6' 
                component='div' 
                marginLeft= '20px'
                sx={{ flexGrow: 1 }}>
              Vantage
              </Typography>
            </Box>
            {/* <Brightness5Icon fontSize="small"/> */}

            <Box
              sx={{ display: "flex", cursor: "pointer" }}
              onClick={handleClick}
            >
              <Typography
                variant='h6'
                component='div'
                color='text.primary'
                sx={{ px: 1 }}
              >
                Current Endpoint:
              </Typography>

              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                {currentEndpoint}
              </Typography>
            </Box>

            <DropDownMenu />
            {/* <Switch
              className='darkModeSwitch'
              checked={mode === "dark"}
              onChange={() => dispatch(changeTheme())}
              inputProps={{ "aria-label": "controlled" }}
            />
            <DarkModeIcon fontSize='small' /> */}
            {/* <Button color="inherit">Refresh</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default TitleContainer;
