import React from "react";
import MiddleText from "../../ShareModule/MiddleText";
import { Box, Grid } from "@mui/material";
import KotakBank from "../../Image/kotak.png";
import SouthIndianBank from "../../Image/southIndian.png";
import UnionBank from "../../Image/union.png";
import HdfcBank from "../../Image/Hdfc.png";
import FinoBank from "../../Image/Fino.png";
import YesBank from "../../Image/yesbank.png";
import AxisBank from "../../Image/Axis.png";
import RblBank from "../../Image/RblBank.png";
const CorporatePartner = () => {
  const imagesPerRow = 4;
  const BankData = [
    { id: 1, img: KotakBank, width: "212px", height: "64px" },
    { id: 2, img: SouthIndianBank, width: "172px", height: "61px" },
    { id: 3, img: UnionBank, width: "97px", height: "97px" },
    { id: 4, img: HdfcBank, width: "214px", height: "42.73px" },
    { id: 5, img: FinoBank, width: "191px", height: "106px" },
    { id: 6, img: YesBank, width: "153px", height: "64px" },
    { id: 7, img: AxisBank, width: "180px", height: "99px" },
    { id: 8, img: RblBank, width: "92px", height: "92px" },
  ];
  return (
    <Box sx={{ mt: 5 }}>
      <MiddleText name="Corporate Partners" />
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={{ width: "70vw", mt: 5 }}>
          <Box sx={{}}>
            {/* {
        BankData.map(ele=>(
          <img key={ele.id} src={ele.img} sx={{width:'20px',height:'20px'}}/>
        ))
       } */}
            <Grid container spacing={2}>
              {BankData.map((imageUrl, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={index}
                  sx={{
                    "&:hover": {
                      transform: " scale(1.05)",
                      cursor: "pointer",
                    },
                  }}
                >
                  <img
                    src={imageUrl.img}
                    alt="corporatePartner"
                    style={{
                      width: imageUrl.width,
                      height: imageUrl.height,
                      marginTop: "5px",
                    }}
                    alt={`Image ${index + 1}`}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CorporatePartner;
