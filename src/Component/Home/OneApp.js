import React from "react";
import { Box, Grid,Typography } from "@mui/material";
import Phone from "../../Image/phone.png";
import {useMediaQuery} from '@mui/material';
const OneApp = () => {
    const isSmallScreen = useMediaQuery("(max-width:900px)");
  return (
    <Box sx={{ mt: 5,display:'flex',justifyContent:'center',backgroundColor:'#F5FAFD',p:5,height:'80%' }}>
      <Grid container sx={{width:'75vw',display:'flex',justifyContent:'center'}}>
        <Grid item md={6}>
          <Box sx={{display:'flex',justifyContent:isSmallScreen ? 'center' :'center '}}>
            <img src={Phone} style={{ width:isSmallScreen ? "100%" :"80%", height:'100%' }} />
          </Box>
        </Grid>
        <Grid item md={6} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Box sx={{width:'70%',}} >
               <Typography sx={{textAlign:'left',color:'#1a1a1d',fontSize:'3.5rem',color:'#161971',fontStyle:'Inter',fontWeight:'800',fontFamily:'inter'}}>One App </Typography>
               <Typography sx={{textAlign:'left',color:'#1a1a1d',fontSize:'3.5rem',color:'#161971',fontStyle:'Inter',fontWeight:'800',fontFamily:'inter'}}>multiple services</Typography>
               <Typography sx={{fontSize:'1.7em',textAlign:'justify',color:'#1a1a1d',mt:1,fontFamily:'inter'}}>One App multiple services A great earning potential with the opportunity to grow your business with minimal one time investment and zero working capital</Typography>
              </Box>
        </Grid>
      </Grid>
    </Box>
  );  
};

export default OneApp;
