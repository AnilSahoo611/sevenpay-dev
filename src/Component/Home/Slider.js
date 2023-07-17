import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Cover from "../../Image/MicrosoftTeams-image (1).png";
import { Grid } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import SliderImgeOne from '../../Image/mainSliderOne.png'
import SliderImageTwo from '../../Image/MainSlider2.png'
import SliderImageThree from '../../Image/MainSlider3.png'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "",
    imgPath: SliderImgeOne,
  },
  {
    label: "",
    imgPath: SliderImageTwo,
  },
  {
    label: "",
    imgPath: SliderImageThree,
  },
  // {
  //   label: 'Bird',
  //   imgPath:
  //     'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  // },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100vw", flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{ width: "100%", height: "100%" }}
      >
        {images.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Grid container>
                {/* <Grid
                  item
                  md={7}
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ width: "49%" }}>
                    <Typography
                      sx={{
                        textAlign: "left",
                        color: "#1a1a1d",
                        fontSize: "3.5rem",
                        color: "#161971",
                        fontStyle: "Inter",
                        fontWeight: "800",
                      }}
                    >
                      Apaki har banking service ka samadhan.
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "1.7em",
                        textAlign: "justify",
                        color: "#1a1a1d",
                      }}
                    >
                      New generation neo banking Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit sed do eiusmod.
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        float: "left",
                        mt: 2,
                        fontSize: "12px",
                        backgroundColor: "#FF6600",
                        "&:hover": {
                          backgroundColor: "#FF6600",
                        },
                      }}
                    >
                      Join Sevenpay now
                    </Button>
                  </Box>
                </Grid> */}
                <Grid
                  item
                  md={12}
                  // xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{
                      // display: 'block',
                      width: isSmallScreen ? "75vw" : "75vw",
                      height: isSmallScreen ? "40vh" : "80vh",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                </Grid>
              </Grid>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box sx={{ width: "100vw" }}>
        <MobileStepper
          steps={maxSteps}
          sx={{ width: "100%" }}
          position="static"
          activeStep={activeStep}
          style={{ display: "flex", justifyContent: "center" }}
          nextButton={
            <Button
              size="Large"
              sx={{ position: "absolute", top: "50%", right: 20 }}
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft sx={{ fontSize: "4rem" }} />
              ) : (
                <KeyboardArrowRight sx={{ fontSize: "4rem" }} />
              )}
            </Button>
          }
          backButton={
            <Button
              size="large"
              onClick={handleBack}
              sx={{ position: "absolute", top: "50%", left: 20 }}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight sx={{ fontSize: "4rem" }} />
              ) : (
                <KeyboardArrowLeft sx={{ fontSize: "4rem" }} />
              )}
            </Button>
          }
        />
      </Box>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
