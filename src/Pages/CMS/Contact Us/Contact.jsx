import React,{useState} from 'react'
import { Box, Typography,Grid,Button,TextField } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };

  return (
    <Box>
    <Typography variant='h3' textAlign={"center"} sx={{marginTop:"100px"}}>CONTACT US</Typography>
    <Grid container>
      <Grid item md={6}>
      <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    

      </Grid>

      <Grid item md={6} sx={{marginTop:"27px",backgroundColor:"#2B2E4A"}}>
        <Box sx={{marginTop:"40px"}}>
        <Typography variant='h6'textAlign={"center"} sx={{color:"#F4F5F8"}}><LocationOnIcon sx={{color:"#F77D0A"}}/> Office</Typography>
        <Typography variant='body1' textAlign={"center"} sx={{color:"#8486A0"}}>Ballygaunge,Kolkata,West Bengal</Typography>
        <Typography variant='h6' textAlign={"center"} sx={{color:"#F4F5F8"}}> <PhoneIcon sx={{color:"#F77D0A"}}/>Phone No</Typography>
        <Typography variant='body1' textAlign={"center"} sx={{color:"#8486A0"}}>6290652764</Typography>
        <Typography variant='h6' textAlign={"center"} sx={{color:"#F4F5F8"}}> <MailIcon sx={{color:"#F77D0A"}}/>Customer Service</Typography>
        <Typography variant='body1' textAlign={"center"} sx={{color:"#8486A0"}}>info@gmail.com</Typography>
        <Typography variant='h6' textAlign={"center"} sx={{color:"#F4F5F8"}}> <AccessTimeIcon sx={{color:"#F77D0A"}}/>Working Hours</Typography>
        <Typography variant='body1' textAlign={"center"} sx={{color:"#8486A0"}}>10AM To 7PM</Typography>

      </Box>







      </Grid>

    </Grid>
    <Grid container sx={{marginTop:"20px"}}>
      <Grid item md={12}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.3610229429755!2d88.36330207507633!3d22.528144979523386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276d762bd16fd%3A0x50c3844ca79f2435!2sBallygunge%20Phari!5e0!3m2!1sen!2sin!4v1704605006795!5m2!1sen!2sin"  style={{width:"100%",height:"300px",border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </Grid>
    </Grid>

    
    </Box>
  )
}

export default Contact
