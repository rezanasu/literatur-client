import React from 'react'
import { 
    Grid,
    AppBar,
    Toolbar,
    Typography,
    Button
} from '@mui/material';


function Navbar() {
  return(
    <AppBar position="sticky" sx={{marginBottom: 5}}>
        <Toolbar>
            <Grid container xs spacing={2}>
                <Grid item xs>
                    <Typography variant="h6">HOME</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h6">MY BOOKS</Typography>
                </Grid>
                <Grid item xs>
                    <Typography variant="h6">WISHLIST</Typography>
                </Grid>
                <Grid item xs={7}>
                    <Typography variant="h5">LITERATUR</Typography>
                </Grid>
                <Grid item xs>
                    <Button variant="contained" color="error">LOGOUT</Button>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar;