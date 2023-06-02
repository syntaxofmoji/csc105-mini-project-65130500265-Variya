import {
    Box,
    Button,
    TextField,
  } from "@mui/material";
  import { useState } from "react";
 import axios from "../../../axios";
  
  function CreateCard({ onCloseModal, setTitles, titles }) {
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleNumberSelection = (number) => {
      setSelectedNumber(number);
    };
  
    const resetanything = () => {
      setDescription("");
      setTitle("");
      setSelectedNumber(null);
    };
  
    const createPost = async () => {
      await axios.post("/addPost", {
        title,
        description,
      });
      onCloseModal();
    };
  
    return (
      <Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            label="TO"
            sx={{ m: 2 }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Write A Message"
            multiline
            rows={4}
            sx={{ m: 2 }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            label="FROM"
            multiline
            rows={4}
            sx={{ m: 2 }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
         
          <Box sx={{ display: "flex" }}>
            <Button
              disableRipple
              onClick={createPost}
              sx={{
                backgroundColor: "#505A74",
                color: "white",
                ":hover": { backgroundColor: "#505A74" },
                width: "370px",
                height: "50px",
                ml: 2,
                fontSize: "15px",
              }}
            >
              Submit
            </Button>
            <Button
              disableRipple
              onClick={() => resetanything()}
              sx={{
                backgroundColor: "#b8b4b4",
                color: "white",
                ":hover": { backgroundColor: "#b8b4b4" },
                width: "370px",
                height: "50px",
                ml: 2,
                fontSize: "15px",
              }}
            >
              Reset
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
  
  export default CreateCard;