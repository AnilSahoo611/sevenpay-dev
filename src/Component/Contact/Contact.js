import React from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  colors,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import PlaceIcon from "@mui/icons-material/Place";

// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Google from "./Google";
import MiddleText from "../../ShareModule/MiddleText";

// const containerStyle = {
//   width: "100%",
//   height: "400px",
// };

// const center = {
//   lat: -17.44738,
//   lng: 78.35543,
// };

const ContactPage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "14vh",
          backgroundColor: "whiteSmoke",
        }}
      >
        <Box sx={{ width: "70vw" }}>
          <Box
            sx={{
              width: "100%",
              height: "20vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "4rem",
                fontWeight: "700",
                textAlign: "center",
                color: "#161971",
              }}
            >
              Contact Us
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ justifyContent: "center", display: "flex", mt: "5%" }}>
        <Box sx={{ width: "70vw" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // mt: 1,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <MailIcon
                  sx={{
                    fontSize: "30px",
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
                      sx={{
                        color: "#161971",
                        fontSize: "16px",
                        fontWeight: "400",
                        fontFamily: "Inter",
                      }}
                    >
                      Email
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#FF6600",
                        // fontWeight: "bold",
                        fontFamily: "Inter",
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                      info@bankify.money
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
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
                      sx={{
                        color: "#161971",
                        fontSize: "16px",
                        fontWeight: "500",
                        fontFamily: "Inter",
                      }}
                    >
                      Customer Support
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#FF6600",
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                      1800 345 7711
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <PlaceIcon
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
                      sx={{
                        color: "#161971",
                        fontSize: "16px",
                        fontWeight: "500",
                        fontFamily: "Inter",
                      }}
                    >
                      Address
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#23357D",
                        fontFamily: "Inter",
                        fontWeight: "400",
                        fontSize: "18px",
                      }}
                    >
                      7X Fintech Pvt Limited, DCB 620, DLF <br /> CYBERCITY,
                      Infocity, Patia, Bhubaneswar, Odisha - 751024
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Grid container spacing={6} sx={{ mt: "2rem", mb: "3rem" }}>
            <Grid item xs={12} sm={5}>
              <Typography
                align="left"
                sx={{
                  fontWeight: "600",
                  color: "#23357D",
                  fontSize: "28px",
                  mb: "20px",
                  fontFamily: "Inter",
                }}
              >
                We are here to help you
              </Typography>
              <form>
                <TextField
                  // label="Name"
                  placeholder="Name"
                  fullWidth
                  InputProps={{
                    style: {
                      fontWeight: "600",
                      fontSize: "14px",
                    },
                  }}
                  sx={{ mb: "20px" }}
                  id="standard-size-normal"
                />
                <TextField
                  placeholder="Mobile Number"
                  fullWidth
                  sx={{ mb: "20px" }}
                  InputProps={{
                    style: {
                      fontWeight: "600",
                      fontSize: "14px",
                    },
                  }}
                />
                <TextField
                  placeholder="Email Address"
                  fullWidth
                  sx={{ mb: "20px" }}
                  InputProps={{
                    style: {
                      fontWeight: "600",
                      fontSize: "14px",
                    },
                  }}
                />
                <TextField
                  placeholder="Message"
                  multiline
                  rows={4}
                  fullWidth
                  sx={{ mb: "20px" }}
                  InputProps={{
                    style: {
                      fontWeight: "600",
                      fontSize: "14px",
                    },
                  }}
                />
                <Box
                  borderRadius={1}
                  sx={{ display: "flex", alignItems: "start" }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#FF6600",
                      mt: "1",
                      height: "30px",
                      color: "#fff",
                      width: "120px",
                      fontSize: "1.4rem",
                      mb: "25px",
                      "&:hover": {
                        backgroundColor: "#FF6600",
                      },
                    }}
                  >
                    Send
                  </Button>
                </Box>
              </form>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Google />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ContactPage;
