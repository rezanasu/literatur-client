import React, {useState} from 'react';
import { 
    Container,
    Button,
    Grid,
    Typography,
    TextField,
    Paper,
    Divider
} from '@mui/material';

const styles = {
    paperContainer: {
        backgroundImage: 'url(https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
        height: '100%',
        width: '100%'
    }
}



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = () => {
        console.log("SIGN IN DI CLICK")
    }

    const handleEmail = (e) => {
        let emailValue = e.target.value;
        setEmail(emailValue)
        console.log(email)
    }

    const handlePassword = (e) => {
        let passwordValue = e.target.value;
        setPassword(passwordValue)
        console.log(password)
    }
    
    return(
        <Container maxWidth="l">
            <Grid container spacing={8} justifyContent="center" p={12} minHeight="80vh">
                <Grid container item xs={12} justifyContent ="flex-end" spacing={3}>
                    <Grid item>
                        <Button color="primary" variant="contained" size="large">Sign In</Button>
                    </Grid>
                    <Grid item>
                        <Button color="primary" variant="contained" size="large">Register</Button>
                    </Grid>
                </Grid>

                <Grid container item xs={8} direction="column" spacing={4}>
                    <Grid item xs>
                        <Typography variant="h2">LOGIN</Typography>
                    </Grid>
                    <Grid item xs>
                        <TextField 
                            type="email"
                            label="Email"
                            onChange={handleEmail}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField 
                            type="password"
                            label="Password"
                            onChange={handlePassword}
                        />
                    </Grid>
                    <Grid item xs>
                        <Button onClick={handleSignIn} variant="contained" color="primary" size="large">SIGN IN</Button>
                    </Grid>
                </Grid>
                <Divider orientation="vertical" flexItem/>
                <Grid item xs>
                    <Paper style={styles.paperContainer}></Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Login;