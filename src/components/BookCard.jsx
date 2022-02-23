import React from 'react'
import {
    Card, 
    CardMedia,
    CardContent,
    Typography
} from '@mui/material';

function BookCard(props) {
    const {book} = props;
    return(
        <Card variant="outlined" sx={{maxWidth: 200}}>
            <CardMedia
                component="img"
                image={book.coverImage}
                alt="a piece of book"
            />
            <CardContent sx={{textAlign: "center"}}>
                <Typography variant="h6" mb={3} sx={{fontWeight: "bold"}}>{book.title}</Typography>
                {
                    book.Genres.map(g => {
                        return(
                            <Typography variant="subtitle1" key={g.id}>{g.name}</Typography>
                        )
                    })
                }
            </CardContent>
        </Card>
    )
}

export default BookCard;