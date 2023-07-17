import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
// import Image from "../Image/dipak.png";
import { Box } from "@mui/material";

export default function Testimonial(props) {
  let {
    CardOneName,
    CardOneaddress,
    CardOneabout,
    CardTwoName,
    CardTwoaddress,
    CardTwoabout,
  } = props.Data;
  return (
    <div style={{ display: "flex", justifyContent: "space-center" }}>
      <div
        className="slide"
        style={{ width: "70vw", display: "flex", justifyContent: "center" }}
      >
        <Card sx={{ overflow: "auto" }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{ width: "50px", height: "50px", border: "2px solid red" }}
              ></Avatar>
            }
            action={
              <FormatQuoteIcon
                fontSize="large"
                sx={{ fontSize: 50, color: "#FF6600", opacity: "0.3" }}
              />
            }
            titleTypographyProps={{
              variant: "h6",
              fontWeight: "bold",
              align: "left",
            }}
            subheaderTypographyProps={{
              variant: "subtitle2",
              align: "left",
            }}
            title={`${CardOneName}`}
            subheader={`${CardOneaddress}`}
          />
          <CardContent>
            <Typography
              sx={{
                textAlign: "justify",
                fontWeight: "bold",
                marginTop: "-10px",
              }}
              variant="h6"
              color="text.secondary"
            >
              {CardOneabout}
            </Typography>
          </CardContent>
        </Card>
        {/* </Box> */}
        {CardTwoName && (
          <Card sx={{ overflow: "auto" }}>
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    width: "50px",
                    height: "50px",
                    border: "2px solid red",
                  }}
                ></Avatar>
              }
              action={
                <FormatQuoteIcon
                  fontSize="large"
                  sx={{ fontSize: 50, color: "#FF6600", opacity: "0.3" }}
                />
              }
              titleTypographyProps={{
                variant: "h6",
                fontWeight: "bold",
                align: "left",
              }}
              subheaderTypographyProps={{
                variant: "subtitle2",
                align: "left",
              }}
              title={`${CardTwoName}`}
              subheader={`${CardTwoaddress}`}
            />
            <CardContent>
              <Typography
                sx={{
                  textAlign: "justify",
                  fontWeight: "bold",
                  marginTop: "-10px",
                }}
                variant="h6"
                color="text.secondary"
              >
                {`${CardTwoabout}`}
              </Typography>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
