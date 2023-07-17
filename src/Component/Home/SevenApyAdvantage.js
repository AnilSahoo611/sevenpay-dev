import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import MiddleText from "../../ShareModule/MiddleText";
import SevenApyAdvantageBack from "../../Image/sevenpayAdvantageBackground.png";
import PhoneLogo from "../../Image/phonelogo.png";
import CurrencyLogo from "../../Image/rupee.png";
import IdeaLogo from "../../Image/tips_and_updates_logo.png";
import RightLogo from "../../Image/verified_user_logo.png";
import LanguageLogo from "../../Image/languagelogo.png";
import HumanLogo from "../../Image/personlogo.png";
const SevenApyAdvantage = () => {
  const BankData = [
    {
      id: 1,
      img: PhoneLogo,
      text: "Instant and easy onboarding",
      height: "40px",
      width: "40px",
    },
    {
      id: 2,
      img: CurrencyLogo,
      text: "Zero additional investment, no working capital requirement",
      height: "27px",
      width: "23px",
    },
    {
      id: 3,
      img: IdeaLogo,
      text: "Time tested systems, with industry best success rates",
      height: "38px",
      width: "38px",
    },
    {
      id: 4,
      img: RightLogo,
      text: "Simple, secure, easy to use App",
      height: "38px",
      width: "38px",
    },
    {
      id: 5,
      img: LanguageLogo,
      text: "Available in 10+ languages",
      height: "46px",
      width: "46px",
    },
    {
      id: 6,
      img: HumanLogo,
      text: "Relationship managers to support your business at all times",
      height: "38px",
      width: "38px",
    },
  ];
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box className="sevenPayAdvantage" sx={{}}>
        <MiddleText name={"Sevenpay Advantages"} />
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Box sx={{ width: "70vw" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                variant="p"
                sx={{
                  textAlign: "center",
                  fontSize: "1.8rem",
                  width: "710px",
                  fontWeight: "400",
                }}
              >
                A great earning potential with the opportunity to grow your
                business with minimal one time investment and zero working
                capital
              </Typography>
            </Box>

            <Box
              sx={{
                mt: 1,
                width: "70vw",
                // height: "24vh",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{ width: "50vw", mt: 5 }}>
                  <Grid container spacing={3}>
                    {BankData.map((imageUrl, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box
                          sx={{
                            // width: "180px",
                            // height: "90px",
                            bgcolor: "#FFFFFF",
                            display: "flex",
                            justifyContent: "center",
                            p: 3,
                            height: "10vh",
                            "&:hover": {
                              transform: " scale(1.1)",
                              // backgroundImage: "-webkit-linear-gradient(bottom, #FFF2EA, #FF6600)",
                              backgroundColor: "#FFF2EA",
                            },
                            cursor: "pointer",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              flexDirection: "column",
                              alignItems: "center",
                              width: "150px",
                              height: "10vh",
                            }}
                          >
                            <img
                              src={imageUrl.img}
                              alt="SevenPayAdvantageImage"
                              style={{
                                width: imageUrl.width,
                                height: imageUrl.height,
                              }}
                            />
                            <Typography
                              variant="p"
                              sx={{
                                fontSize: "1.4rem",
                                color: "#23357D",
                                mt: 0.5,
                                mb: 1,
                              }}
                            >
                              {imageUrl.text}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SevenApyAdvantage;
