import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Navnobutton from '../component/Navnobutton';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../../axios';

const theme = createTheme({
    typography: {
        fontFamily: "'Roboto Mono', monospace",
    }
});

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/Signup", { email, password}).then((res) => {
      if (res.data.success) {
        navigate("/Login");
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Navnobutton/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <h2 style={{ flexGrow: 1, textAlign: "center", fontSize:"25px" }}>
              SIGN UP
            </h2>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}  >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, 
               fontFamily: "'Roboto Mono', monospace",
               backgroundColor: "rgba(112, 99, 64, 0.5)",}}
            >
              SIGN UP
            </Button>
            <Grid container>
              <Grid item>
                <Link href="Login" variant="body2" sx={{ color: 'gray' }}>
                  {"Already a user? LOGIN"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}