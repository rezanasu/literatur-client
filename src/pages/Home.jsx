import React from 'react'
import { 
    Grid,
    Container,
    Typography,
    CardMedia,
    Card,
    CardContent
} from '@mui/material';

// Components
import Navbar from "../components/Navbar.jsx"
import BookCard from "../components/BookCard.jsx"

function Home() {

    return(
        <div className="Home">
            <Navbar/>

            <Container maxWidth="md" sx={{marginBottom: 10}}>
                <Card variant="outlined">
                    <Grid container>
                        <Grid item xs>
                            <CardMedia 
                                component="img"
                                image="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt="books"
                            />
                        </Grid>
                        <Grid item xs>
                            <CardContent>
                                <Typography variant="subtitle1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a massa ante. In dapibus libero id pellentesque bibendum. Aliquam sed dui in purus egestas mollis id eu purus. Duis arcu arcu, ullamcorper eget magna eget, sagittis sollicitudin est. Suspendisse leo est, gravida nec gravida ac, auctor eget purus. Nulla et vulputate neque. Proin vel laoreet ex, in placerat arcu.
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            </Container>

            <Container maxWidth="xl">
                <Typography variant="h6" p={2}>CURRENTLY READING</Typography>
                <Grid container>
                    <Grid item xs>
                        <BookCard />
                    </Grid>
                    <Grid item xs>
                        <BookCard />
                    </Grid>
                    
                </Grid>
            </Container>
        </div>
    );
}

export default Home;