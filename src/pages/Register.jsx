import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { 
    Button,
    Grid,
    TextField,
    Typography
} from '@mui/material';
import { postRegister } from '../actions';

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const response = await postRegister({username, email, password})
    }

    return(
        <Grid container p={3} spacing={4} minHeight="80vh">
            <Grid container item xs={12} spacing={3} justifyContent="flex-end">
                <Grid item>
                    <Button variant="contained" color="primary" onClick={() => {
                        navigate("/login", {})
                    }}>SIGN IN</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={() => {
                        navigate("/register", {})
                    }}>REGISTER</Button>
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
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs> 
                    <TextField 
                        type="email"
                        label="Email"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs> 
                    <TextField 
                        type="password"
                        label="Password"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                </Grid>
                <Grid container item xs justifyContent="center" spacing={3}>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={handleRegister}>Sign Up</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Register;