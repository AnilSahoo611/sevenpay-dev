import React from "react";
import { Box,Typography } from "@mui/material";
const MiddleText = ({name}) => {
  return (
    // <Box sx={{ width: "100vw" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          pt:2
        }}
      >
        <Typography
        variant="h5"
          sx={{
            fontSize: "4.2rem",
            fontWeight: "800",
            textAlign: "center",
            color: "#161971",
           
          }}
        >
          {name}
        </Typography>
        <Box
          style={{ width: "80px", height: "8px", borderRadius:'20px',backgroundColor: "#ff6600",marginTop:'10px',}}
        ></Box>
      </Box>
    // </Box>
  );
};

export default MiddleText;
