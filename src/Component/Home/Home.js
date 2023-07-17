import React, { useState } from "react";
import Slider from "./Slider";
import Language from "../Language/Language";
import Header from "../../ShareModule/Header";
import DropDown from "./DropDown";
import OneApp from "./OneApp";
import Joinus from "./Joinus/Joinus";
import CorporatePartner from "./CorporatePartner";
import { Box } from "@mui/material";
import TextSlider from "../../ShareModule/TestSlider";
import SevenApyAdvantage from "./SevenApyAdvantage";
import Footer from "../../ShareModule/Footer";
import { useSelector } from "react-redux";
const Home = () => {
  const StateValue = useSelector(state=>state.reducer.googleMap.isOpen) 
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: "100%", overflow: "hidden !important" }}>
      <Box sx={{ mt: "19vh" }}>
        <Slider />
        <OneApp />
        <DropDown />
        <SevenApyAdvantage />
        <TextSlider />
        <Joinus />
        <CorporatePartner name={"Corporate Partner"} />
   {StateValue && <Language open={open} setOpen={setOpen} />}
      </Box>
    </Box>
  );
};
export default Home;
