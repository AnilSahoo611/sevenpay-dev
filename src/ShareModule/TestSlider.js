

import { useState } from 'react';
import { Box,Button } from '@mui/material';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import { styled } from '@mui/system';
// import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import MiddleText from './MiddleText';
import Card from './Card'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const StyledAutoPlaySwipeableViews = styled(AutoPlaySwipeableViews)(({ theme }) => ({
  '& .slide': {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  '& .slide > div': {
    flex: 0,
    minWidth:'30vw',
    margin: theme.spacing(3),
    height:'auto',
  // Adjust the height as needed
    padding: theme.spacing(1),
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    [theme.breakpoints.down('sm')]: {
      height: '50vh',
      fontSize:'10px',
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.down('lg')]: {
      height:'30vh',
      marginBottom: theme.spacing(2),
    },
  },
}));

const CardData = [
  {id:1,CardOneName:'Dipak Kumer', CardOneaddress:'Jaipur',CardOneabout:'I have been using Sevenpay from last 5 years. I use mostly all the services like AePS, DMT, Mobile recharge etc. Me & my customers are very happy with the quality of these services and the customer support that Spice Money provide.',
  CardTwoName:'Rakesh Jain',  CardTwoaddress:'Patna', CardTwoabout:'Sevenpay has helped me establish and expand my business. I have been using Sevenpay services like AePS, Bill Payment, Pan Card, etc., for the past 3 years. My customers and I are highly satisfied with the services provided by Sevenpay.'
},
{id:1,CardOneName:'Dipak Kumer', CardOneaddress:'Jaipur',CardOneabout:'I have been using Sevenpay from last 5 years. I use mostly all the services like AePS, DMT, Mobile recharge etc. Me & my customers are very happy with the quality of these services and the customer support that Spice Money provide.',
CardTwoName:'Rakesh Jain',  CardTwoaddress:'Patna', CardTwoabout:'Sevenpay has helped me establish and expand my business. I have been using Sevenpay services like AePS, Bill Payment, Pan Card, etc., for the past 3 years. My customers and I are highly satisfied with the services provided by Sevenpay.'
}, {id:1,CardOneName:'Dipak Kumer', CardOneaddress:'Jaipur',CardOneabout:'I have been using Sevenpay from last 5 years. I use mostly all the services like AePS, DMT, Mobile recharge etc. Me & my customers are very happy with the quality of these services and the customer support that Spice Money provide.',

},
]

const TextSlider = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 3;
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' ,position:'relative',mt:4,}}>
    <Box sx={{width:'70vw',height:'80%'}}>
       <MiddleText name={'Testimonials'}/>
      <StyledAutoPlaySwipeableViews
        sx={{ mt: 5, display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={4000} // Adjust the autoplay interval as needed
      >
      {
        CardData.map((ele,index)=>(
          <Card Data={ele}/>
        ))
      }


      </StyledAutoPlaySwipeableViews>

      <Box sx={{ width: "70vw" }}>
        <MobileStepper
          steps={maxSteps}
          sx={{ width: "70vw" }}
          position="static"
          activeStep={activeStep}
          variant="none"
          style={{ display: "flex", justifyContent: "center" }}
          nextButton={
            <Button
              size="Large"
              sx={{ position: "absolute", top: "55%", right: '10%' }}
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
              sx={{ position: "absolute", top: "55%", left: '10%' }}
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
    </Box>
  );
};

export default TextSlider;







