import {
    Box,
    Button,
    FormControl,
    TextField,
    Typography,
    Checkbox,
    FormControlLabel,
  } from "@mui/material";
  import { useState,useEffect } from "react";
  import axios from "../../axios";
import { useParams } from "react-router-dom";
  
  function EditCard({ onCloseModal, setTitles, titles, setPost}) {
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleNumberSelection = (number) => {
      setSelectedNumber(number);
    };
    const {id} = useParams();

    async function fetchPost() {
        const res = await axios.get(`/getPosts/${id}`);
        setTitle(res.data.title);
        setDescription(res.data.description);
      }
      useEffect(() => {
        fetchPost();
      }, []);
  
    const resetanything = () => {
      setDescription("");
      setTitle("");
      setSelectedNumber(null);
    };
  
    const EditPost = async () => {
        try {
            await axios.patch(`/editPost/${id}`, {
                title,
                description,
              });
              setPost({title, description})
        } catch (e) {
            console.log(e);
        } 
      
      onCloseModal();
    };
  
    return (
      <Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            label="Title"
            sx={{ m: 2 }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Write Your Message"
            multiline
            rows={4}
            sx={{ m: 2 }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Box sx={{ display: "flex" }}>
            <Button
              disableRipple
              onClick={EditPost}
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
  
  export default EditCard;
  