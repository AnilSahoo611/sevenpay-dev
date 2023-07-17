import { createTheme} from "@mui/material";

export const Theme = (isSmallScreen) => {
    console.log("isSmallScreen",isSmallScreen)
     const theme = createTheme({
        palette: {
          primary: {
            main: "#f36c15",
          },
          secondary: {
            main: "#ffe9d",
          },
        },
        components: {
          MuiBackdrop: {
            styleOverrides: {
              root: {
                background: "rgba(255,255,255, 0.7)",
                backdropFilter: 'blur(10px)'
              },
            },
          },
          MuiDialog: {
            styleOverrides: {
              paper: {
                boxShadow: "none",
                backgroundColor: "#FFFF",
                borderRadius: "20px",
                maxWidth: isSmallScreen ? "85vw" : "45vw",
                height: "auto",
              },
            },
          },
        },
      });
      return theme
}