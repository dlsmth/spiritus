// import logo from './logo.svg';

import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import RestoreIcon from "@mui/icons-material/Restore";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

import { useState, useEffect } from "react";
// import { ThemeProvider, createTheme } from "@mui/system";
import { blue, lightBlue, white } from "@mui/material/colors";
// import Box from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Slider from "./Slider";
import { makeStyles } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Tabs from "./Tabs";
import { styled } from "@mui/material/styles";
// import DeleteIcon from '@mui/icons-material/Delete';
import Icon from "@mui/material/Icon";
import "./App.css";
import Welcome from "./Welcome";
import About from "./About";
import Breath from "./Breath";
import Analytics from "./Analytics";
import Breath1 from "./Breath1";
import Breath2 from "./Breath2";
import Breath3 from "./Breath3";
import Header from "./Header";
import Paper from "@mui/material/Paper";

// import { Box, ThemeProvider } from '@mui/system';

// const lastMode = 4;

const getLastMode = () => {
  console.log("getting last app mode...");
  const lastMode = localStorage.getItem("lastMode");
  console.log(lastMode);
  if (lastMode === null) {
    return 4;
  } else {
    return 1;
  }
};

const saveLastMode = (last) => {
  console.log("setting last app mode...");
  localStorage.setItem("lastMode", last);
};

const getLastBreathMode = () => {
    console.log("getting last breath mode...");
    const lastBreathMode = localStorage.getItem("lastBreathMode");
    console.log(lastBreathMode);
    return lastBreathMode;
  };
  
  const saveLastBreathMode = (last) => {
    console.log("setting last breath mode...");
    localStorage.setItem("lastBreathMode", last);
  };

const getSessions = () => {
  console.log("getting list of sessions");
  const sessions = JSON.parse(localStorage.getItem("sessions") || "[]");
  console.log(sessions);
  return sessions;
};

const saveSessions = (session) => {
  console.log("setting list of sessions");
  const date = new Date();
  const existingSessions = getSessions();
  const newSession = {breath: session, date};
  existingSessions.push(newSession);
  localStorage.setItem("sessions", JSON.stringify(existingSessions));
};

const clearData = () => {
    localStorage.clear();
};

const Landing = () => {
  const [mode, setMode] = useState(0);
  const [lastBreathMode, setLastBreathMode] = useState(0);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const lastMode = getLastMode();
    console.log('lastMode is: ', lastMode);
    const lastBreathMode = getLastBreathMode();
    console.log('lastBreathMode is: ', lastBreathMode);
    const sessions = getSessions();
    console.log('sessions is: ', sessions);
    setMode(+lastMode);
    setLastBreathMode(+lastBreathMode);
    setSessions(sessions);
  }, []);

  const handleMode = (value) => {
    // saveLastBreathMode(1);
    setMode(value);
    saveLastMode(value);
    // console.log(event);
    console.log("setting internal mode to: ", value);
  };

  const handleNewSession = (sessionId) => {
    saveSessions(sessionId);
    saveLastBreathMode(sessionId);
  };

  const StyledBNA = styled(BottomNavigationAction)({
    color: "#ffffff", opacity: '.75',
    "&.Mui-selected": {
      opacity: '1'
    }
  });

  return (
    <div className="app">
      <Header />
      <section>
        {mode === 0 && <About clearData={clearData} />}
        {mode === 1 && (
          <Breath lastBreathMode={lastBreathMode} handleNewSession={handleNewSession}/>
        )}
        {mode === 2 && <Analytics sessions={sessions}/>}
        {mode === 4 && <Welcome />}
      </section>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
            sx={{}}
          showLabels
          value={mode}
          onChange={(event, newMode) => {
            setMode(newMode);
            saveLastMode(newMode);
            console.log('mode changes to...', newMode);
          }}
        >
          <StyledBNA label="About" icon={<Icon>info</Icon>} />
          <StyledBNA label="Breathe" icon={<Icon>cloud</Icon>} />
          <StyledBNA
            label="Analytics"
            icon={<Icon>analytics</Icon>}
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
};

export default Landing;
