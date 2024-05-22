import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Slider from 'react-slick'

import image1 from "../../../img/carousel-1.jpg"
import image2 from "../../../img/car2.jpg"
import image3 from "../../../img/car3.jpg"
import image4 from "../../../img/car4.jpg"
import image5 from "../../../img/about.png"
import image7 from "../../../img/service-1.jpg"
import image8 from "../../../img/car10.jpg"
import image9 from "../../../img/service-3.jpg"
import image10 from "../../../img/car-rent-1.png"
import image11 from "../../../img/car-rent-2.png"
import image12 from "../../../img/car-rent-3.png"
import image13 from "../../../img/car-rent-4.png"
import image14 from "../../../img/car-rent-5.png"
import image15 from "../../../img/car-rent-6.png"
import image16 from "../../../img/vendor-1.png"
import image17 from "../../../img/vendor-2.png"
import image18 from "../../../img/vendor-3.png"
import image19 from "../../../img/vendor-4.png"
import image20 from "../../../img/vendor-5.png"
import image21 from "../../../img/vendor-6.png"
import image22 from "../../../img/vendor-7.png"
import image24 from "../../../img/team-1.jpg"
import image25 from "../../../img/team-3.jpg"
import image26 from "../../../img/team-4.jpg"
import image27 from "../../../img/team-5.jpg"




import { Card, CardContent, CardMedia, Grid, Typography, CardActionArea, CardActions } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Best Cars In Your Location",
    text: "Book Now",
    imgPath: image1
  },
  {
    label: "Quality Cars With Unlimited Miles",
    text: "Book Now",
    imgPath: image2
  },
  {
    label: "Your Wheels Are In Good Hands",
    text: "Book Now",
    imgPath: image3
  },
  {
    label: 'Get Your Desired Car In Resonable Price',
    text: "Book Now",
    imgPath: image4
  },
];

const arrayImages = [
  {
    img: image10,
    label: "MERCEDES BENZ R3",
    price: "$2000"
  },
  {
    img: image11,
    label: "VOLKSWAGEN VIRTUS",
    price: "$3000"

  },
  {
    img: image12,
    label: "HYUNDAI VERNA",
    price: "$4000"


  },
  {
    img: image13,
    label: "TOYOTA",
    price: "$5000"


  },
  {
    img: image14,
    label: "AUDI",
    price: "$6000"


  },
  {
    img: image15,
    label: "MERCEDES BENZ R3",
    price: "$4000"


  },
]

const a=[{
  img:image24,
  label:"FULL NAME",
  text:"Designation"
},
{
  img:image25,
  label:"FULL NAME",
  text:"Designation"

},
{
  img:image26,
  label:"FULL NAME",
  text:"Designation"

},
{
  img:image27,
  label:"FULL NAME",
  text:"Designation"

}]

function Home() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // const styles = theme => ({
  //   root: {
  //     width: "100%",
  //     marginTop: theme.spacing.unit * 3
  //   },
  //   table: {
  //     minWidth: 1020
  //   },
  //   tableWrapper: {
  //     overflowX: "auto"
  //   },
  //   hover: {
  //     "&:hover": {
  //       backgroundColor: 'rgb(7, 177, 77, 0.42)'
  //     }
  //   }
  // });


  return (
    <>
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label} style={{ position: "relative", height: "100%", width: "100%" }}>
            <Typography variant='h2' component="div" sx={{ position: "absolute", top: "40%", left: "20%", color: "white" }}>{step.label}</Typography>
            <Button variant='contained' sx={{ position: "absolute", top: "70%", left: "45%", backgroundColor: "#F77D0A" }}>{step.text}</Button>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{

                  height: 500,
                  display: 'block',
                  maxWidth: "100%",
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
      
    </Box>
      <section>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <Card>
            <CardMedia
              component="img"
              height=""
              image={image5}
              sx={{ marginTop: "30px" }}
            >

            </CardMedia>
          </Card>

        </Grid>
        <Grid item md={6} xs={12}>
          <CardContent>
            <Typography variant='h4' textAlign="center" sx={{color:"#F77D0A"}}>About Us</Typography>
            <Typography variant='h6' textAlign="center" sx={{marginTop:"10px"}}>Welcome TO Royal Car</Typography>
            <Typography variant='body2' textAlign="center">
              Justo et eos et ut takimata sed sadipscing dolore lorem, et elitr labore labore voluptua no rebum sed, stet voluptua amet sed elitr ea dolor dolores no clita. Dolores diam magna clita ea eos amet, amet rebum voluptua vero vero sed clita accusam takimata. Nonumy labore ipsum sea voluptua sea eos sit justo, no ipsum sanctus sanctus no et no ipsum amet, tempor labore est labore no. Eos diam eirmod lorem ut eirmod, ipsum diam sadipscing stet dolores elitr elitr eirmod dolore. Magna elitr accusam takimata labore, et at erat eirmod consetetur tempor eirmod invidunt est, ipsum nonumy at et.

            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      </section>
      <section>
      <Typography variant='h3' textAlign="center" sx={{color:"#F77D0A",marginTop:"20px"}}>Our Services</Typography>
      <Grid container>
        <Grid item md={6} xs={12} >
          <Card>
            <CardMedia
              component="img"
              height={"300px"}
              image={image7}
              sx={{ marginTop: "20px" }}

            >

            </CardMedia>
          </Card>

        </Grid>

        <Grid item md={6} xs={12} >
          <CardContent>
            <Typography variant='h4' textAlign="center" sx={{marginTop:"10px"}} >
              15 yeras of experience in Auto Servicing
            </Typography>
            <Typography variant='body2' textAlign="center" sx={{marginTop:"30px"}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellat, eaque labore necessitatibus perspiciatis dolore. Aliquam incidunt natus quo nemo odit voluptates dolores repellat quam laudantium. Dicta eius nam in.
              Nulla totam omnis odio ducimus? Eveniet possimus beatae illum sed quidem, voluptas delectus debitis est voluptatibus ex enim, quam rerum omnis, architecto nesciunt sunt cumque a magni voluptatum? Nulla, dolor!
              Odio deserunt error dolores ut facilis voluptatibus omnis laudantium corporis et placeat, officiis nisi hic harum nihil atque sequi autem perspiciatis labore, mollitia corrupti aliquam vitae. Eum vero perspiciatis maiores?
            </Typography>
          </CardContent>

        </Grid>
        <Grid item md={6} xs={12} >
          <CardContent>
            <Typography variant='h4' textAlign="center">Engine Servicing</Typography>
            <Typography variant='body2' textAlign="center" sx={{marginTop:"20px"}} >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque autem saepe quos placeat culpa illo quo ea cupiditate corrupti, officiis ratione aliquam amet vel quisquam. Nobis natus tempore fugiat ipsam.
              Facilis ab porro odio provident magnam suscipit dolorum, velit fugiat est fugit quos. Itaque vitae doloribus beatae laborum aliquam molestias maiores, reprehenderit, minima, unde nihil illum quibusdam atque eum ut.
              Blanditiis nemo non quaerat nobis aliquid temporibus dicta, voluptatum minus assumenda mollitia alias, veniam ea porro maiores, saepe quasi sequi necessitatibus. Nam laboriosam qui cum dolor accusamus sequi, veniam quaerat.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item md={6} xs={12} >
          <Card>
            <CardMedia
              component="img"
              height="300px"

              image={image8}
            >

            </CardMedia>
          </Card>

        </Grid>

        <Grid item md={6} xs={12}>
          <Card>
            <CardMedia
              component="img"
              height="300px"
              image={image9}
            >

            </CardMedia>
          </Card>

        </Grid>

        <Grid item md={6} xs={12} >
          <CardContent>
            <Typography variant='h4' textAlign="center"  >Tires Replacement</Typography>
            <Typography variant='body2' textAlign="center" sx={{marginTop:"20px"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque autem saepe quos placeat culpa illo quo ea cupiditate corrupti, officiis ratione aliquam amet vel quisquam. Nobis natus tempore fugiat ipsam.
              Facilis ab porro odio provident magnam suscipit dolorum, velit fugiat est fugit quos. Itaque vitae doloribus beatae laborum aliquam molestias maiores, reprehenderit, minima, unde nihil illum quibusdam atque eum ut.
              Blanditiis nemo non quaerat nobis aliquid temporibus dicta, voluptatum minus assumenda mollitia alias, veniam ea porro maiores, saepe quasi sequi necessitatibus. Nam laboriosam qui cum dolor accusamus sequi, veniam quaerat.
            </Typography>

          </CardContent>

        </Grid>
      </Grid>
      </section>
      <section className='find-your-car' id='find-your-car'>
      <Typography variant='h3' textAlign="center" sx={{marginTop:"20px",color:"#F77D0A"}}>Find Your Car</Typography>
      <Grid container>
        {
          arrayImages.map((item,index)=>
          <Grid item xs={6} md={4} sx={{marginTop:"20px"}} key={index}>
          <Card sx={{ maxWidth: 345,height:"350px","&:hover": {
              backgroundColor: 'rgb(28, 30, 50, 0.9)'
            }  }}>
        <CardActionArea >
          <CardMedia
            component="img"
             height="200"
            image={item.img}
            alt="green iguana"
            sx={{marginTop:"20px"}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" textAlign="center" sx={{"&:hover": {
              color: 'white'
            }}}>
              {item.label}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{justifyContent:"center"}}>
          <Button variant='contained' alignItems="center" >{item.price}</Button>
        </CardActions>
      </Card>
  
          </Grid>
  

          )
        }
      </Grid>
      </section>
      <section>
        <Box textAlign={"center"} >
        <Typography variant='h3' sx={{color:"#F77D0A",marginTop:"20px"}}>Our Technicians</Typography>

        </Box>
        <Grid container sx={{marginTop:"20px"}}>

        {
          a.map((item,index)=> 
            <Grid item md={3} sm={6} key={index}>
              <Card >
                <CardActionArea>
                  <CardMedia
                   component="img"
                   height="400px"
                   image={item.img}
                  >

                  </CardMedia>
                  <CardContent>
                    <Typography variant='h5' textAlign={"center"}>{item.label}</Typography>
                    <Typography variant='body2' textAlign={"center"}>{item.text}</Typography>
                  </CardContent>
                </CardActionArea>
              
              </Card>
            </Grid>
          )
        }
                  </Grid>


      </section>
      <section>
  <Box textAlign="center" mb={2}>
    <Typography variant="h4" sx={{color:"#F77D0A",marginTop:"20px"}}>Brands Associated With Us</Typography>
  </Box>
  <Grid container justifyContent="center" sx={{marginTop:"20px"}}>
    <Grid item xs={12} md={10} lg={8}>
      <Box width="100%">
        <Slider {...settings}>
          <div>
            <img src={image16} alt="" style={{ height: "100px" }} />
          </div>
          <div>
            <img src={image17} alt="" style={{ height: "110px" }} />
          </div>
          <div>
            <img src={image18} alt="" style={{ height: "100px" }} />
          </div>
          <div>
            <img src={image19} alt="" style={{ height: "100px" }} />
          </div>
          <div>
            <img src={image20} alt="" style={{ height: "100px" }} />
          </div>
          <div>
            <img src={image21} alt="" style={{ height: "100px" }} />
          </div>
          <div>
            <img src={image22} alt="" style={{ height: "100px" }} />
          </div>
        </Slider>
      </Box>
    </Grid>
  </Grid>
</section>







    </>


  );
}

export default Home;