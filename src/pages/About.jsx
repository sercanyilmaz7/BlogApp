import { Box, ImageListItem, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import React from 'react'
import { arrowStyle, btnHoverStyle, flexColumn1 } from '../style/globalStyle';
import clr from "../assets/clr.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const iconStyle = {
  color: "black",
  "& .MuiSvgIcon-root": { color: "black" },
  "&:hover": { color: "red" },
  "&:hover .MuiSvgIcon-root": { color: "red" },
};
const About = () => {
  const icons = [
    {
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/school/clarusway/",
      title: "Linkedin",
    },
    {
      icon: <InstagramIcon />,
      url: "https://www.instagram.com/clarusway/?hl=en",
      title: "Instagram",
    },
    {
      icon: <TwitterIcon />,
      url: "https://twitter.com/clarusway?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      title: "Twitter",
    },
    {
      icon: <YouTubeIcon />,
      url: "https://www.youtube.com/c/clarusway",
      title: "Youtube",
    },
  ];
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
          width: 500,
         
        }}
      
      >
        <Box component="form" sx={flexColumn1}>
          <ImageListItem
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              width: 80,
              height: 50,
            }}
            // sx={{ width: 50, height: 20 }}
          >
            <img src={clr} />
          </ImageListItem>
          <Typography variant="h1" gutterBottom>
            Clarusway
          </Typography>
          <Box>
            <Box>
              <Typography variant="h3" gutterBottom>
                Full Stack Team
              </Typography>
            </Box>
            <List>
              {icons?.map((item, index) => (
                <ListItem key={index}>
                  <ListItemButton to={item.url} target="_blank" sx={iconStyle}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}

export default About