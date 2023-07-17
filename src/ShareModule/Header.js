import React from "react";
import { AppBar, Toolbar, Grid, Box, Typography, Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import logo from "../Image/Logo.svg";
import Nav from "./Nav";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Header = () => {
  const [selectedOption, setSelectedOption] = React.useState("Agent");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <Box sx={{ position: "relative"}}>
      <AppBar
      elevation={0}
        position="fixed"
        sx={{
          maxWidth: "100vw !important",
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
      >
        <Toolbar style={{ minHeight: 50 }} className="nav">
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Grid container sx={{ width: "75vw" }}>
              <Grid item md={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    mt: 0.7,
                    pb: 1,
                  }}
                >
                  <img src={logo} height="40px" width="auto" />
                </Box>
              </Grid>
              <Grid
                item
                md={8}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* for contact */}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mt: 0.5 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <CallIcon
                        sx={{
                          fontSize: "2.7rem",
                          mt: 0.5,
                          mr: 0.3,
                          color: "#FF6600",
                        }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Box sx={{ textAlign: "justify" }}>
                          <Typography
                            variant="p"
                            sx={{ color: "#161971", fontSize: "1rem" }}
                          >
                            Customer Support
                          </Typography>
                          <br />

                          <Typography
                            variant="p"
                            sx={{
                              color: "#FF6600",
                              fontWeight: "bold",
                              fontSize: "1.1rem",
                            }}
                          >
                            1800 345 7711
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  {/* for font size controlller */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      backgroundColor: "whitesmoke",
                      borderRadius: "10px",
                      width: "120px",
                      height: "40px",
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{
                        color: "#161971",
                        fontWeight: "400",
                        fontSize: "1.5rem",
                        color: "#1a1a1d",
                        m: 0.5,
                        cursor: "pointer",
                      }}
                    >
                      -A
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        color: "#161971",
                        fontWeight: "500",

                        fontSize: "1.7rem",
                        color: "#1a1a1d",
                        m: 0.5,
                        cursor: "pointer",
                      }}
                    >
                      A
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        color: "#161971",
                        fontWeight: "600",

                        fontSize: "2.1rem",
                        color: "#1a1a1d",
                        m: 0.5,
                        cursor: "pointer",
                      }}
                    >
                      A+
                    </Typography>
                  </Box>

                  {/* login and agent button */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* <Button > */}

                    <FormControl
                      size="small"
                      sx={{
                        width: "auto",
                        // mr: 1,
                        mt: 0.1,
                        fontSize: "1.3rem",
                        zIndex:1,
                        overflow: "auto",
                      }}
                      disableScrollLock={true}
                    >
                      {/*   */}
                      <Select
                        defaultValue="Agent"
                        value={selectedOption}
                        onChange={handleChange}
                        sx={{
                          flex: "1",
                          color: "#ff6600",
                          fontSize: "1.3rem",
                          backgroundColor: "#FFF2EA",
                          fontWeight: "700",
                          zIndex:1,
                          outline: "none",
                          "& .MuiSelect-icon": {
                            fontSize: "2rem",
                            color: "#FF6600",
                            opacity: "0.6",
                          },
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#FFF2EA",
                          },
                          "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                            {
                              border: 0,
                            },
                          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                            {
                              border: 0,
                            },
                        }}
                        disableScrollLock={true}
                      >
                        <MenuItem
                          value="Agent"
                          sx={{
                            fontSize: "1.2rem",
                            "&:hover": {
                              backgroundColor: "#ff6600",
                            },
                          }}
                        >
                          Agent
                        </MenuItem>
                        <MenuItem
                          value="option3"
                          sx={{
                            fontSize: "1.2rem",
                            "&:hover": {
                              backgroundColor: "#ff6600",
                            },
                          }}
                        >
                          Distributor
                        </MenuItem>
                      </Select>
                    </FormControl>
                    {/* </Button> */}
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#ff6600",
                        fontSize: "1.2rem",
                        fontWeight: "600",
                        "&:hover": {
                          backgroundColor: "#FF6600",
                        },
                      }}
                    >
                      Login
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{position:'relative'}}>

        <Nav />
      </Box>
    </Box>
  );
};
export default Header;
