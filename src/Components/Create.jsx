
import React, { useState } from 'react'
import { Box, TextField, Typography, Container, Button } from '@mui/material';
import axiosInstance from '../Helper/Helper';
import { toast } from "react-toastify";




function Create() {
  const [user, setUser] = useState({
    title: "",
    description: "",
    
    
  })

  const [error, setError] = useState("")
  const [img, setimg] = useState("");
  const[loading,setLoading]=useState(true)

  const validation = () => {
    let error = {};
    if (!user.title) {
      error.title = "Title is Required";
    }
    if (!user.description) {
      error.description = "Description is Required";
    }
    return error;
  };


  console.log(error)


  const SubmitInfo = async (e) => {
    e.preventDefault()
    setError(validation())


    const formdata = new FormData()

    formdata.append("title", user.title)
    formdata.append("description", user.description)
    formdata.append("image", img);
    toast.success("Create Successfully");






    try {
      setLoading(false)
      const response = await axiosInstance.post("product/create",
        formdata, {
        headers: {
          "Content-type": "multipart/form-data"

        }
      });
      console.log(response.data)
      setLoading(true)
    } catch (error) {
      console.log(error)
    }
  }

  let name, value
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value

    if (name === "title") {
      if (value.length === 0) {
        setError({ ...error, title: "Title is Required" })
        setUser({ ...user, title: "" })
      }
      else {
        setError({ ...error, title: "" })
        setUser({ ...user, title: value })
      }
    }
    if (name === "description") {
      if (value.length === 0) {
        setError({ ...error, description: " Description is Required" })
        setUser({ ...user, description: "" })
      }
      else {
        setError({ ...error, description: "" })
        setUser({ ...user, description: value })
      }
    }



  }

  return (
    <Container component="main" maxWidth="xs">

      <Box
        sx={{ marginTop: "80px" }}>
        <Typography textAlign={"center"} variant='h5'>Create Data</Typography>

        <Box component="form" onSubmit={SubmitInfo} sx={{ margin: "20px", padding: "10px", alignItems: "center" }}  >
          <TextField
            margin='normal'
            fullWidth

            id='title'
            label="Enter The Title"
            name='title'
            onChange={postUserData}
            autoComplete='title'
            autoFocus
          />
          <span style={{ color: "red" }}>
            {" "}
            {error.title} {" "}
          </span>


          <TextField
            margin='normal'
            fullWidth

            id='description'
            label="Enter The Description"
            name='description'
            autoComplete='description'
            onChange={postUserData}
            autoFocus
          />
          <span style={{ color: "red", alignItems: "center" }}>
            {" "}
            {error.description} {" "}
          </span>

          <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                   Image
                 </label>
                  <input
                     type="file"
  onChange={(e) => setimg(e.target.files[0])}
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


          {/* <Button
            type='submit'
            variant='contained'
            fullWidth
            sx={{ marginTop: "20px" }}>
            Submit
          </Button> */}
          {loading ? (
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
                type="submit"
              >
                Submit
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


        </Box>


      </Box>
    </Container>
  )
}

export default Create

