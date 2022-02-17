import React from 'react'
import { 
    Button,
    Grid,
    TextField,
    Typography
} from '@mui/material';

function Register() {

    return(
        <Grid container xs p={3} spacing={4} minHeight="80vh">
            <Grid container item xs={12} spacing={3} justifyContent="flex-end">
                <Grid item>
                    <Button variant="contained" color="primary">Sign In</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary">Sign Up</Button>
                </Grid>
            </Grid>

            <Grid container item spacing={4} direction="column" xs>
                <Grid item xs>
                    <Typography variant="h2">REGISTER</Typography>
                </Grid>
                <Grid item xs> 
                    <TextField 
                        type="text"
                        label="Username"
                    />
                </Grid>
                <Grid item xs> 
                    <TextField 
                        type="email"
                        label="Email"
                    />
                </Grid>
                <Grid item xs> 
                    <TextField 
                        type="password"
                        label="Password"
                    />
                </Grid>
                <Grid container item xs justifyContent="center" spacing={3}>
                    <Grid item>
                        <Button variant="contained" color="primary">Sign Up</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="error">Cancel</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Register;