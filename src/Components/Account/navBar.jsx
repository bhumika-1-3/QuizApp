import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import MenuIcon from '@mui/icons-material/Menu';
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import Login from "./Login";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useNavigate } from "react-router-dom";
const pages = [
    "login",
    "category",
    "information",
];

function ElevationScroll(props) {
    const { children, window } = props;

    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        // color: trigger ? '#FFFFFF' : 'transparent',
    });
}

const NavBar = (elev) => {
    const navigate = useNavigate();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const anchor = "left";
    const [openPopup, setOpenPopup] = useState(false);

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Link
                    style={{ textDecoration: "none" }}
                    to={`/`}
                >
                    <ListItem button >
                        <ListItemText>
                            <span>SignUp</span>
                        </ListItemText>
                    </ListItem>
                </Link>
                {pages.map((text, index) => (
                    <Link
                        key={index}
                        style={{ textDecoration: "none" }}
                        to={`/${text}`}
                    >
                        <ListItem button key={text}>
                            <ListItemText>
                                <span>{text}</span>
                            </ListItemText>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <ElevationScroll>
                <AppBar
                    position="sticky"
                    style={{ backgroundColor: "white" }}
                    color="transparent"
                >
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                            >
                                {/* <img src={logo} alt="logo" width="50"></img> */}
                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                                <React.Fragment key={anchor}>
                                    <Button
                                        style={{ fontSize: "2rem" }}
                                        size="large"
                                        color="inherit"
                                        onClick={toggleDrawer(anchor, true)}
                                    >
                                        <MenuIcon style={{ color: "black" }} />
                                    </Button>
                                    <Drawer
                                        anchor={anchor}
                                        open={state[anchor]}
                                        onClose={toggleDrawer(anchor, false)}
                                    >
                                        {list(anchor)}
                                    </Drawer>
                                </React.Fragment>
                            </Box>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}
                            >
                                {/* <img src={logo} alt="logo" width="10"></img> */}
                            </Typography>
                            <Box
                                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                            // justifyContent="center"
                            // alignContent="center"
                            // style={{ transform: 'translateX(-4%)' }}
                            >
                                <Link style={{ textDecoration: "none" }}
                                    to={`/`}>
                                    <Button
                                        style={{
                                            fontSize: "1.2rem",
                                            fontFamily: "sans-serif",
                                            textTransform: "capitalize",
                                        }}
                                        sx={{
                                            my: 2,
                                            color: "black",
                                            display: "block",
                                            paddingInline: "25px",
                                            paddingLeft: "30px",
                                        }}
                                    >
                                        Signup
                                    </Button>
                                </Link>
                                {pages.map((page, index) => (
                                    <Link key={index} style={{ textDecoration: "none" }}
                                        to={`/${page}`}>
                                        <Button
                                            key={page}
                                            style={{
                                                fontSize: "1.2rem",
                                                fontFamily: "sans-serif",
                                                textTransform: "capitalize",
                                            }}
                                            sx={{
                                                my: 2,
                                                color: "black",
                                                display: "block",
                                                paddingInline: "25px",
                                                paddingLeft: "30px",
                                            }}
                                        >
                                            {page}
                                        </Button>
                                    </Link>
                                ))}
                            </Box>
                            <Box sx={{ flexGrow: 0 }}>
                                    <Button
                                        variant="contained"
                                        onClick={() => navigate("/Profile")}
                                        size="large"
                                        className="mainScreenButton"
                                        style={{
                                            backgroundColor: "#2D3748",
                                            color: "white",
                                            fontWeight: "800",
                                        }}
                                    >
                                        Profile
                                    </Button>{" "}
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
           
        </>
    );
};
export default NavBar;
