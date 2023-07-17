import React, { useState } from "react";
import { Typography, Box, Grid } from "@mui/material";
import fbIcon from "../../Image/fbic.png";
import linkedin from "../../Image/linkedin.png";
import emailic from "../../Image/emaiic.png";
import Button from "@mui/material/Button";
import twitterIcon from "../../Image/twitteric.png";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
// import ListItemText from "@mui/material/ListItemText";
// import ListItem from "@mui/material/ListItem";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import logo from "../../Image/Logo.svg";
import CareerForm from "./Career Form/CareerForm";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const JobDescription = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "14vh",
        }}
      >
        <Box sx={{ width: "70vw" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "lest",
              mt: 3,
            }}
          >
            <Typography
            variant="h5"
              sx={{
                fontSize: "2rem",
                fontWeight: "600",
                color: "#000000",
                display:'flex',justifyContent:'left',textAlign:'left',fontSize:'2.4rem',fontWeight:'700'
              }}
            >
              Software Engineer - Backend
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                // borderBottom: "1px solid black",
              }}
            >
              <Typography
                sx={{
                  fontSize:'1.4rem',fontWeight:'500',
                  color: "#000000",
                }}
              >
                Bhubaneswar, Odisha
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "15vw",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.3rem",
                    fontWeight: "400",
                    color: "#000000",
                  }}
                >
                  Share this Job
                </Typography>
                <img src={fbIcon} alt="manoj" />
                <img src={twitterIcon} alt="manoj" />
                <img src={linkedin} alt="manoj" />
                <img src={emailic} alt="manoj" />
              </Box>
            </Box>
            <Typography
            variant="h5"
              sx={{
                mt: 3,
                fontSize:'1.4rem',fontWeight:'700',
                color: "#000000",
                textAlign: "left",
              }}
            >
              JOB DESCRIPTION
            </Typography>
            <Box>
              <Typography
              variant="p"
                sx={{
                  mt: 2,
                  fontSize: "1.4rem",
                  fontWeight: "400",
                  color: "#000000",
                  display:'flex',justifyContent:'left',textAlign:'left',
                }}
              >
                Responsibilities:
              </Typography>
              <Typography
              variant="p"
                sx={{
                  mt: 1,
                  fontSize: "1.4rem",
                  fontWeight: "400",
                  color: "#000000",
                  display:'flex',justifyContent:'left',textAlign:'left',
                }}
              >
                - Assume responsibility for Platform Architecture, Technical
                Design, and Engineering Practices for a tribe of 30-100+ people.
              </Typography>
              <Typography
                 variant="p"
                sx={{
                  mt: 1,
                  fontSize: "1.4rem",
                  fontWeight: "400",
                  color: "#000000",
                  display:'flex',justifyContent:'left',textAlign:'left',
                }}
              >
                - Mentor and guide senior engineers in making high-quality and
                practical engineering decisions.
              </Typography>
              <Typography
                 variant="p"
                sx={{
                  mt: 1,
                  fontSize: "1.4rem",
                  fontWeight: "400",
                  color: "#000000",
                  display:'flex',justifyContent:'left',textAlign:'left',
                }}
              >
                - Collaborate with stakeholders from Product Management,
                Strategic Planning, and executive management to define key
                strategies and requirements while ensuring timely delivery.
              </Typography>
              <Typography
                 variant="p"
                sx={{
                  mt: 1,
                  fontSize: "1.4rem",
                  fontWeight: "400",
                  color: "#000000",
                  display:'flex',justifyContent:'left',textAlign:'left',
                }}
              >
                - Establish software engineering processes and best practices to
                ensure the delivery of high-quality products.
              </Typography>
              <Typography
                 variant="p"
                sx={{
                  mt: 1,
                  fontSize: "1.4rem",
                  fontWeight: "400",
                  color: "#000000",
                  display:'flex',justifyContent:'left',textAlign:'left',
                }}
              >
                - Coordinate efforts with other Architects, Iteration Managers,
                Delivery Managers, Delivery Manager, and Program Managers to
                leverage best practices and ensure smooth operations.
              </Typography>
            </Box>
            <Box>
              <Typography
                 variant="p"
                sx={{
                  mt: 1,
                  fontSize: "1.4rem",
                  fontWeight: "400",
                  color: "#000000",
                  display:'flex',justifyContent:'left',textAlign:'left',
                }}
              >
                Relevant Experience:
              </Typography>
              <Typography
                 variant="p"
                sx={{
                  mt: 1,
                  fontSize: "1.4rem",
                  fontWeight: "400",
                  color: "#000000",
                  display:'flex',justifyContent:'left',textAlign:'left',
                }}
              >
                - Possess 15+ years of experience with .Net/.Net Core or similar
                enterprise-level technologies.
              </Typography>
              <Typography
                variant="p"
                sx={{
                  mt: 1,
                  fontSize: "1.4rem",
                  fontWeight: "400",
                  color: "#000000",
                  display:'flex',justifyContent:'left',textAlign:'left',
                }}
              >
                - Successfully lead enterprise-level software engineering and
                teams in the areas of software and/or cloud services for at
                least 3 years.
              </Typography>
              <Typography
               variant="p"
                sx={{
                  mt: 1,
                  fontSize: "1.4rem",
                  fontWeight: "400",
                  color: "#000000",
                  display:'flex',justifyContent:'left',textAlign:'left',
                }}
              >
                - Develop and enhance engineering practices and processes.
              </Typography>
              <Typography
                variant="p"
                sx={{
                  mt: 1,
                  fontSize: "1.4rem",
                  fontWeight: "400",
                  color: "#000000",
                  display:'flex',justifyContent:'left',textAlign:'left',
                }}
              >
                - Architect and design marketing technology solutions with a
                background in Customer Relationship Management, Engagement and
                Personalization platforms.
              </Typography>
              <Typography
                variant="p"
                sx={{
                  mt: 1,
                  fontSize: "1.4rem",
                  fontWeight: "400",
                  color: "#000000",
                  display:'flex',justifyContent:'left',textAlign:'left',
                }}
              >
                - Collaborate with platform and data architects to design
                complex cross-channel solutions involving the integration of
                various Marketing Technology platforms (Campaign Management,
                CMS, Web Analytics, Decisioning, Personalization, Identity
                Management, CDP, eCommerce, Business Intelligence platforms,
                Loyalty Platforms, Preference Centres, Customer Profile
                Applications).
              </Typography>
              <Typography
                 variant="p"
                sx={{
                  mt: 1,
                  fontSize: "1.4rem",
                  fontWeight: "400",
                  color: "#000000",
                  display:'flex',justifyContent:'left',textAlign:'left',
                }}
              >
                - Familiarity with JS stacks like Angular, React, Node,
                TypeScript, etc.
              </Typography>
              <Typography
                variant="p"
                sx={{
                  mt: 1,
                  fontSize: "1.4rem",
                  fontWeight: "400",
                  color: "#000000",
                  display:'flex',justifyContent:'left',textAlign:'left',
                }}
              >
                - Experience working with XML, JSON, NoSQL, and relational
                databases.
              </Typography>
              <Typography
                variant="p"
                sx={{
                  mt: 1,
                  fontSize: "1.4rem",
                  fontWeight: "400",
                  color: "#000000",
                  display:'flex',justifyContent:'left',textAlign:'left',
                }}
              >
                - Develop highly scalable data-driven applications based on
                structured and unstructured datasets.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "35vw",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    mt: 3,
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#000000",
                    textAlign: "left",
                  }}
                >
                  Department
                </Typography>
                <Typography
                 variant="p"
                  sx={{
                    fontSize: "1.4rem",
                    fontWeight: "400",
                    color: "#000000",
                    textAlign: "left",
                  }}
                >
                  Technology - Enterprise
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    mt: 3,
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#000000",
                    textAlign: "left",

                  }}
                >
                  Open Positions
                </Typography>
                <Typography
                 variant="p"
                  sx={{
                    fontSize: "1.4rem",
                    fontWeight: "400",
                    color: "#000000",
                    ml:.2,
                    textAlign: "left",
                    display:'flex',
                    justifyContent:'left'
                  }}
                >
                  4
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "35vw",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    mt: 3,
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#000000",
                    textAlign: "left",
                  }}
                >
                  Posted On
                </Typography>
                <Typography
                 variant="p"
                  sx={{
                    fontSize: "1.4rem",
                    fontWeight: "400",
                    color: "#000000",
                    textAlign: "left",
                  }}
                >
                  24-May-2023
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    mt: 3,
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#000000",
                    textAlign: "left",
                  }}
                >
                  Designation
                </Typography>
                <Typography
                variant="p"
              
                  sx={{
                    fontSize: "1.4rem",
                    fontWeight: "400",
                    color: "#000000",
                    ml:.1,
                    textAlign: "left",
                    display:'flex',
                    justifyContent:'left'
                  }}
                >
                  Software Engineer
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "35vw",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
             
            
            </Box>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: "flex-start",
                gap: "16px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff6600",
                  fontSize: "1.2rem",
                  "&:hover": {
                    backgroundColor: "#FF6600",
                  },
                }}
                onClick={handleClickOpen}
              >
                Apply Now
              </Button>
              <Button
                variant="contained"
                sx={{
                  color: "#FF6600",
                  backgroundColor: "#EFEFEF",
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
          </Box>
        </Box>
      </Box>
      <Box>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar
            sx={{
              position: "relative",
              width: "100%",
              display: "flex",
              // alignItems: "end",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Toolbar>
              <Grid container sx={{ width: "100%" }}>
                <Grid item xs={6}>
                  <Box sx={{ display: "flex", justifyContent: "left" }}>
                    <img
                      alt="logo"
                      src={logo}
                      height="30px"
                      width="40%"
                      style={{ marginLeft: "10vw" }}
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    color="inherit"
                    sx={{
                      color: "#FF6600",
                      fontSize: "1.6rem",
                      fontWeight: "500",
                    }}
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Home
                  </Button>
                </Grid>
              </Grid>

              {/* <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Sound
              </Typography> */}
            </Toolbar>
          </AppBar>
          {<CareerForm />}
        </Dialog>
      </Box>
    </>
  );
};
export default JobDescription;
