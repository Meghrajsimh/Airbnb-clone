import { Button } from '@mui/material'
import React,{useState} from 'react'
import Search from "./Search"
import "./Banner.css";
// import {useNavigate} from "react-router-dom"
import useHistory from "react-router-dom";


function Banner() {
  
    const [showSearch, setShowSearch]= useState (false);
    // const history =useNavigate();
  return (
    <div className="banner">
        <div className="banner_search">
            {showSearch && <Search />}
            <Button onClick={()=> setShowSearch(!showSearch)} className="banner_searchButton" variant='outlined'>{showSearch ?"hide":"Search Dates"} </Button>
        </div>
        <div className="banner_info  ">
            <h1>Get out and stretch your imagination</h1>
            <h5>Paln a different kind of getway to uncover the hidden gems near you.</h5>
            <Button  variant='outlined'>Explore Nearby</Button>

        </div>
    </div>
  )
}

export default Banner