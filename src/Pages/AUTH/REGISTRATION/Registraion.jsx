import  React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { toast } from "react-toastify";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

const defaultTheme = createTheme();

export default function Registration() {
  const[user,setUser]=useState({
    first_name:"",
    last_name:"",
    email:"",
    password:""
  })
  const [error,setError]=useState("")
  const [img, setimg] = useState("");
  const[loading,setLoading]=useState(true)


  const validation=()=>{
    let error={};

    if(!user.first_name){
      error.first_name="First Name is Required"
    }
    if(!user.last_name){
      error.last_name="Last Name is Required"
    }
    if(!user.email){
      error.email="Email is Required"
    }
    if(!user.password){
      error.password="Password is Required"
    }
    if (!img) {
      error.img = "Image  is required";
    }

    return error;

  }

  console.log(error)
   
  const image_change = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setError({ ...error, img: "Image is required" });
      setimg(null);
    } else {
      setError({ ...error, img: "" });

      setimg(file);
      // console.log(file);
    }
  };


  const SubmitInfo =async (e)=>{

    e.preventDefault()
    setError(validation())
    const formdata=new FormData();
    formdata.append("first_name",user.first_name)
    formdata.append("last_name",user.last_name)
    formdata.append("email",user.email)
    formdata.append("password",user.password)
    formdata.append("profile_pic", img);
    // toast.success("Registration successfully");




  
    try {
      setLoading(false)
      const response=await axios.post(" https://wtsacademy.dedicateddevelopers.us/api/user/signup",
       formdata,
       {
         headers:{"Content-Type":"multipart/form-data"},
       }
      );
      // console.log(response.data);
      // setLoading(true)

      if (response.status === 200) {
        console.log(response.data)
        toast.success("Registration Successfull");
        setLoading(true);
      } else {
        toast.error("Registration Error....");
        setLoading(true);
      }

    } catch(error){
      console.log(error);
    }

  }
  
  let name,value
  const postUserData=(e)=>{
    name=e.target.name;
    value=e.target.value;

    if (name === "email") {
      if (value.length === 0) {
          setError({ ...error, email: "Email is Required" })
          setUser({ ...user, email: "" })
      }
      else {
          setError({ ...error, email: "" })
          setUser({ ...user, email: value })
      }
  }
  if (name === "password") {
      if (value.length === 0) {
          setError({ ...error, password: "Password name is Required" })
          setUser({ ...user, password: "" })
      }
      else {
          setError({ ...error, password: "" })
          setUser({ ...user, password: value })
      }
  }
  if (name === "firstName") {
      if (value.length === 0) {
          setError({ ...error, first_name: "First Name is Required" })
          setUser({ ...user, first_name: "" })
      }
      else {
          setError({ ...error, first_name: "" })
          setUser({ ...user, first_name: value })
      }
  }
  if(name==="lastName"){
      if(value.length===0){
          setError({...error,last_name:"Last Name is Required"})
          setUser({...user,last_name:""})
      }
      else{
          setError({...error,last_name:""})
          setUser({...user,last_name:value})
      }
  }





  }


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={SubmitInfo} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={user.first_name}
                  onChange={postUserData}
                  autoFocus
                />
                <span style={{color:"red"}}>
                  {" "}
                  {error.first_name} {" "}
                </span>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={user.last_name}
                  onChange={postUserData}

                />
                <span style={{color:"red"}}>
                  {" "}
                  {error.last_name} {" "}
                </span>

              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={user.email}
                  onChange={postUserData}

                />
                <span style={{color:"red"}}>
                  {" "}
                  {error.email} {" "}
                </span>

              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={user.password}
                  onChange={postUserData}

                />
                 <span style={{color:"red"}}>
                  {" "}
                  {error.password} {" "}
                </span>

              </Grid>
              
              {/* <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      sx={{marginTop:"20px"}}
    >
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>

              <Grid item xs={12}>
               <input type="file" name="" id="" />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
               <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                   Image
                 </label>
                  <input
                     type="file"
  // onChange={(e) => setimg(e.target.files[0])}
                 onChange={image_change}
                     name="img"
                     accept="image/*"
                    class="form-control"
                  />
                  {img !== "" && img !== undefined && img !== null ? (
                    <img                       style={{ height: "180px" }}
                       src={URL.createObjectURL(img)}                       alt=""
                      className="upload-img"
                    />
                 ) : (
                   <>{img === "" && <p>Drag or drop content here</p>}</>                 )}
</div>
<span style={{ color: "red" }}>
                {""}
                {error.img}
                {""}
</span>
            </Grid>
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button> */}

{loading ? (
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
                type="submit"
              >
                SIGN IN
              </Button>
            ) : (
              <Button
              variant="contained"
              color="secondary"
              fullWidth
              size="large"
              type="submit"
              
            >
             Loading.....
            </Button>
                        )}

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={""} variant="body2">
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}