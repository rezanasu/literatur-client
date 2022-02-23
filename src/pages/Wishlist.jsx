import React from 'react'
import { 
    Typography,
    Grid 
} from '@mui/material';
import Navbar from '../components/Navbar';

function Wishlist() {
    return(
        <div className="Wishlist">
            <Navbar/>
            <Typography variant="h1">WISHLISTS</Typography>
        </div>
    )
}

export default Wishlist;