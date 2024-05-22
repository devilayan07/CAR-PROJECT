import React, { useState, useEffect } from 'react'
import axiosInstance, { profile_pic } from '../../../Helper/Helper'
import { Box, Typography, Grid, OutlinedInput, FormLabel, Card, CardMedia,CardContent } from '@mui/material'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { styled } from '@mui/system';


const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));



function ProfileDetails() {
  const [details, setDetails] = useState([])

  useEffect(() => {
    axiosInstance.get("/user/profile-details")
      .then((response) => {
        console.log(response.data.data)
        setDetails(response.data.data)
      }).catch((error) => {
        console.log("API Error", error)
      })

  }, [])
  return (
    <>
      <Box sx={{ marginTop: "100px" }}>
        <Grid container sx={{ height: "300px", width: "400px",margin:"0 auto"}}>
          <Grid item xs={12} sx={{ textAlign: "center", backgroundColor: "#F77D0A" }}>
            <img src={profile_pic(details.profile_pic)} alt="" height={"100px"}
              width={"100px"}
              style={{ marginTop: "20px", borderRadius: "50%" }}
            />
            <Box sx={{ marginTop: "30px" }}>
              <Typography variant='h5' sx={{ color: "whitesmoke" }}>{details.first_name} {details.last_name}</Typography>
              <Typography variant='h6' sx={{ color: "whitesmoke" }} >Email Id: {details.email}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Typography sx={{ paddingLeft: "8px", color: "whitesmoke" }}>
                <FacebookIcon />
              </Typography>
              <Typography sx={{ paddingLeft: "8px", color: "whitesmoke" }}>
                <TwitterIcon />
              </Typography>
              <Typography sx={{ paddingLeft: "8px", color: "whitesmoke" }}>
                <InstagramIcon />
              </Typography>
            </Box>


          </Grid>

        </Grid>

      </Box>

      <Box sx={{ marginTop: "20px", marginLeft:"50px" }}>
        <Grid container >
          <Grid item md={6} xs={12}>
            <FormGrid item xs={6}>
              <FormLabel htmlFor="address1" required>
                Address line 1
              </FormLabel>
              <OutlinedInput
                id="address1"
                name="address1"
                type="address1"
                placeholder="Street name and number"
                autoComplete="shipping address-line1"
                required
              />
            </FormGrid>
            <FormGrid item xs={6}>
              <FormLabel htmlFor="city" required>
                City
              </FormLabel>
              <OutlinedInput
                id="city"
                name="city"
                type="city"
                placeholder="New York"
                autoComplete="City"
                required
              />
            </FormGrid>
            <FormGrid item xs={6}>
              <FormLabel htmlFor="state" required>
                State
              </FormLabel>
              <OutlinedInput
                id="state"
                name="state"
                type="state"
                placeholder="NY"
                autoComplete="State"
                required
              />
            </FormGrid>
            <FormGrid item xs={6}>
              <FormLabel htmlFor="zip" required>
                Zip / Postal code
              </FormLabel>
              <OutlinedInput
                id="zip"
                name="zip"
                type="zip"
                placeholder="12345"
                autoComplete="shipping postal-code"
                required
              />
            </FormGrid>
            <FormGrid item xs={6}>
              <FormLabel htmlFor="country" required>
                Country
              </FormLabel>
              <OutlinedInput
                id="country"
                name="country"
                type="country"
                placeholder="United States"
                autoComplete="shipping country"
                required
              />
            </FormGrid>


          </Grid>
          <Grid item md={6} xs={12}  sx={{marginTop:"20px"}}>
          <Card sx={{ maxWidth: 345,height:"370px",marginLeft:"50px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="160"
        image={localStorage.getItem("Image")}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign={"center"} sx={{paddingTop:"20px"}}>
          {localStorage.getItem("Title")}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={"center"} sx={{paddingTop:"10px"}}>
          {localStorage.getItem("Description")}
        </Typography>
      </CardContent>
      </Card>

          </Grid>
        </Grid>
      </Box>

    </>
  )
}

export default ProfileDetails


