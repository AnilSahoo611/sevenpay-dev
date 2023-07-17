import React,{useState} from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  createTheme,
  ThemeProvider,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { constant } from "../../Constant/const";
import { Theme } from "./Theme";
import Logo from '../../Image/Logo.png'
import { useNavigate } from 'react-router-dom';
export default function Language() {
  const navigate = useNavigate()
  const isSmallScreen = useMediaQuery("(max-width:462px)");
  const [open, setOpen] = React.useState(true);
  const [LanguageData,SetLanguageData] = useState([...constant?.Language])
  const handleClickOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/Home')
    // setOpenHandler(false)
  };
  const handleLanguage = (id) => {
    SetLanguageData(LanguageData.map(ele=>ele.id === id ? {...ele,active:true} : {...ele,active:false}))
  }
  console.log("Data",LanguageData)
  return (
    <div style={{ height:open ?"100vh":'auto', width: "100vw" }}>
      {/* <ThemeProvider theme={Theme(isSmallScreen)}> */}
        <Dialog sx={{ boxShadow: "none" }} open={open} >
          <DialogTitle id="alert-dialog-title">
          <Box sx={{display:'flex',justifyContent:'center',pt:3}}>

          <img style={{width:'20rem',height:'3rem'}} src={Logo}/>
          </Box>
            <Typography
              sx={{
                display:'flex',
                justifyContent:'center',
                fontSize: "1.7rem",
                fontWeight: "bold",
                pt: 2.4,
              }}
            >
              Select Language
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {LanguageData.map((ele,index) => (
                <Button
                  color="secondary"
                  sx={{
                    backgroundColor:ele?.active? "#FFE9DB" : '#F1F1F1',
                    textTransform: "capitalize",
                    fontSize: "1.5rem",
                    width: "10vw",
                    m: 1,
                    pl: 2,
                    pr: 2,
                    color:ele?.active? "#FF6600" : '#1a1a1d',
                  }}
                  key={ele.id}  
                  onClick={()=>handleLanguage(ele.id)}
                >
                  {ele.name}
                </Button>
              ))}
            </Box>
          </DialogContent>
          <DialogActions>
            <Box
              sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
              <Button
                sx={{
                  color: "#fff",
                  mb: 5,
                  textTransform: "capitalize",
                  width: "15vw",
                  backgroundColor: "#FF6600",
                  fontSize: "1.5rem",
                }}
                disableRipple
                variant="contained"
                //   color="primary"
                onClick={handleClose}
                autoFocus
              >
                Continue
              </Button>
            </Box>
          </DialogActions>
        </Dialog>
      {/* </ThemeProvider> */}
    </div>
  );
}
