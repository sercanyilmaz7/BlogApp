import * as React from "react";
import { flex, modalStyle } from "../style/globalStyle";
import { Box, Grid, Modal } from "@mui/material";
import useBlogCalls from "../hooks/useBlogCalls";
import { useEffect } from "react";

import { useSelector } from "react-redux";
import BlogCard from "../components/blog/BlogCard";

export default function MyBlog() {
  const { getMyBlogsData } = useBlogCalls();
  const { myblogs } = useSelector((state) => state.blog);
  const { id } = useSelector((state) => state.auth);
  // console.log(id);

  // console.log(myblogs);

  useEffect(() => {
    getMyBlogsData("blogs", id);
  }, []);

  return (
  
      <Grid container sx={flex} mt={10} spacing={5}>
        {myblogs?.map((blog, index) => (
          <Grid item key={index}>
            <BlogCard blog={blog} />
          </Grid>
        ))}
      </Grid>
   
  );
}
