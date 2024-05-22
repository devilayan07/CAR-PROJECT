import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import "./About.css"
import image1 from "../../../img/about.png"
import image2 from "../../../img/banner-left.png"
import image3 from "../../../img/banner-right.png"


function About() {
  return (
    <>
        <section className='banner' id='banner'>
    <Box>
      <Typography variant='h3' textAlign={"center"} >ABOUT US</Typography>
    </Box>

    </section>

<section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center',marginTop:"10px" }}>
      
      <Typography variant='h3'>WELCOME TO ROYAL CARS</Typography>
      <img src={image1} alt="" style={{ maxWidth: '100%', marginTop: '20px' }} />
      <Typography variant='body-2'>Justo et eos et ut takimata sed sadipscing dolore lorem, et elitr labore labore voluptua no rebum sed, stet voluptua amet sed elitr ea dolor dolores no clita. Dolores diam magna clita ea eos amet, amet rebum voluptua vero vero sed clita accusam takimata. Nonumy labore ipsum sea voluptua sea eos sit justo, no ipsum sanctus sanctus no et no ipsum amet, tempor labore est labore no. Eos diam eirmod lorem ut eirmod, ipsum diam sadipscing stet dolores elitr elitr eirmod dolore. Magna elitr accusam takimata labore, et at erat eirmod consetetur tempor eirmod invidunt est, ipsum nonumy at et.</Typography>

    
  </section>


      
      <Box sx={{marginTop:"20px"}}>
        <Grid container spacing={1} sx={{ display: "flex" }}>
          <Grid item md={4} sm={6} sx={{ display: "flex", backgroundColor: "#F4F5F8", height: "200px", justifyContent: "center", alignItems: "center" }}>
            <SupportAgentIcon sx={{ height: "100px", width: "100px", backgroundColor: "#F77D0A" }} />
            <Typography variant='h4' sx={{ marginLeft: "20px" }}>24/7 CAR RENTAL SUPPORT</Typography>


          </Grid>
          <Grid item md={4} sm={6} sx={{ display: "flex", backgroundColor: "#2B2E4A", height: "200px", alignItems: "center" }}>
            <DirectionsCarIcon sx={{ height: "100px", width: "100px", backgroundColor: "#F77D0A" }} />
            <Typography variant='h4' sx={{ marginLeft: "20px", color: "#F4F5F8" }}>CAR RESERVATION ANYTIME</Typography>


          </Grid>
          <Grid item md={4} sm={6} sx={{ display: "flex", backgroundColor: "#F4F5F8", height: "200px", justifyContent: "center", alignItems: "center" }}>
            <LocationOnIcon sx={{ height: "100px", width: "100px", backgroundColor: "#F77D0A" }} />
            <Typography variant='h4' sx={{ marginLeft: "10px" }}>LOTS OF PICKUP LOCATION</Typography>
          </Grid>
        </Grid>

      </Box>
      <Box sx={{ marginTop: "40px" }}>
        <Grid container display={{ display: "flex" }}>
          <Grid item md={6} sm={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#2B2E4A" }}>
            <img src={image2} alt="" style={{ height: "300px" }} />
            <Typography variant='h5' sx={{ color: "#F4F5F8" }}>WANT TO BE DRIVER?</Typography>
          </Grid>
          <Grid item md={6} sm={12} sx={{ display: "flex", alignItems: "center", backgroundColor: "#1C1E32" }}>
            <Typography variant='h5' sx={{ color: "#F4F5F8", paddingLeft: "10px" }}>LOOKING FOR A CAR?</Typography>


            <img src={image3} alt="" style={{ height: "300px" }} />

          </Grid>

        </Grid>


      </Box>






    </>
  )
}

export default About
