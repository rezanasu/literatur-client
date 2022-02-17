import React from 'react'
import {
    Card, 
    CardMedia,
    CardContent,
    Typography
} from '@mui/material';

function BookCard() {

    return(
        <Card variant="outlined" sx={{maxWidth: 200}}>
            <CardMedia
                component="img"
                image="https://pictures.abebooks.com/isbn/9780345539786-us.jpg"
                alt="a piece of book"
            />
            <CardContent sx={{textAlign: "left"}}>
                <Typography variant="subtitle1">Title</Typography>
                <Typography variant="subtitle2">Description....</Typography>
            </CardContent>
        </Card>
    )
}

export default BookCard;