import React, { useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import BankingImage from "../../Image/banking.png";
import BankLogo from "../../Image/bankingLogo.png";
import ListItemText from "@mui/material/ListItemText";

const btnList = [
  { id: 1, name: "Banking", active: true },
  { id: 2, name: "Digital", active: false },
  { id: 3, name: "Utility Payment System", active: false },
  { id: 4, name: "Insurance", active: false },
  { id: 5, name: "Travel", active: false },
  { id: 6, name: "Essential Services", active: false },
  { id: 7, name: "Partner Services", active: false },
];
const DropDown = () => {
  const [buttonList, setButtonList] = useState(btnList);
  const handleClick = (id) => {
    setButtonList(
      buttonList.map((ele) =>
        ele.id == id ? { ...ele, active: true } : { ...ele, active: false }
      )
    );
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "65vw",height:'80%', mt: 3, mb: 5 }}>
        <Grid container spacing={3}>
          <Grid item md={3} sx={{ mt: 5 }}>
            <Box>
              <List
                sx={{ width: "100%", maxWidth: 360 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                {buttonList.map((ele, index) => (
                  <ListItemButton
                    key={index}
                    sx={{
                      color: ele.active ? "#fff" : "#161971",
                      backgroundColor: ele.active ? "#FF6600" : "",
                      borderRadius: "5px",
                      "&:hover": {
                        backgroundColor: ele.active ? "#FF6600" : "",
                        color: ele.active ? "#fff" : "#161971",
                       
                      },
                     
                      // "&:hover .MuiTouchRipple-root": {
                      //   display: "none",
                      // },
                    }}
                    onClick={() => handleClick(ele.id)}
                  >
                    <ListItemText
                      sx={{fontFamily:'Inter'}}
                      primaryTypographyProps={{
                        fontSize:'2rem',
                        fontWeight: "bold",
                        fontFamily:'Inter'
                      }}
                      primary={ele.name}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Grid>
          <Grid item md={9}>
            <Box sx={{ ml: 3 }}>
              <Grid container>
                <Grid item md={6}>
                  <Box>
                    <img
                      src={BankingImage}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ textAlign: "justify" }}>
                    <Box sx={{ display: "flex" }}>
                      <img
                        src={BankLogo}
                        style={{ width: "4.1rem", height: "4.1rem" }}
                      />
                      <Typography
                      variant="p"
                        sx={{
                          mt: 1.3,
                          ml: 0.8,
                          fontSize: "1.6rem",
                          color: "blue",
                          mb:3
                        }}
                      >
                        Banking
                      </Typography>
                    </Box>
                    <Box sx={{mb:1}}>
                    <Typography variant="p"
                      sx={{ fontWeight: "600", fontSize: "3.2rem" ,textAlign:'justify'}}
                    >
                      Become the most trusted Banker of your area
                    </Typography><br/>
                    <Box sx={{mt:2}}>
                    <Typography variant="" sx={{ pt: '20px' ,fontSize:'1.8rem'}}>
                      Customers can withdraw money, deposit cash, transfer
                      money, get a loan or make secure savings from your shop.
                      Join the network that services a million financial
                      transactions per day. And in every service you give, you
                      earn. Simple and effective.
                    </Typography><br/>
                    </Box>
                    </Box>
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
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DropDown;
