import { Box, Container, Paper, Typography } from "@mui/material";

 export default function Footer() {
   return (
     <Paper
       sx={{
         marginTop: "calc(10% + 60px)",
         bottom: 0,
         width: "100%",
         backgroundColor: "primary.main",
       }}
       component="footer"
       square
       variant="outlined"
     >
       <Container maxWidth="lg">
         <Box
           sx={{
             flexGrow: 1,
             justifyContent: "center",
             display: "flex",
             my: 1,
           }}
         >
           <div>
             {/* <Image
               priority
               src="/Logo.svg"
               width={75}
               height={30}
               alt="Logo"
             /> */}
           </div>
         </Box>

         <Box
           sx={{
             flexGrow: 1,
             justifyContent: "center",
             display: "flex",
             mb: 2,
           }}
         >
           <Typography variant="h6" color="white" >
             Developed by SY  &  Copyright ©2023
           </Typography>
         </Box>
       </Container>
     </Paper>
   );
 }