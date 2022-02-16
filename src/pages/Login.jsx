import React from 'react';
import { 
    ButtonGroup,
    Button,
    Grid,
    Typography,
    TextField
} from '@mui/material';

function Login() {
    return(
        <div className="Login">
            <Grid container spacing={3} justifyContent="flex-end">
                <Grid item>
                    <Button color="primary" variant="contained" size="large">Sign In</Button>
                </Grid>
                <Grid item>
                    <Button color="primary" variant="contained" size="large">Register</Button>
                </Grid>
            </Grid>
            
            <Grid container spacing={3} direction="row">
                <Grid container item direction="column" spacing={2}>
                    <Grid item>
                        <Typography variant="h3">LOGIN</Typography>
                    </Grid>
                    <Grid item>
                        <TextField variant="outlined" type="email" label="Email"/>
                    </Grid>
                    <Grid item>
                        <TextField variant="outlined" type="password" label="Password"/>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary">Sign In</Button>
                    </Grid>
                </Grid>
                <Grid container item>
                    <Typography variant="h2">Images</Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;