
import React, { useState, useEffect } from 'react'
import { Box, TextField, Typography, Container, Button } from '@mui/material';
import axiosInstance from '../../../Helper/Helper';
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";

function Edit() {
  const { id } = useParams()
  const [user, setUser] = useState({
    title: "",
    description: "",


  })


  const [error, setError] = useState("")
  const [img, setimg] = useState("");

  useEffect(() => {
    axiosInstance
      .get(`/product/detail/${id}`)
      .then((res) => {
        // console.log(res.data.data);
        setUser(res.data.data)

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (user !== null) {
      setUser({
        title: user.title,
        description: user.description,
      });

    }

  }, [])


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
    toast.success("Edit successfully");


    const formdata = new FormData()

    formdata.append("title", user.title)
    formdata.append("id", id)
    formdata.append("description", user.description)

    if (img) {
      formdata.append("image", img)
    }
    else {
      formdata.append("image", user.image)
    }

    try {
      const response = await axiosInstance.post("product/update",
        formdata, {
        headers: {
          "Content-type": "multipart/form-data"

        }
      });
      console.log(response.data)
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
            value={user.title}
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
            value={user.description}
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
              <img
                height="40px"
                src={URL.createObjectURL(img)}
                alt=""
                className="upload-img"
              />
            ) : (
              <>
                {user?.image === "" ? (
                  <img
                    height="70px"
                    // src={image}
                    alt=""
                    className="upload-img"
                  />
                ) : (
                  <img
                    height="60px"
                    src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${user?.image}`}
                    alt=""
                    className="upload-img"
                  />
                )}
              </>
            )}
            {img === "" && <p>Drag or drop content here</p>}
          </div>






          <Button
            type='submit'
            variant='contained'
            fullWidth
            sx={{ marginTop: "20px" }}>
            Submit
          </Button>

        </Box>


      </Box>
    </Container>
  )
}

export default Edit

