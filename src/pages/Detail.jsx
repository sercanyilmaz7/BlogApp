import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useBlogCalls from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { flex, flexColumn, flexColumn1, flex1 } from "../style/globalStyle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import UpdateModal from "../components/blog/UpdateModal";
import DeleteModal from "../components/blog/DeleteModal";

const Detail = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [toggle, setToggle] = useState(false);
  const { getDetailsData, postCreateComments, deleteBlogsData } =
    useBlogCalls();
  const { details } = useSelector((state) => state.blog);
   const { currentUser } = useSelector((state) => state.auth);
   console.log(currentUser)
   console.log(details.author)
  const [info, setInfo] = useState();
  const { id } = useParams();
  const [comment, setComment] = useState({ post: "", content: "" });
  console.log(id);
  // console.log(comment)
  useEffect(() => {
    getDetailsData("blogs", id);
  }, []);
  console.log(details);
  console.log(details.comments);
  const convertRelativeTime = (date) => {
    return date?.slice(0, 10) + " " + date?.slice(11, 19);
  };
  const handleAddComment = () => {
    postCreateComments("comments", id, comment);
    setComment({ content: "" });
  };
  const handleChange = (e) => {
    setComment({ post: id, [e.target.name]: e.target.value });
  };
  const handleDeleteBlog = () => {
    setDeleteOpen(true)
    // deleteBlogsData("blogs", id);
    // navigate("/");
  };
  const handleUpdateBlog = () => {
    setInfo(details);
    setOpen(true);
  };

  return (
    <Grid container sx={flexColumn1} mt={10} spacing={5}>
      <Grid item sm={6} md={4} sx={{ minHeight: "400px" }}>
        <CardMedia
          sx={{ p: 1, objectFit: "contain", minHeight: "400px" }}
          image={details.image}
          title="React"
          component="img"
        />
      </Grid>
      <Grid item>
        <Card
          elevation={10}
          sx={{
            maxWidth: 1000,
            p: 2,
            width: "750px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardActions sx={{ display: "flex" }}>
            <Box>
              <AccountCircleIcon sx={{ fontSize: 70, color: "warning.main" }} />
            </Box>
            <Box>
              <Typography gutterBottom variant="h6" component="div">
                {details?.author}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {convertRelativeTime(details?.publish_date)}
              </Typography>
            </Box>
          </CardActions>
          <CardContent>
            <Typography gutterBottom variant="body2" component="div">
              {details?.category_name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {details?.title}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              {details?.content}
            </Typography>
          </CardContent>

          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={flex1}>
              <Box sx={flex1}>
                <FavoriteBorderIcon />
                <Typography variant="h6">{details?.likes}</Typography>
              </Box>
              <Box sx={flex1} onClick={() => setToggle(!toggle)}>
                <ChatBubbleOutlineIcon />
                <Typography variant="h6">{details?.comment_count}</Typography>
              </Box>
              <Box sx={flex1}>
                <VisibilityOutlinedIcon />
                <Typography variant="h6">{details?.post_views}</Typography>
              </Box>
            </Box>
          </CardActions>
        </Card>
        <UpdateModal
          open={open}
          setOpen={setOpen}
          info={info}
          setInfo={setInfo}
        />
        <DeleteModal
          deleteOpen={deleteOpen}
          setDeleteOpen={setDeleteOpen}
          id={id}
        />
        {currentUser === details.author &&  <Box sx={{ m: 4, display: "flex", justifyContent: "center" }}>
          <Button
            color="success"
            variant="contained"
            size="large"
            onClick={handleUpdateBlog}
          >
            UPDATE BLOG
          </Button>
          <Button
            sx={{ mx: 4 }}
            color="error"
            variant="contained"
            size="large"
            onClick={handleDeleteBlog}
          >
            DELETE BLOG
          </Button>
        </Box>}
       
        {toggle && (
          <Card elevation={10}>
            {details?.comments?.map((comment) => (
              <Box key={comment.id} sx={{ p: 2, maxWidth: 750 }}>
                <Typography variant="body2">{comment.user}</Typography>
                <Typography variant="body2">
                  {comment.time_stamp.slice(0, 10) +
                    " " +
                    comment.time_stamp.slice(11, 19)}
                </Typography>
                <Typography variant="body2">{comment.content}</Typography>
                <hr />
              </Box>
            ))}

            <TextField
              sx={{ mt: 4 }}
              fullWidth
              label="Add a comment"
              name="content"
              id="content"
              type="text"
              required
              variant="outlined"
              value={comment?.content || ""}
              onChange={handleChange}
            />
            <Button
              sx={{ mt: 4 }}
              fullWidth
              variant="contained"
              size="large"
              onClick={handleAddComment}
            >
              ADD COMMENT
            </Button>
          </Card>
        )}
      </Grid>
    </Grid>
  );
};

export default Detail;
