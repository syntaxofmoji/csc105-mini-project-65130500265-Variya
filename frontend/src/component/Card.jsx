import { Box, Grid } from "@mui/material";

function Card(props) {
  return (
    <Box onClick={props.onClick}>

      <Box
        sx={{
          display: "flex",
          height: 200,
          width: 350,
          backgroundColor: "#DFCCAF",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "'Roboto Mono', monospace",
          m: 3,
        }}
      >
        {props.title}
        {props.description}
      </Box>
    </Box>
  );
}
export default Card;