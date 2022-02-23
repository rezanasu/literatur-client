import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar';
import { 
    Typography,
    Grid,
    Container,
    Tabs,
    Tab,
    Button
} from '@mui/material';
import BookCard from '../components/BookCard';
import { fetchBooks, fetchFavourites } from '../actions';
import { useNavigate } from 'react-router';



function Books() {
    // My Books = '0'
    // Favourites = '1'
    // Currently Reading = '2'

    const [loading, setLoading] = useState(true)
    const [currentTab, setCurrentTab] = useState('0')
    const [userBooks, setUserBooks] = useState([]) 
    const [favourites, setFavourites] = useState([]) 

    const navigate = useNavigate();

    const tabChange = (event, newValue) => {
        setCurrentTab(newValue)
    } 

    const BookList = () => {
        if(currentTab === '0') {
            return(
                <Grid container item xs spacing={3}>
                    {
                        userBooks.map(d => {
                            return(
                                <Grid item xs={3} key={d.id} onClick={(e) => {
                                    navigate(`/book/${d.id}`)
                                }}>
                                    <BookCard book={d}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            )
        } else if(currentTab === '1') {
            return(
                <Grid container item xs spacing={3}>
                    {
                        favourites.map(d => {
                            return(
                                <Grid item xs={3} key={d.id} onClick={(e) => {
                                    navigate(`/book/${d.id}`)
                                }}>
                                    <BookCard book={d}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            )
        } else {
            // CURRENTLY READING
        }
    }

    useEffect(() => {
        setLoading(true)
        if(currentTab === '0') {
            // MY BOOKS
            fetchBooks().then(response => {
                const data = response.data;
                return data;
            })
            .then(data => {
                setUserBooks(data);
                setLoading(false)
            })
        } else if(currentTab === '1') {
            // FAVOURITES
            fetchFavourites().then(response => {
                const data = response.data;
                return data;
            })
            .then(data => {
                setFavourites(data);
                setLoading(false);
            })


        } else {
            // CURRENTLY READING
        }


        console.log(currentTab)
    }, [currentTab])

    return(
        <div className="Books">
            <Navbar />
            <Typography mb={5} variant="h3">LIST OF BOOKS</Typography>
            <Container sx={{border: 1}} >
                <Tabs 
                    value={currentTab}
                    onChange={tabChange}
                    sx={{
                        display: 'flex',
                        justifyContent: "center"
                    }}
                >
                    <Tab value="0" label="MY BOOKS"/>
                    <Tab value="1" label="FAVOURITES"/>
                    <Tab value="2" label="CURRENTLY READING"/>
                </Tabs>
                <Grid container justifyContent="center" spacing={4}>
                    <Grid item xs={12}>
                        <Button variant="outlined" color="primary">Filter</Button>
                    </Grid>
                
                    {loading ? (<p>Loading...</p>) : <BookList/>} 
                </Grid>
            </Container>
        </div>
    )
}

export default Books;