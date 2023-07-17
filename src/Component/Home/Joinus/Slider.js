import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Cover from '../../../Image/joinSlider.png'
import { Grid } from '@mui/material';
import {useMediaQuery} from '@mui/material';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: '',
    imgPath:Cover,
    buttonText:'join as Agent'
  },
  {
    label: '',
    imgPath:Cover,
    buttonText:'join as Distributor'
  },
  {
    label: '',
    imgPath:Cover,
    buttonText:'join as Super Distributor'
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
    <Box sx={{display:'flex',justifyContent:'center',mt:5}}>

    <Box sx={{ width:'70vw' }}>

      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{width:'100%',height:'100%'}}
      >
        {images.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
                <Box sx={{position:'relative'}}>
                <Box sx={{width:'49%',position:'absolute', left:'90px',top:'20%',zIndex:1}}> 
                <Typography variant='h5'  style={{textAlign:'left',color:'#1a1a1d',fontSize:'3.2rem',color:'#1a1a1d',fontWeight:'700'}}>Become a Sevenpay Business partner and Earn Extra Income </Typography>
                <Typography variant='h6' sx={{textAlign:'left',fontSize:'1.8em',textAlign:'justify',color:'#1a1a1d',fontWeight:'400'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Typography>
                <Button variant='contained' sx={{float:'left',mt:2,fontSize:'12px',backgroundColor:'#FF6600'}}>{step.buttonText}</Button>
               </Box>
               <img
                style={{
                  // display: 'block',
                  width:isSmallScreen ? '60%' :'100%',
                  height:isSmallScreen ? '35vh' :'100%'
                }}
                src={step.imgPath}
                alt={step.label}
              />
              
                </Box>
           
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box sx={{width:'70vw',}}>

      <MobileStepper
        steps={maxSteps}
        sx={{width:'100%',
        '& .MuiMobileStepper-dot': {
         marginTop:'-10px'
        },
       }}
        position="static"
        activeStep={activeStep}
        style={{display:'flex',justifyContent:'center'}}
        
      />
      </Box>
    </Box>
    </Box>
  );
}

export default SwipeableTextMobileStepper;