import NavAfterLogin from '../component/NavAfterLogin'
import Quote from '../component/Quote'
import { useEffect, useState } from "react";
import { Modal, Box, Button, Fab, Grid } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CreateCard from '../component/modal/CreateCard';
import Card from '../component/Card';
import { useNavigate } from "react-router-dom";
import axios from '../../axios';

function AfterLoginSignup(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const [titles, setTitles] = useState([]);
    const [posts, setPosts] = useState([]);
    const [data, setData] = useState();
    const navigate = useNavigate();

    async function fetchPosts() {
        const res = await axios.get("/getPosts");
        setPosts(res.data);
      }
    
    useEffect(() => {
        fetchPosts();
      }, []);
    
    const handleModalOpen = () => {
        setIsModalOpen(true);
      };
    
    const handleModalClose = () => {
        setIsModalOpen(false);
        fetchPosts();
      };
    
    const handleCardSubmit = () => {
        setIsAdded(true);
      };

    return(

    <Box>
    <NavAfterLogin />
        <Quote />
  <Box
    sx={{
      display: "flex",
      gap: "20px",
      width: "100%",
      justifyContent: "center",
      flexWrap: "wrap",
    }}
  >
    {isAdded && <CreateCard />}
  </Box>
  <Box sx={{ display: "flex", justifyContent: "center", m: 1 }}>
    <Modal open={isModalOpen} onClose={handleModalClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "2rem",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
          height: "500px",
          width: "800px",
        }}
      >
        <CreateCard
          titles={titles}
          setTitles={setTitles}
          onCloseModal={handleModalClose}
          onSubmit={handleCardSubmit}
        />
      </Box>
    </Modal>
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      width={"80%"}
      alignSelf={"center"}
    >
      {posts.map((item, index) => {
        return (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            onClick={() => {
              navigate(`/posts/${item.id}`);
            }}
          />
        );
      })}
    </Grid>
  </Box>
  <Fab
    disableRipple
    color="primary"
    // color="contained"
    onClick={handleModalOpen}
    sx={{ position: "fixed", bottom: "16px", right: "16px" }}
  >
    <AddCircleIcon sx={{ fontSize: 60, color: "white" }} />
  </Fab>
</Box>
);
}

export default AfterLoginSignup;