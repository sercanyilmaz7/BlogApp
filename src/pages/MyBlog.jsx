import * as React from "react";
import { flex, modalStyle } from "../style/globalStyle";
import { Box, Grid, ImageListItem, Modal } from "@mui/material";
import useBlogCalls from "../hooks/useBlogCalls";
import { useEffect } from "react";
import loadingGif from "../assets/loading.gif";
import { useSelector } from "react-redux";
import BlogCard from "../components/blog/BlogCard";

export default function MyBlog() {
  const { getMyBlogsData } = useBlogCalls();
  const { myblogs, loading } = useSelector((state) => state.blog);
  const { id } = useSelector((state) => state.auth);
  // console.log(id);

  // console.log(myblogs);

  useEffect(() => {
    getMyBlogsData("blogs", id);
  }, []);

  return (
    <>
      {loading ? (
        <ImageListItem
          href="/"
          sx={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            marginTop: 40,
            width: 400,
          }}
          // sx={{ width: 50, height: 20 }}
        >
          <img src={loadingGif} />
        </ImageListItem>
      ) : (
        <Grid container sx={flex} mt={10} spacing={5}>
          {myblogs?.map((blog, index) => (
            <Grid item key={index}>
              <BlogCard blog={blog} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
