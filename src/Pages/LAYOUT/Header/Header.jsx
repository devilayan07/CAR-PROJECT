import React,{useState,useEffect} from 'react'
import { Grid,AppBar, Toolbar, Typography, Tabs, Tab, Box, Button,useTheme,useMediaQuery } from '@mui/material'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Link } from 'react-router-dom';
import DrawerComp from '../../../Components/DrawerComp';

function Header() {
    const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        setAuthenticated(true);
      }
    }, [authenticated]);
    const[value,setValue]=useState()
    const token=localStorage.getItem("token")

    

    const theme=useTheme()
    console.log(theme)
    const isMatch=useMediaQuery(theme.breakpoints.down("md"))
    console.log(isMatch)

    const handleChange=((e,value)=>{
        setValue(value)

    })
    const Hello=()=>{
        localStorage.removeItem("token")
    }
  return (
    
    <AppBar sx={{backgroundColor:"#1c1e32"}}>
     <Toolbar>
     <DirectionsCarIcon/>

       { isMatch ? <>
        <Typography variant='h6' sx={{fontWeight:"700",marginLeft:"20px"}}>
                    Car
                </Typography>

        <DrawerComp/>

        
       </> : <Grid sx={{placeItems:"center"}} container >
            <Grid item xs={2}>
                <Typography variant='h6' sx={{fontWeight:"700",marginLeft:"20px"}}>
                    Car
                </Typography>
            </Grid>
            <Grid item xs={6} >
                <Tabs sx={{marginLeft:"auto"}} textColor='inherit' indicatorColor='secondary' value={value} onChange={handleChange}>
                    <Tab  label="Home" to="/" component={Link}/>
                    <Tab label="About" to="/about" component={Link}/>
                    <Tab label="Product" to="/product" component={Link}/>
                    <Tab label="Contact" to="/contact" component={Link}/>




                </Tabs>
                </Grid>
                <Grid item xs={1}/>

                <Grid item xs={3}>
                    <Box display="flex">
                    {/* <Button sx={{marginLeft:"auto",backgroundColor:"#F77D0A"}}variant='contained' component={Link} to="/login">Login</Button> */}
                    {token ? (
              <Button
                component={Link}
                onClick={Hello}
                variant='contained'
                to="/login"
                sx={{ backgroundColor: "#F77D0A",marginLeft:"auto" }}
              >
                Logout
              </Button>
            ) : (
              <Button variant='contained' component={Link} to="/login" sx={{ backgroundColor: "#F77D0A",marginLeft:"auto" }}>
                Login
              </Button>
            )}
                    </Box>


                </Grid>
            </Grid>}
        
     </Toolbar>
    </AppBar>
    
  )
}

export default Header


// import React, { useState, useEffect } from 'react';
// import { Grid, AppBar, Toolbar, Typography, Tabs, Tab, Box, Button, useTheme, useMediaQuery } from '@mui/material';
// import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
// import { Link } from 'react-router-dom';
// import DrawerComp from '../../../Components/DrawerComp';

// function Header() {
//   const [authenticated, setAuthenticated] = useState(false);
//        const[value,setValue]=useState()


//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setAuthenticated(true);
//     } else {
//       setAuthenticated(false);
//     }
//   }, []);

//   const theme = useTheme();
//   const isMatch = useMediaQuery(theme.breakpoints.down("md"));

//   const handleChange = (e, value) => {
//     setValue(value);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setAuthenticated(false);
//   };

//   return (
//     <AppBar sx={{ backgroundColor: "#1c1e32" }}>
//       <Toolbar>
//         <DirectionsCarIcon />

//         {isMatch ? (
//           <>
//             <Typography variant='h6' sx={{ fontWeight: "700", marginLeft: "20px" }}>
//               Car
//             </Typography>
//             <DrawerComp />
//           </>
//         ) : (
//           <Grid sx={{ placeItems: "center" }} container>
//             <Grid item xs={2}>
//               <Typography variant='h6' sx={{ fontWeight: "700", marginLeft: "20px" }}>
//                 Car
//               </Typography>
//             </Grid>
//             <Grid item xs={6}>
//               <Tabs sx={{ marginLeft: "auto" }} textColor='inherit' indicatorColor='secondary' onChange={handleChange}>
//                 <Tab label="Home" to="/" component={Link} />
//                 <Tab label="About" to="/about" component={Link} />
//                 <Tab label="Product" to="/product" component={Link} />
//                 <Tab label="Contact" to="/contact" component={Link} />
//               </Tabs>
//             </Grid>
//             <Grid item xs={1} />
//             <Grid item xs={3}>
//               <Box display="flex">
//                 {authenticated ? (
//                   <Button
//                     component={Link}
//                     onClick={handleLogout}
//                     variant='contained'
//                     to="/login"
//                     sx={{ backgroundColor: "#F77D0A", marginLeft: "auto" }}
//                   >
//                     Logout
//                   </Button>
//                 ) : (
//                   <Button
//                     variant='contained'
//                     component={Link}
//                     to="/login"
//                     sx={{ backgroundColor: "#F77D0A", marginLeft: "auto" }}
//                   >
//                     Login
//                   </Button>
//                 )}
//               </Box>
//             </Grid>
//           </Grid>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Header;



