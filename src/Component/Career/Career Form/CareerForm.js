import {
  Box,
  Button,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./CareerForm.css";
// import { makeStyles } from "@mui/style";
const CareerForm = () => {
  const navigate = useNavigate();

  return (
    <Box ml={40} mr={40} mt={2}>
      <Typography
        align="left"
        sx={{
          fontWeight: "700",
          color: "#000000",
          fontSize: "2.8rem",
          mb: "20px",
          fontFamily: "Inter",
        }}
      >
        Applying to Software Engineer - Backend
      </Typography>
      <form>
        <InputLabel
          htmlFor="my-textfield"
          sx={{
            textAlign: "start",
            fontWeight: "bold",
            background: "transparent",
          }}
        >
          Upload Resume*
        </InputLabel>
        <Grid item sm={12} mb={3}>
          <input type="file" id="file-input" name="file-input" />

          <InputLabel id="file-input-label" htmlFor="file-input">
            Choose File
          </InputLabel>
        </Grid>
        {/* <Box>
          <TextField
            type="file"
            //   label="Select File"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            helperText="(File Size should be more than 5MB)"
            margin="normal"
            sx={{ display: "none" }}
          />
          <Button
            sx={{ color: "#E3E3E3" }}
            variant="contained"
            component="span"
          >
            Choose File
          </Button>
        </Box> */}
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <InputLabel
              htmlFor="my-textfield"
              sx={{ textAlign: "start", fontWeight: "bold" }}
            >
              First Name*
            </InputLabel>
            <TextField
              fullWidth
              sx={{ mb: "20px" }}
              id="standard-size-normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabel
              htmlFor="my-textfield"
              sx={{ textAlign: "start", fontWeight: "bold" }}
            >
              Last Name*
            </InputLabel>
            <TextField
              fullWidth
              sx={{ mb: "20px" }}
              id="standard-size-normal"
            />
          </Grid>
        </Grid>
        <InputLabel
          htmlFor="my-textfield"
          sx={{ textAlign: "start", fontWeight: "bold" }}
        >
          Email Address*
        </InputLabel>
        <TextField fullWidth sx={{ mb: "20px" }} />
        <InputLabel
          htmlFor="my-textfield"
          sx={{ textAlign: "start", fontWeight: "bold" }}
        >
          Mobile Number*
        </InputLabel>
        <TextField fullWidth sx={{ mb: "20px" }} />
        <InputLabel
          htmlFor="my-textfield"
          sx={{ textAlign: "start", fontWeight: "bold" }}
        >
          Current Location*
        </InputLabel>
        <TextField fullWidth sx={{ mb: "20px" }} />
        <InputLabel
          htmlFor="my-textfield"
          sx={{ textAlign: "start", fontWeight: "bold" }}
        >
          Notice Period*
        </InputLabel>
        <TextField fullWidth sx={{ mb: "20px" }} />

        <Box
          borderRadius={1}
          gap={1}
          sx={{ display: "flex", alignItems: "start" }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF6600",
              mt: "1",
              // height: "30px",
              width: "10rem",
              mb: "25px",
              fontSize: "1.2rem",
              "&:hover": {
                backgroundColor: "#FF6600",
              },
            }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "#FF6600",
              backgroundColor: "#EFEFEF",
              width: "10rem",
              fontSize: "1.2rem",
              "&:hover": {
                backgroundColor: "#EFEFEF",
              },
            }}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CareerForm;
