// import logo from './logo.svg';
import './App.css';
// import Login from './Pages/AUTH/LOGIN/Login';
// import Home from './Pages/AUTH/HOME/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import Header from './Pages/LAYOUT/Header/Header';
// import About from './Pages/CMS/About/About';
// import Footer from './Pages/LAYOUT/Footer/Footer';
// import Registration from './Pages/AUTH/REGISTRATION/Registraion';
// import Contact from './Pages/CMS/Contact Us/Contact';
// import Productlist from './Pages/CMS/Product/Productlist';
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// import Create from './Components/Create';
// import Edit from './Pages/CMS/Edit/Edit';
import {lazy,Suspense} from "react"
import Loading from './Pages/Loader/Loading';
// import ProfileDetails from './Pages/CMS/ProfileDetails/ProfileDetails';
const Home = lazy(() => import("./Pages/AUTH/HOME/Home"));
const Login=lazy(()=> import ("./Pages/AUTH/LOGIN/Login"))
const Header=lazy(()=>import ("./Pages/LAYOUT/Header/Header"))
const Footer=lazy(()=> import ("./Pages/LAYOUT/Footer/Footer"))
const Registration=lazy(()=> import ("./Pages/AUTH/REGISTRATION/Registraion"))
const Contact=lazy(()=> import ("./Pages/CMS/Contact Us/Contact"))
const Productlist=lazy(()=> import ("./Pages/CMS/Product/Productlist"))
const About =lazy(()=> import ("./Pages/CMS/About/About"))
const Create=lazy(()=> import ("./Components/Create"))
const Edit=lazy(()=> import ("./Pages/CMS/Edit/Edit"))
const ProfileDetails=lazy(()=> import("./Pages/CMS/ProfileDetails/ProfileDetails"))








function App() {

  function PrivateRoute({children}){
    console.log(children, "children");
    const token=
    localStorage.getItem("token") || sessionStorage.getItem("token");

    return token !== null && token!==undefined ?(
      children
    ) :(
      <>
      <Navigate to="/"/>
      {toast("Please go for login either you can't access product list")}
      
      </>
    )
}

  const PublicRouteNames=[
    {
      path:"/registration",
      Component:<Registration/>
    },
    {
      path:"/login",
      Component:<Login/>

    },
    {
      path:"/",
      Component:<Home/>
    },
    {
      path:"/create",
      Component:<Create/>
    }

  
  ]

  const PrivateRouteNames=[
    {
      path:"/product",
      Component:<Productlist/>
    },
    {
      path:"/contact",
      Component:<Contact/>
    },
    {
      path:"/edit/:id",
      Component:<Edit/>
    },
    {
      path:"/profile/:id",
      Component:<ProfileDetails/>
    },
    {
      path:"/about",
      Component:<About/>
    }

  ]

  return (
    <div className="App">
      {/* <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/registration" element={<Registration/>} />



        </Routes>
        <Footer/>
      </Router> */}
       
       
       
       
       
       
       
       <Suspense fallback={ <Loading/>} >
<ToastContainer />
      <Router>
        <Header/>
        <Routes>
          {
            PublicRouteNames?.map((route,index)=>{
              return (
              <Route key={index} exact path={route.path} element={route.Component}/>
              );
            })
          }

{
            PrivateRouteNames?.map((route,index)=>{
              return (
              <Route key={index} exact path={route.path} 
              element={ <PrivateRoute>{route.Component}</PrivateRoute>}
              
              />
              );
            })
          }

        </Routes>
         <Footer/>
      </Router>
      </Suspense>
    </div>
  );
}

export default App;
