import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ListItemIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { constant } from "../Constant/const";
const Nav = () => {
  const navigate = useNavigate();
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [LanguageanchorEl, setLanguageAnchorEl] = useState(null);

  const [LanguageData,SetLanguageData] = useState([...constant?.Language])

  const fontStyle = {
    fontSize: "1.4rem",
    fontWeight: "400",
    fontFamily: "Arial Black ",
    textTransform: "capitalize",
    overflow:'hidden'
  };

  const subMenuStyle = {
    fontSize: "1.4rem",
    fontWeight:'200',
    pl:3,
    overflow:'hidden',
    minWidth:'200px',
    "&:hover": {
      backgroundColor: "#FF6600",
      color:'#fff'
    },
  };

  const handleMenuOpen1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleMenuClose1 = () => {
    setAnchorEl1(null);
  };

  const handleMenuOpen2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleMenuClose2 = () => {
    setAnchorEl2(null);
  };

  const handleLanguageOpen = (event) => {
    setLanguageAnchorEl(event.currentTarget);
    
  };

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  // console.log(anchorEl, "anker value");

  return (
    <Paper
    elevation={0}
      sx={{
        // mt: -0.5,
        height: "8vh",
        width:' 100%',
        position:'fixed',
        top:'48px',
        zIndex:'1',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)'
       
      }}
    >
    <Box sx={{display:'flex',justifyContent:'center'}}>

      <Box sx={{ width: "75vw" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{ color: "#1a1a1d", backgroundColor: "transparent", mt: -0.3 }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton> */}

            <Box>
              <Button
                color="inherit"
                sx={fontStyle}
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Button>
              {/*services  */}
              <Button
                color="inherit"
                sx={fontStyle}
                endIcon={<ExpandMoreIcon />}
                onClick={handleMenuOpen1}
              >
                Services
              </Button>
              <Menu
                
                anchorEl={anchorEl1}
                open={Boolean(anchorEl1)}
                onClose={handleMenuClose1}
                elevation={0}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                // sx={{overflow:'none'}}
                disableScrollLock={true}
              >
                <MenuItem onClick={handleMenuClose1} sx={subMenuStyle}>
                  Banking Services
                </MenuItem>
                <MenuItem onClick={handleMenuClose1} sx={subMenuStyle}>
                  Payment Services
                </MenuItem>
                <MenuItem onClick={handleMenuClose1} sx={subMenuStyle}>
                  Utility Payments
                </MenuItem>
                <MenuItem onClick={handleMenuClose1} sx={subMenuStyle}>
                  Insurance
                </MenuItem>
                <MenuItem onClick={handleMenuClose1} sx={subMenuStyle}>
                  Travel
                </MenuItem>
                <MenuItem onClick={handleMenuClose1} sx={subMenuStyle}>
                  Partner Services
                </MenuItem>
              </Menu>
              {/* media Event */}
              <Button
                color="inherit"
                sx={fontStyle}
                endIcon={<ExpandMoreIcon />}
                onClick={handleMenuOpen2}
              >
                Media &amp; Event
              </Button>
              <Menu
                anchorEl={anchorEl2}
                open={Boolean(anchorEl2)}
                onClose={handleMenuClose2}
                elevation={0}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                sx={{overflow:'hidden',}}
                disableScrollLock={true}
              >
                <MenuItem
                  onClick={handleMenuClose2}
                  sx={subMenuStyle}
                >
                 Press Conferences
                </MenuItem>
                <MenuItem
                  onClick={handleMenuClose2}
                  sx={subMenuStyle}
                >
                  Product Launches
                </MenuItem>
                <MenuItem
                  onClick={handleMenuClose2}
                  sx={subMenuStyle}
                >
                  Award Ceremonies
                </MenuItem>
                <MenuItem
                  onClick={handleMenuClose2}
                  sx={subMenuStyle}
                >
                 Photo Gallery
                </MenuItem>
              </Menu>
              {/* About us */}

              <Button
                color="inherit"
                sx={fontStyle}
                // endIcon={<ExpandMoreIcon />}
                onClick={()=>{navigate('/About')}}
               
              >
                About us
              </Button>
              {/* <Menu
                anchorEl={anchorEl3}
                open={Boolean(anchorEl3)}
                onClose={handleMenuClose3}
                elevation={0}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <MenuItem onClick={handleMenuClose3} sx={{ fontSize: "1.3rem" , "&:hover": {
                      backgroundColor: "#FF6600",
                    },}}>
                  Service 1
                </MenuItem>
                <MenuItem onClick={handleMenuClose3} sx={{ fontSize: "1.3rem", "&:hover": {
                      backgroundColor: "#FF6600",
                    }, }}>
                  Service 2
                </MenuItem>
                <MenuItem onClick={handleMenuClose3} sx={{ fontSize: "1.3rem", "&:hover": {
                      backgroundColor: "#FF6600",
                    }, }}>
                  Service 3
                </MenuItem>
              </Menu> */}
              <Button
                color="inherit"
                sx={fontStyle}
                onClick={() => {
                  navigate("/Contact");
                }}
              >
                Contact Us
              </Button>
              <Button
                color="inherit"
                sx={fontStyle}
                onClick={() => {
                  navigate("/Carrer");
                }}
              >
                Careers
              </Button>
            </Box>
            <Button
              sx={{ color: "gray", fontSize: "1.2rem", }} 
              endIcon={<ArrowDropDownIcon sx={{ml:-.4,mt:-.3}} />}
              onClick={handleLanguageOpen}
            >
              Language : English
            </Button>
            <Menu
                 anchorEl={LanguageanchorEl}
                open={Boolean(LanguageanchorEl)}
                onClose={handleLanguageClose}
                elevation={0}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
             { LanguageData.map(ele=>(
              <MenuItem key={ele.id} onClick={handleLanguageClose} sx={subMenuStyle}>
                  {ele.name}
                </MenuItem>
             ))
}
              </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
    </Paper>
  );
};

export default Nav;
