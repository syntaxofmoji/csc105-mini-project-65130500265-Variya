import * as React from "react";
import Box from "@mui/material/Box";
import stamp from "../asset/stamp.png";

export default function Quote() {
  return (
    <Box
      sx={{
        height: "150",
        backgroundColor: "#A0A674",
      }}
    >
      <Box display="flex" justifyContent="center" alignItems="center" height= "150px">
        <img src={stamp} style={{ width: "110px", height:"" }} />
        <Box width="30px">
        </Box>
        <Box width={550}sx >
        Writing down your thoughts provides you with a handy way to alleviate stress, loneliness, and anxiety.
        </Box>
      </Box>
    </Box>
  );
}
