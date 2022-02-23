import React from 'react'
import { 
    Grid,
    AppBar,
    Toolbar,
    Typography,
    Button
} from '@mui/material';
import { useNavigate } from 'react-router';


function Navbar() {
    const navigate = useNavigate();

    const handleLogout = e => {
        e.preventDefault();
        localStorage.clear();

        if(!localStorage.getItem("access_token")) {
            navigate("/login", {})
        }
    }

    return(
        <AppBar position="sticky" sx={{marginBottom: 5}}>
            <Toolbar>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Typography variant="h6" onClick={() => 
                                navigate("/", {})
                            }>HOME</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography 
                            variant="h6"
                            onClick={() => {
                                navigate("/my-books", {})
                            }}
                            >
                                MY BOOKS
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography 
                            variant="h6"
                            onClick={() => {
                                navigate("/wishlist", {})
                            }}
                            >
                                WISHLIST
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography 
                            variant="h5"
                            onClick={() => 
                                navigate("/", {})
                            }
                            >
                                LITERATUR
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Button variant="contained" color="error" onClick={handleLogout}>LOGOUT</Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;