import React from "react";

// import {  makeStyles } from '@mui/styles';

import { Box, Container, Typography } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";

import TwitterIcon from "@mui/icons-material/Twitter";

import YouTubeIcon from "@mui/icons-material/YouTube";

import InstagramIcon from "@mui/icons-material/Instagram";

import logo from "../Image/Logo.svg";

import Button from "@mui/material/Button";

import android from "../Image/Android.png";

const Footer = () => {
  // const classes = useStyles();

  return (
    <Box sx={{ mt: 3 }}>
      <div className={"footer"}>
        {/* <Container maxWidth="lg"> */}
        <div className={"row"}>
          <div className={"column"} style={{ marginRight: "15px" }}>
            <img
              src={logo}
              alt="sevenpayImage"
              height="40px"
              className={"columnImage"}
            />

            <Typography
              // variant="h6"
              color="textPrimary"
              className={"text"}
              sx={{ mt: "10px", fontSize: "16px" }}
            >
              Sevenpay is India's leading Rural <br /> Fintech company
              empowering <br /> merchants / nanopreneurs
            </Typography>

            {/* <Button variant="contained" className={classes.googleplay} height="30px" sx={{mt:"20px"}}> */}

            <img
              src={android}
              alt="googleplaylogo"
              height="35px"
              style={{ marginTop: "20px" }}
            />

            {/* </Button> */}
          </div>

          <div className={"column"}>
            <Typography
              gutterBottom
              className={"textHeader"}
              sx={{ fontSize: 18, fontWeight: 600 }}
            >
              Important Links
            </Typography>

            <Typography
              // variant="body2"
              color="textSecondary"
              sx={{ mt: "10px" }}
            >
              <a
                href="https://www.example.com"
                className={"link"}
                style={{ fontSize: "1.6rem" }}
              >
                About Us
              </a>
            </Typography>

            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ mt: "10px" }}
            >
              <a
                href="https://www.example.com"
                className={"link"}
                style={{ fontSize: "1.6rem" }}
              >
                FAQ's
              </a>
            </Typography>

            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ mt: "10px" }}
            >
              <a
                href="https://www.example.com"
                className={"link"}
                style={{ fontSize: "1.6rem" }}
              >
                Bogs
              </a>
            </Typography>

            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ mt: "10px" }}
            >
              <a
                href="https://www.example.com"
                className={"link"}
                style={{ fontSize: "1.6rem" }}
              >
                Privacy Policy
              </a>
            </Typography>

            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ mt: "10px" }}
            >
              <a
                href="https://www.example.com"
                className={"link"}
                style={{ fontSize: "1.6rem" }}
              >
                Terms of Service
              </a>
            </Typography>

            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ mt: "10px" }}
            >
              <a
                href="https://www.example.com"
                className={"link"}
                style={{ fontSize: "1.6rem" }}
              >
                Refund & Cancellation Policy
              </a>
            </Typography>
          </div>

          <div className={"column"} style={{ marginRight: "11px" }}>
            <Typography
              variant="h5"
              gutterBottom
              className={"textHeader"}
              style={{ fontSize: "1.8rem", fontWeight: 600 }}
            >
              Legal
            </Typography>

            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ mt: "10px" }}
            >
              <a
                href="https://www.example.com"
                className={"link"}
                style={{ fontSize: "1.6rem" }}
              >
                Terms & Conditions
              </a>
            </Typography>

            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ mt: "10px" }}
            >
              <a
                href="https://www.example.com"
                className={"link"}
                style={{ fontSize: "1.6rem" }}
              >
                Grievance & Redressal Policy
              </a>
            </Typography>

            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ mt: "10px" }}
            >
              <a
                href="https://www.example.com"
                className={"link"}
                style={{ fontSize: "1.6rem" }}
              >
                Public Disclosure
              </a>
            </Typography>
          </div>

          <div className={"column"}>
            <Typography
              variant="h5"
              gutterBottom
              className={"textHeader"}
              sx={{ fontSize: "1.8rem", fontWeight: 600 }}
            >
              Contact Us
            </Typography>

            <div>
              <Typography variant="h6" gutterBottom sx={{ fontSize: "1.6rem" }}>
                Mailing Address
              </Typography>

              <Typography
                variant="h6"
                color="textSecondary"
                sx={{ fontSize: "1.6rem" }}
              >
                7X Fintech Pvt Limited, DCB 620, DLF CYBERCITY, Infocity,
                <br /> Patia, Bhubaneswar, Odisha - 751024
              </Typography>
            </div>

            <div>
              <Typography variant="h6" gutterBottom sx={{ fontSize: "1.6rem" }}>
                Email
              </Typography>

              <Typography
                variant="h6"
                color="textSecondary"
                sx={{ fontSize: "1.6rem" }}
              >
                contact@sevenpay.com
              </Typography>
            </div>

            <div>
              <Typography
                variant="h6"
                gutterBottom
                marginTop="5px"
                sx={{ fontSize: "1.6rem" }}
              >
                Toll Free Number
              </Typography>

              <div className={"toolText"}>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  marginRight="10px"
                  sx={{ fontSize: "1.6rem" }}
                >
                  Support{" "}
                  <span style={{ display: "block", fontSize: "1.6rem" }}>
                    1800 345 7711
                  </span>
                </Typography>

                <Typography
                  variant="h6"
                  color="textSecondary"
                  sx={{ fontSize: "1.6rem" }}
                >
                  Join
                  <span style={{ display: "block", fontSize: "1.6rem" }}>
                    1800 345 7711
                  </span>
                </Typography>
              </div>
            </div>

            <div
              className={"icon"}
              style={{ display: "flex", columnGap: "10px" }}
            >
              <div style={{ marginRight: "5px" }}>
                <FacebookIcon fontSize="large" />
              </div>

              <div style={{ marginRight: "5px" }}>
                <TwitterIcon fontSize="large" />
              </div>

              <div style={{ marginRight: "5px" }}>
                <YouTubeIcon fontSize="large" />
              </div>

              <div style={{ marginRight: "5px" }}>
                <InstagramIcon fontSize="large" />
              </div>
            </div>
          </div>
        </div>
        {/* </Container> */}
      </div>

      <div className={"bottomRow"}>
        <Typography variant="body1">
          Copyright © 2022-23 Bankify.money Limited. All rights reserved.
        </Typography>
      </div>
    </Box>
  );
};

export default Footer;
