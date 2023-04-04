import * as React from "react";
import { flex, modalStyle } from "../style/globalStyle";
import { Box, Grid, Modal } from "@mui/material";
import useBlogCalls from "../hooks/useBlogCalls";
import { useEffect } from "react";


import { useSelector } from "react-redux";
import BlogCard from "../components/blog/BlogCard";

export default function DashBoard() {
 
  const { getBlogsData } = useBlogCalls();
  const { blogs } = useSelector((state) => state.blog);
 
  // const getBlogsData = async () => {
  //   const BASE_URL = "https://32176.fullstack.clarusway.com/";
  //   //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axios(`${BASE_URL}api/blogs/`);
  //     setdata(data);
  //     // console.log(data);
  //     // dispatch(getSuccess({ data, url }));
  //   } catch (error) {
  //     console.log(error);
  //     // dispatch(fetchFail());
  //   }
  // };
  console.log(blogs);

  useEffect(() => {
    getBlogsData("blogs");
  }, []);



  return (
    <Grid container sx={flex} mt={10} spacing={5}>
      {blogs?.map((blog, index) => (
        <Grid item key={index}>
          <BlogCard blog={blog} />
        </Grid>
      ))}
    </Grid>
  );
}
