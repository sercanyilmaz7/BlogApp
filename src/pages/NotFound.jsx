import { Box, CardMedia } from '@mui/material'
import React from 'react'
import { flex, modalStyle } from "../style/globalStyle";
import NotFoundImage from "../assets/404.jpg";

const NotFound = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}
      height="100vh"
    >
      <Box sx={{my:"auto"}}>
        <CardMedia
          component="img"
          height="500"
          width="500"
          image={NotFoundImage}
        />
      </Box>
    </Box>
  );
}

export default NotFound