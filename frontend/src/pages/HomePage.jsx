import Nav from '../component/Nav'
import Quote from '../component/Quote';
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from '../../axios';
import { Modal, Box, Button, Fab, Grid } from "@mui/material";

function HomePage(){
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
        <Nav/>
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
        {isAdded }
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
        onClick={handleModalOpen}
        sx={{ position: "fixed", bottom: "16px", right: "16px" }}
      >

      </Fab>
    </Box>
    )
}

export default HomePage;