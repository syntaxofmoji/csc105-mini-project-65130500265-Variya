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
import axios from '../../axios';
import { useNavigate,NavLink } from "react-router-dom";

const theme = createTheme({
    typography: {
        fontFamily: "'Roboto Mono', monospace",
    }
});

export default function Login() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios
      .post(
        "http://localhost:5173/Login",
        {
          email: data.get("email"),
          password: data.get("password"),
        },
        { withCredentials: true }
      )
      .then((response) => {
        const isLogin = response.data.success;
        console.log(response)
        if (isLogin) {
          navigate("/posts");
        } else {
          alert("Error logging in");
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
              LOGIN
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
              LOGIN
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/Signup" variant="body2" sx={{ color: 'gray' }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}