import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Questions from './Components/Quiz/Questions';
import Category from './Components/Quiz/Category';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Button } from '@mui/material';
import Signup from './Components/Account/Signup';
import Login from './Components/Account/Login';
import Dashboard from './Components/Quiz/Dashboard';
import CustomerSatellites from './Components/Information/CustomerSatellites';
import Information from './Components/Information/Information';
import NavBar from './Components/Account/navBar';
import Profilepage from './Components/Account/ProfilePage';
const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function MyApp() {

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        // width: '100%',
        alignItems: 'right',
        justifyContent: 'right',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* <MyApp /> */}
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Signup />} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/Dashboard" element={<Dashboard></Dashboard>} />
            <Route path="/Category" element={<Category></Category>} />
            <Route path="/Quiz/:id" element={<Questions></Questions>} />
            <Route path="/Information" element={<Information />} />
            <Route path="/Profile" element={<Profilepage />} />

          </Routes>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
