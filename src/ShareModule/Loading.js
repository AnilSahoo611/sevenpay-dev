import React from 'react';
import { styled } from '@mui/system';
import { CircularProgress, Typography } from '@mui/material';

const BankingLoadingContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width:'100vw',
  backgroundColor: '#ffff',
});

const BankingLoadingText = styled(Typography)({
  marginLeft: '8px',
});

const Loading = () => {
  return (
    <BankingLoadingContainer>
      <CircularProgress size={50}  sx={{color:'#ff6600'}}/>
      <BankingLoadingText variant="h6"> 
        Loading...
      </BankingLoadingText>
    </BankingLoadingContainer>
  );
};

export default Loading;
