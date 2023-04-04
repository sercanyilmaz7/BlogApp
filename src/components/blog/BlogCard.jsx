import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { flex1, flex, cursor } from "../../style/globalStyle";
import { Box, Paper } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import useBlogCalls from "../../hooks/useBlogCalls";


const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
   const { postBlogsLike } = useBlogCalls();
  const convertRelativeTime = (date) => {
    return date.slice(0, 10) + " " + date.slice(11, 19);
  };
  // const convertedRelativeTime =(date)=>{
  //   return moment(date).fromNow();
  // };
  return (
    <Paper
      elevation={20}
      sx={{
        maxWidth: 345,
        p: 2,
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        sx={{ p: 1, objectFit: "contain", height: "130px" }}
        image={blog.image}
        component="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {blog.title}
        </Typography>
        {/* <Typography gutterBottom variant="h5" component="div">
          {convertedRelativeTime(blog.publish_date)}
        </Typography> */}
        <Typography gutterBottom variant="body2" component="div">
          {blog.category_name}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {blog.content.substring(0, 60) + "..."}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          {/* {blog.publish_date} */}
          {convertRelativeTime(blog.publish_date)}
        </Typography>
      </CardContent>
      <CardActions sx={flex}>
        <AccountBoxIcon />
        <Typography gutterBottom variant="h6" component="div">
          {blog.author}
        </Typography>
      </CardActions>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={flex1}>
          <Box sx={flex1}>
            <FavoriteBorderIcon
              onClick={() => postBlogsLike("likes", blog.id)}
            />
            <Typography variant="h6">{blog.likes}</Typography>
          </Box>
          <Box sx={flex1}>
            <ChatBubbleOutlineIcon />
            <Typography variant="h6">{blog.comment_count}</Typography>
          </Box>
          <Box sx={flex1}>
            <VisibilityOutlinedIcon />
            <Typography variant="h6">{blog.post_views}</Typography>
          </Box>
        </Box>
        <Box>
          <Button
            onClick={() => navigate(`detail/${blog.id}`, { state: blog })}
            // onClick={() => navigate(`my-blogs/detail/${blog.id}`, { state: blog })}
            size="small"
          >
            Learn More
          </Button>
        </Box>
      </CardActions>
    </Paper>
  );
};

export default BlogCard;
