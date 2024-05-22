import React, { useEffect, useState } from 'react'
import axiosInstance, { myproduct } from '../../../Helper/Helper'
import {  Typography, Card, CardMedia, CardContent, CardActions, Button, CardActionArea, Grid } from '@mui/material'
// import SweetAlert from 'react-bootstrap-sweetalert'
import SweetAlertComponent from '../../../Sweetalert/SweetAlertComponent'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";


function Product() {
  const [product, setProduct] = useState([])
  const [open, setOpen] = useState(false)
  const [id_delete, setid_delete] = useState()

  useEffect(() => {
    axiosInstance.post("/product/list")
      .then((response) => {
        console.log(response.data)
        setProduct(response.data.data)
      })
  }, [])
  const saveItem =(item)=>{
localStorage.setItem("Title",item.title);
localStorage.setItem("Description",item.description)
localStorage.setItem("Image",myproduct(item.image))
  }

  const handleDelete = async (id) => {
    const formdata = new FormData()
    formdata.append("id", id_delete)
    toast.success("Delete successfully");



    try {
      await axiosInstance.post("/product/remove",
        formdata,
        {
          headers: {
            "Content-type": "multipart/form-data"

          }
        });
      const response = await axiosInstance.post("/product/list")
      console.log(response.data.data)
      setProduct(response.data.data)
      setOpen(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section >
      <Typography variant='h5'textAlign={"center"} sx={{marginTop:"80px"}}>Available Models</Typography>
      <Grid container  >
        {
          Array.isArray(product) && product.map((item, index) =>
            <Grid item xs={12} md={4} sm={6} sx={{ marginTop: "30px", paddingLeft: "10px"}}>
              <Card sx={{ marginTop: "20px", maxWidth: 350, height: "400px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150px"
                    image={myproduct(item.image)} />
                  <CardContent>
                    <Typography variant='h5' component="div" textAlign="center">{item.title}</Typography>
                    <Typography variant='h6' component="div" >{item.description}</Typography>

                  </CardContent>
                </CardActionArea>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button variant='contained' alignItems="center" onClick={
                    () => {
                      setid_delete(item?._id)
                      setOpen(true)

                    }}>Delete</Button>
                  <Link to={`/edit/${item._id}`}> <Button variant='contained' alignItems="center" >Edit</Button></Link>
                  <Link to={`/profile/${item._id}`}> <Button variant='contained' alignItems="center" onClick={()=>{saveItem(item)}}>Book Now</Button></Link>

                </CardActions>

              </Card>
            </Grid>
          )
        }

      </Grid>
      {
        open && <SweetAlertComponent
          confirm={handleDelete}
          cancle={() => setOpen(false)}
          title={"Are you sure?"}
          subtitle={"You will not be able to recover!"}

        />
      }
    </section>
  )
}

export default Product


