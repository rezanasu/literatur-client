import React, {useEffect, useState} from 'react'
import { 
    Container,
    Typography,
    Grid,
    Button
} from '@mui/material';
import Navbar from '../components/Navbar';
import { getBook } from '../actions';
import { useParams } from 'react-router';

function BookDetail() {

    const [isLoading, setLoading] = useState(true);
    const [book, setBook] = useState({});

    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        getBook(id).then(response => {
            const {data} = response;
            setBook(data);
            setLoading(false);
        })
    }, [])


    return(
        <div className="BookDetail">
            <Navbar />
            <Container>
                {
                    isLoading ? <p>Loading...</p> : (
                        <Grid container alignItems="center" justifyContent="center" p={3} mb={3}>
                            <Grid item xs>
                                <img src={book.coverImage} alt="this is a book"></img>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h6" mb={3}>Title: {book.title}</Typography>
                                <Typography variant="h6" mb={2}>Description: {book.description}</Typography>
                                <Typography variant="h6" mb={2}>Year: {book.year}</Typography>
                                <Typography variant="h6" mb={2}>Publisher: {book.publisher}</Typography>
                                <Typography variant="h6">
                                    Genres: {
                                        book.Genres.map(e => {
                                            return(
                                                <span key={e.id}>{e.name} </span>
                                            )
                                        })
                                    }
                                </Typography>
                                <Typography variant="h6">
                                    Author: {
                                        book.BookAuthor.map(e => {
                                            return(
                                                <span key={e.id}>{`${e.firstName} ${e.lastName}`}</span>
                                            )
                                        })
                                    }
                                </Typography>
                            </Grid>
                        </Grid>
                    ) 
                }
                <Button variant="contained" color="secondary">Back</Button>
            </Container>
        </div>
    )
}

export default BookDetail;