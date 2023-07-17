import React from 'react'
import { Box, Typography } from '@mui/material'
import  Slider  from './Slider';
import MiddleText from '../../../ShareModule/MiddleText';
const Joinus = () => {
  return (
    <Box sx={{display:'flex',justifyContent:'center'}}>
    <Box sx={{width:'100vw'}}>
<MiddleText name={'Join us'}/>
<Slider/>
    </Box>
    </Box>
  )
}

export default Joinus