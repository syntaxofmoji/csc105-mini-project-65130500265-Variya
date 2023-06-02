import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "../App.css";

export default function NavAfterLogin() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#605028" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* <Typography
            className="roboto"
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "center",
            }}
          >
           
            ANONYMOUS POSTCARD
          </Typography> */}
          <h2 style={{ flexGrow: 1, textAlign: "center", fontSize:"25px" }}>
              ANONYMOUS POSTCARD
            </h2>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
