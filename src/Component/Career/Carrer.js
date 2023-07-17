import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import Growth from "../../Image/growth.png";
import Benifit from "../../Image/like.png";
import Training from "../../Image/Training.png";
import Calture from "../../Image/Culture.png";
import MiddleText from "../../ShareModule/MiddleText";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

const Carrer = () => {
  const navigate = useNavigate();
  const partOfSevenPayData = [
    {
      id: 1,
      icon: Growth,
      name: "Growth",
      text: "With us, deserving candidates have limitless opportunities for growth and success.",
      width: "33.59px",
      height: "36px",
    },
    {
      id: 2,
      icon: Benifit,
      name: "Benefits",
      text: "With us, deserving candidates have limitless opportunities for growth and success.",
      width: "34.81px",
      height: "36px",
    },
    {
      id: 3,
      icon: Training,
      name: "Training",
      text: "With us, deserving candidates have limitless opportunities for growth and success.",
      width: "36.61px",
      height: "36",
    },
    {
      id: 4,
      icon: Calture,
      name: "Culture",
      text: "With us, deserving candidates have limitless opportunities for growth and success.",
      width: "53.37px",
      height: "36px",
    },
  ];

  const openPostion = () => {
    navigate("/JobDescription");
    // const latitude = 20.349; // Replace with your desired latitude
    // const longitude = 85.8077; // Replace with your desired longitude
    // const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    // window.open(url, '_blank');
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "whiteSmoke",
          mt: "14vh",
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
              Career
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ justifyContent: "center", display: "flex", mt: "5%" }}>
        <Box sx={{ width: "70vw" }}>
          <Typography
            variant="p"
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "1.6rem",
              fontWeight: "400",
            }}
          >
            Life at Sevenpay is fast-paced, challenging, and incredibly
            rewarding. We value both work and fun, embodying the essence of
            Sevenpay in everything we do. Our continuous learning from new
            experiences and close collaboration with a remarkable team drive our
            industry-leading solutions and constant innovation. Our vibrant
            company culture is at the heart of our success.
          </Typography>

          <br />
          <Typography
            variant="p"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "1.6rem",
              fontWeight: "400",
              mt: 3,
            }}
          >
            We enthusiastically celebrate every festival, igniting the
            motivation of our people. We believe that true talents flourish when
            individuals step out of their comfort zones. At Sevenpay, we provide
            our teams with ample opportunities to unleash their creativity.
          </Typography>
        </Box>
      </Box>
      {/* Become Part Of seven Pay */}
      <Box
        className={"BestPartSevenPay"}
        sx={{ display: "flex", justifyContent: "center", mt: 5, p: 5 }}
      >
        <Box sx={{ width: "70vw" }}>
          <MiddleText name={"Become Part of Sevenpay"} />
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
            {partOfSevenPayData.map((ele, index) => (
              <Box
                key={ele.id}
                sx={{
                  width: "250px",
                  height: "150px",
                  backgroundColor: "#ffff",
                  borderRadius: "10px",
                  "&:hover": {
                    transform: " scale(1.1)",
                    // backgroundImage: "-webkit-linear-gradient(bottom, #FFF2EA)",
                    backgroundColor: "#FFF2EA",
                    cursor: "pointer",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    flexDirection: "column",
                    m: 2,
                  }}
                >
                  <img
                    src={ele.icon}
                    style={{ width: ele.width, height: ele.height }}
                  />
                  <Typography
                    variant="p"
                    sx={{
                      color: "#161971",
                      fontSize: "1.7rem",
                      fontWeight: "800",
                      display: "flex",
                      justifyContent: "left",
                      marginTop: "2px",
                    }}
                  >
                    {ele.name}
                  </Typography>
                  <Typography
                    variant="p"
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      textAlign: "left",
                      fontSize: "1.4rem",
                      fontWeight: "400",
                      marginTop: "5px",
                    }}
                  >
                    {ele.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      {/* Open Postion */}

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "70vw" }}>
          <MiddleText name="Open Postions" />
          <Box sx={{ mt: 5 }}>
            <Grid container spacing={2}>
              {[1, 2, 3, 4, 5, 6, 7, 9, 10].map((ele, index) => (
                <Grid key={ele} item xs={12} sm={6} md={4}>
                  <Card
                    sx={{ maxWidth: 300, cursor: "pointer" }}
                    onClick={() => openPostion()}
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: "1.6rem",
                          fontWeight: "800",
                          fontWeight: "bold",
                          textAlign: "left",
                        }}
                      >
                        Software Engineer - Backend
                      </Typography>
                      <Typography
                        variant="p"
                        color="textSecondary"
                        gutterBottom
                        sx={{
                          fontSize: "1.4rem",
                          fontWeight: "400",
                          display: "flex",
                          justifyContent: "left",
                          textAlign: "left",
                          mt: 0.2,
                        }}
                      >
                        Bhubaneswar, Odisha
                      </Typography>
                      <Typography
                        component="p"
                        gutterBottom
                        sx={{
                          display: "flex",
                          justifyContent: "left",
                          textAlign: "left",
                          mt: 0.4,
                          fontSize: "1.4rem",
                          fontWeight: "400",
                        }}
                      >
                        Contribute in designing, architecting and developing
                        scalable, automated, multi-tenant, resilient systems
                        &amp; Solutions that enable automated integrations and
                        data processing for our applications.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Carrer;

// We enthusiastically celebrate every festival, igniting the motivation of our people. We believe that true talents flourish when individuals step out of their comfort zones. At Sevenpay, we provide our teams with ample opportunities to unleash their creativity.
