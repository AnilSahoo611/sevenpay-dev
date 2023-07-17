import { Box, Typography } from "@mui/material";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import mapImage from "../../Image/google.png";

const containerStyle = {
  width: "100%",
  height: "350px",
  borderRadius: "20px",
};

const center = {
  lat: 20.349,
  lng: 85.8077,
};

const handleMap = () =>{
  const latitude = 20.349; // Replace with your desired latitude
    const longitude = 85.8077; // Replace with your desired longitude
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, '_blank');
}
const Google = () => {
  return (
    <div>
      <Box padding={2}>
        {/* <LoadScript googleMapsApiKey="AIzaSyCU5EL9BzfzOGdJxDNib3SScB4GNfW6p5M">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
            options={{
              disableDefaultUI: true,
            }}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript> */}

        <img src={mapImage} alt="mapLogo" height="380vh" width="450vh"  style={{cursor:'pointer'}} onClick={handleMap}/>
      </Box>
    </div>
  );
};

export default Google;
