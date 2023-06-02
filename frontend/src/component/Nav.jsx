import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../App.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#605028" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ flexGrow: 1, textAlign: "center", fontSize:"25px" }}>
              ANONYMOUS POSTCARD
            </h2>
          <Box sx={{ display: { xs: "none", md: "block" }, backgroundColor:'#D9D9D9', margin: '20px' }}>
            <Button 
                onClick={() => {
                  navigate("/Signup");
                }} 
                sx={{
                  color: "black", 
                  fontFamily: "'Roboto Mono', monospace"
                  }}>
                    SIGNUP
                    </Button>
          </Box>
          <Grid sx={{ display: { xs: "none", md: "block" }, backgroundColor:'#D9D9D9' }}>
          <Button 
          onClick={() => {
            navigate("/Login");
          }}
          sx={{
            color: "black",
            fontFamily: "'Roboto Mono', monospace"
            }}>
              LOGIN
              </Button>
          </Grid>
          <Grid sx={{ display: { xs: "block", md: "none" } }}>
            <Button color="inherit">
              <MenuIcon></MenuIcon>
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
