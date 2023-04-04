import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { flexColumn, modalStyle } from "../style/globalStyle";
import useBlogCalls from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";

const NewBlog = () => {
  const { getCategorisData, postBlogsData } = useBlogCalls();
  const { categories } = useSelector((state) => state.blog);
  // console.log(categories)

  const [info, setInfo] = useState({
    title: "",
    content: "",
    image: "",
    category: "",
    status: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    postBlogsData("blogs", info);
    setInfo({
      title: "",
      content: "",
      image: "",
      category: "",
      status: "",
    });
  };
  const handleChange = (e) => {
    // setInfo({...info,[e.target.name]:e.target.value})
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  console.log(info);
  const handleReset=()=>{
     setInfo({
       title: "",
       content: "",
       image: "",
       category: "",
       status: "",
     });
  }

  useEffect(() => {
    getCategorisData("categories");
  }, []);

  return (
    <div>
      <Paper
        elevation={20}
        sx={{
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          marginTop: 40,
          width: 400,
          p: 4,
        }}
      >
        {/* //? Box componentine component="form" yazarak form özelliği kazandırıyoruz böyle onSubmit i burada kullanabiliyoruz.Onsubmit sorm da olması lazım!!! */}
        <Box component="form" sx={flexColumn} onSubmit={handleSubmit}>
          <Typography variant="h6" noWrap component="div">
            New Blog
          </Typography>
          <TextField
            label="Title"
            name="title"
            id="tile"
            type="text"
            variant="outlined"
            required
            //? info? buardakı optional cheining çok onemli çunku verı ılk olarak null geldiğinde hata verecektir.
            value={info?.title || ""}
            onChange={handleChange}
          />
          <TextField
            label="Image URL"
            name="image"
            id="image"
            type="url"
            required
            variant="outlined"
            value={info?.image || ""}
            onChange={handleChange}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Categories</InputLabel>
            <Select
              required
              labelId="category"
              id="category"
              name="category"
              value={info?.category}
              label="Category"
              onChange={handleChange}
            >
              {/* //? categoris leri map ile dönerek MEnuitemleri bastık. selectler basılmış oldu. */}
              {categories?.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              required
              labelId="status"
              id="status"
              name="status"
              value={info?.status}
              label="Status"
              onChange={handleChange}
            >
              <MenuItem value="d">Draft</MenuItem>
              <MenuItem value="p">Published</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Content"
            name="content"
            id="content"
            type="text"
            required
            variant="outlined"
            value={info?.content || ""}
            onChange={handleChange}
          />

          <Button onClick={handleReset} variant="contained" size="large">
            Reset Form
          </Button>
          <Button type="submit" variant="contained" size="large">
            Submit Form
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default NewBlog;
