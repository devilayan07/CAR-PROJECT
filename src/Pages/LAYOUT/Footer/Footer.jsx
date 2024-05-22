// import React,{useState} from 'react'
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import EmailIcon from '@mui/icons-material/Email';
// import XIcon from '@mui/icons-material/X';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import { Grid, Typography, Box, Tabs, Tab } from '@mui/material';
// import {Link} from "react-router-dom"
// import image1 from "../../../img/gallery-1.jpg"
// import image2 from "../../../img/gallery-2.jpg"
// import image3 from "../../../img/gallery-3.jpg"
// import image4 from "../../../img/gallery-4.jpg"
// import image5 from "../../../img/gallery-5.jpg"
// import image6 from "../../../img/gallery-6.jpg"



// function Footer() {
//   const[value,setValue]=useState()

//   const handleChange=((e,newValue)=>{
//     setValue(newValue)

//   })
//   return (
//     <section>
//     <Grid container sx={{backgroundColor:"#1c1e32",marginTop:"50px"}}>

//         <Grid item md={3} sx={{color:"white"}}>
//             <Typography variant='h5' sx={{marginTop:"20px"}}>GET IN TOUCH</Typography>
//             <Typography variant='body1'  > <LocationOnIcon /> Ballygaunge,Kolkata,West Bengal </Typography>
//             <Typography variant='body1' > <LocalPhoneIcon/> 6290652764 </Typography>
//             <Typography variant='body1' > <EmailIcon/> info@gmail.com </Typography>
//              <Typography variant='h4'>FOLLOW US</Typography>
//              <XIcon/>
//              <FacebookIcon/>
//              <InstagramIcon/>



         


//         </Grid>
//         <Grid item md={3} sx={{color:"white"}}> 
//           <Typography variant='h5' textAlign={"center"} sx={{marginTop:"20px"}}>USEFULL LINKS</Typography>
//           <Tabs orientation='vertical' value={value} onChange={handleChange}>
//           <Tab sx={{color:"white"}} label="Home" to="/" component={Link}/>
//             <Tab sx={{color:"white"}}label="About" to="/about" component={Link}/>
//              <Tab sx={{color:"white"}}  label="Product" to="/product" component={Link}/>

//           </Tabs>
//         </Grid>
//         <Grid item md={3} sx={{color:"white"}}>
//           <Typography variant='h5' textAlign={"center"} sx={{marginTop:"20px"}}>CAR GALLERY</Typography>
//           <Box display={"flex"} sx={{marginTop:"20px"}}>
//           <Grid item md={4}>
//             <img src={image1} alt="" height={"100px"} />
//           </Grid>
//           <Grid item md={4}>
//             <img src={image2} alt="" height={"100px"} />
//           </Grid>
//           <Grid item md={4}>
//             <img src={image3} alt="" height={"100px"} />
//             </Grid>
//  </Box>
//  <Box display={"flex"} sx={{marginTop:"20px"}}>
//           <Grid item md={4}>
//             <img src={image4} alt="" height={"100px"} />
//           </Grid>
//           <Grid item md={4}>
//             <img src={image5} alt="" height={"100px"} />
//           </Grid>
//           <Grid item md={4}>
//             <img src={image6} alt="" height={"100px"} />
//             </Grid>
//  </Box>





//         </Grid>
//         <Grid item md={3} sx={{color:"white"}}>
//           <Typography variant='h5' textAlign={"center"} sx={{marginTop:"20px"}}>OTHERS</Typography>
//           <Typography variant='body1' textAlign={"center"}>Private Policy</Typography>
//           <Typography variant='body1' textAlign={"center"}>Term & Condition</Typography>
//           <Typography variant='body1' textAlign={"center"}>Return & Refund</Typography>
//           <Typography variant='body1' textAlign={"center"}>Support</Typography>





//         </Grid>
//     </Grid>

    
//     </section>
//   )
// }

// export default Footer

import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Grid, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import image1 from '../../../img/gallery-1.jpg';
import image2 from '../../../img/gallery-2.jpg';
import image3 from '../../../img/gallery-3.jpg';
import image4 from '../../../img/gallery-4.jpg';
import image5 from '../../../img/gallery-5.jpg';
import image6 from '../../../img/gallery-6.jpg';

function Footer() {


  return (
    <section>
      <Grid container sx={{ backgroundColor: '#1c1e32', marginTop: '50px' }} spacing={2}>
        <Grid item xs={12} md={3} sx={{ color: 'white' }}>
          <Typography variant="h5" textAlign="center" sx={{ marginTop: '20px' }}>
            GET IN TOUCH
          </Typography>
          <Typography variant="body1" textAlign="center">
            {' '}
            <LocationOnIcon /> Ballygaunge, Kolkata, West Bengal{' '}
          </Typography>
          <Typography variant="body1" textAlign="center">
            {' '}
            <LocalPhoneIcon /> 6290652764{' '}
          </Typography>
          <Typography variant="body1" textAlign="center">
            {' '}
            <EmailIcon /> info@gmail.com{' '}
          </Typography>
          <Typography variant="h4" textAlign="center" sx={{marginTop:"10px"}}>FOLLOW US</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center',marginTop:"10px" }}>
            <XIcon />
            <FacebookIcon />
            <InstagramIcon />
          </Box>
        </Grid>
        <Grid item xs={12} md={3} sx={{ color: 'white' }}>
          <Typography variant="h5" textAlign="center" sx={{ marginTop: '20px' }}>
            USEFUL LINKS
          </Typography>
          {/* <Tabs orientation="vertical" value={value} onChange={handleChange}>
            <Tab sx={{ color: 'white' }} label="Home" to="/" component={Link} />
            <Tab sx={{ color: 'white' }} label="About" to="/about" component={Link} />
            <Tab sx={{ color: 'white' }} label="Product" to="/product" component={Link} />
          </Tabs> */}
                              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <Button sx={{ color: 'white', textAlign: 'center', marginBottom: '10px' }} component={Link} to="/">Home</Button>
            <Button sx={{ color: 'white', textAlign: 'center', marginBottom: '10px' }} component={Link} to="/about">About</Button>
            <Button sx={{ color: 'white', textAlign: 'center', marginBottom: '10px' }} component={Link} to="/product">Product</Button>
          </Box>

        </Grid>
        <Grid item xs={12} md={3} sx={{ color: 'white' }}>
          <Typography variant="h5" textAlign="center" sx={{ marginTop: '20px' }}>
            CAR GALLERY
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
            <Grid item xs={4}>
              <img src={image1} alt="" height="100px" />
            </Grid>
            <Grid item xs={4}>
              <img src={image2} alt="" height="100px" />
            </Grid>
            <Grid item xs={4}>
              <img src={image3} alt="" height="100px" />
            </Grid>
            <Grid item xs={4}>
              <img src={image4} alt="" height="100px" />
            </Grid>
            <Grid item xs={4}>
              <img src={image5} alt="" height="100px" />
            </Grid>
            <Grid item xs={4}>
              <img src={image6} alt="" height="100px" />
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={3} sx={{ color: 'white' }}>
          <Typography variant="h5" textAlign="center" sx={{ marginTop: '20px' }}>
            OTHERS
          </Typography>
          <Typography variant="body1" textAlign="center">
            Private Policy
          </Typography>
          <Typography variant="body1" textAlign="center">
            Term & Condition
          </Typography>
          <Typography variant="body1" textAlign="center">
            Return & Refund
          </Typography>
          <Typography variant="body1" textAlign="center">
            Support
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}

export default Footer;


