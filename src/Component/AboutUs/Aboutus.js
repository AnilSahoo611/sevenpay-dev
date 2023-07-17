import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Manojk from "../../Image/manojk.png";
import Manojkkkk from "../../Image/manojkkk.png";
import vision from "../../Image/vision.png";
import mission from "../../Image/mission.png";

import Manojkkk from "../../Image/manojkkk.png";
import TeamImage from "../../Image/teamImg.png";
import quoteIc from "../../Image/quoteIc.png";
import Header from "../../ShareModule/Header";
import Footer from "../../ShareModule/Footer";
import { Box } from "@mui/material";
import MiddleText from "../../ShareModule/MiddleText";
import CardMedia from "@mui/material/CardMedia";

export default function AboutUs() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "whiteSmoke",
          mt: "14vh",
        }}
      >
        <Box sx={{ width: "70vw" }}>
          <Box
            sx={{
              width: "100%",
              height: "20vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "4rem",
                fontWeight: "700",
                textAlign: "center",
                color: "#161971",
              }}
            >
              About Us
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* 2nd */}

      <Box sx={{ justifyContent: "center", display: "flex", mt: "5%" }}>
        <Box sx={{ width: "70vw" }}>
          <Typography
            variant="p"
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "1.6rem",
              fontWeight: "400",
            }}
          >
            Our unwavering resolve to foster financial inclusion in India fuels
            all our endeavors. We are resolute in our mission to make financial
            services easily accessible to individuals across the nation.
          </Typography>

          <br />
          <Typography
            variant="p"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "1.6rem",
              fontWeight: "400",
              mt: 3,
            }}
          >
            On this path, we are accompanied by our dedicated retail community
            and valued partners, who amplify the impact of our initiatives. Our
            determination lies in enabling the growth and prosperity of our
            retail partners in this digital era, as together we strive to
            strengthen our great nation.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Box sx={{ width: "70vw" }}>
          <div>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              <div
                style={{
                  width: "70vw",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <img
                    src={TeamImage}
                    alt="manoj"
                    style={{ width: "100%", margin: "20px auto" }}
                  />
                  <Box sx={{ mt: 3 }}>
                    <MiddleText name={"Management Team"} />
                    <Card
                      sx={{ mt: 5, display: "flex" }}
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        width: "100%",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ p: 1, width: 151 }}
                        image={Manojk}
                        alt="Manoj Kumar"
                      />
                      <Box>
                        <CardContent>
                          <Typography
                            variant="h5"
                            sx={{
                              fontSize: "1.6em",
                              textAlign: "left",
                              fontWeight: "800",
                            }}
                          >
                            Manoj Kumar
                          </Typography>
                          <Typography
                            sx={{
                              textAlign: "left",
                              display: "flex",
                              justifyContent: "left",
                              fontSize: "1.4rem",
                              fontWeight: "400",
                              mt: 0.5,
                            }}
                            variant="p"
                          >
                            Founder, MD & CEO
                          </Typography>
                          <Typography
                            variant="p"
                            sx={{
                              fontSize: "2rem",
                              textAlign: "left",
                              display: "flex",

                              justifyContent: "left",
                              color: "#1a1a1d",
                              mt: 1,
                            }}
                          >
                            <img
                              src={quoteIc}
                              alt="manoj"
                              style={{ width: "10px", height: "10px" }}
                            />
                            Our vision is to revolutionize the way people access
                            and experience financial services, empowering
                            individuals and driving societal progress.
                          </Typography>
                        </CardContent>
                      </Box>
                    </Card>
                    <Card
                      sx={{ mt: 5, display: "flex" }}
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        width: "100%",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ p: 1, width: 151 }}
                        image={Manojkkkk}
                        alt="Manoj Kumar"
                      />
                      <Box>
                        <CardContent>
                          <Typography
                            variant="h5"
                            sx={{
                              fontSize: "1.6em",
                              textAlign: "left",
                              fontWeight: "800",
                            }}
                          >
                            Manoj Kumar
                          </Typography>
                          <Typography
                            sx={{
                              textAlign: "left",
                              display: "flex",
                              justifyContent: "left",
                              fontSize: "1.4rem",
                              fontWeight: "400",
                              mt: 0.5,
                            }}
                            variant="p"
                          >
                            Founder, MD & CEO
                          </Typography>
                          <Typography
                            variant="p"
                            sx={{
                              fontSize: "2rem",
                              textAlign: "left",
                              display: "flex",

                              justifyContent: "left",
                              color: "#1a1a1d",
                              mt: 1,
                            }}
                          >
                            <img
                              src={quoteIc}
                              alt="manoj"
                              style={{ width: "10px", height: "10px" }}
                            />
                            Our vision is to revolutionize the way people access
                            and experience financial services, empowering
                            individuals and driving societal progress.
                          </Typography>
                        </CardContent>
                      </Box>
                    </Card>
                    <Card
                      sx={{ mt: 5, display: "flex" }}
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        width: "100%",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ p: 1, width: 151 }}
                        image={Manojkkkk}
                        alt="Manoj Kumar"
                      />
                      <Box>
                        <CardContent>
                          <Typography
                            variant="h5"
                            sx={{
                              fontSize: "1.6em",
                              textAlign: "left",
                              fontWeight: "800",
                            }}
                          >
                            Manoj Kumar
                          </Typography>
                          <Typography
                            sx={{
                              textAlign: "left",
                              display: "flex",
                              justifyContent: "left",
                              fontSize: "1.4rem",
                              fontWeight: "400",
                              mt: 0.5,
                            }}
                            variant="p"
                          >
                            Founder, MD & CEO
                          </Typography>
                          <Typography
                            variant="p"
                            sx={{
                              fontSize: "2rem",
                              textAlign: "left",
                              display: "flex",

                              justifyContent: "left",
                              color: "#1a1a1d",
                              mt: 1,
                            }}
                          >
                            <img
                              src={quoteIc}
                              alt="manoj"
                              style={{ width: "10px", height: "10px" }}
                            />
                            Our vision is to revolutionize the way people access
                            and experience financial services, empowering
                            individuals and driving societal progress.
                          </Typography>
                        </CardContent>
                      </Box>
                    </Card>
                  </Box>

                  <Box sx={{ mt: 5 }}>
                    <MiddleText
                      name={
                        "Join forces in our mission to develop the most expansive branchless banking network in India."
                      }
                    />

                    <Box
                      sx={{
                        position: "relative",
                        backgroundColor: "#fff",
                        display: "flex",
                        mt: 5,
                        mb: 2,
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          padding: 1,
                          position: "relative",
                          backgroundImage: `url(${vision})`,
                          borderRadius: 5,
                          border: "1px solid #ccc",
                          height: "50vh",
                          width: "35vw",
                          flex: "0 0 46%",
                        }}
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            left: 10,
                            bottom: 10,
                            padding: "20px",
                          }}
                        >
                          <Box>
                            <Typography
                              variant="h5"
                              sx={{
                                fontSize: "3.2rem",
                                fontWeight: "800",
                                textAlign: "left",
                                color: "#161971",
                              }}
                            >
                              Vision
                            </Typography>
                            <Box
                              style={{
                                width: "80px",
                                height: "8px",
                                borderRadius: "20px",
                                backgroundColor: "#ff6600",
                                marginTop: "5px",
                              }}
                            ></Box>
                          </Box>
                          <Typography
                            variant="p"
                            sx={{
                              mt: 2,
                              fontWeight: 700,
                              fontSize: "2.4rem",
                              textAlign: "left",
                              display: "flex",
                              justifyContent: "left",
                              color: "#1a1a1d",
                            }}
                          >
                            Enable universal access to financial services across
                            all locations.
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          padding: 1,
                          position: "relative",
                          backgroundImage: `url(${mission})`,
                          borderRadius: 5,
                          border: "1px solid #ccc",
                          height: "50vh",
                          width: "35vw",
                          flex: "0 0 46%",
                        }}
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 10,
                            left: 10,
                            padding: "20px",
                          }}
                        >
                          <Box>
                            <Typography
                              variant="h5"
                              sx={{
                                fontSize: "3.2rem",
                                fontWeight: "800",
                                textAlign: "left",
                                color: "#161971",
                              }}
                            >
                              Mission
                            </Typography>
                            <Box
                              style={{
                                width: "80px",
                                height: "8px",
                                borderRadius: "20px",
                                backgroundColor: "#ff6600",
                                marginTop: "10px",
                              }}
                            ></Box>
                          </Box>
                          <Typography
                            variant="p"
                            sx={{
                              mt: 2,
                              fontWeight: 700,
                              fontSize: "2.4rem",
                              textAlign: "left",
                              display: "flex",
                              justifyContent: "left",
                              color: "#1a1a1d",
                            }}
                          >
                            Establish a groundbreaking branchless banking
                            network.
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </div>
            </Box>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
