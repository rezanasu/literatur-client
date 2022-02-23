import axios from './api/axios'


// ACTION

export function postLogin(email, password) {
    
    return axios({
        method: "POST",
        url: '/login',
        data: {
            email,
            password
        }
    })
    .then((response) => {
        const {access_token} = response.data
        localStorage.setItem('access_token', access_token)
        return response;
    })
    .catch(err => {
        console.log(err);
    })
}

export function postRegister(payload) {
    const {username, email, password} = payload;

    return axios({
        method: "POST",
        url: "/register",
        data: {
            username,
            email,
            password
        }
    })
    .then(response => {
        console.log("Register successfully");
        return response;
    })
    .catch(err => {
        console.log(err);
    })
}

export async function fetchBooks() {

    return axios({
        method: "GET",
        url: "/books",
        headers: {access_token: localStorage.getItem("access_token")}
    })
    .then(response => {
        return response;
    })
    .catch(err => {
        console.log(err);
    })
}

export async function getBook(bookId) {

    return axios({
        method: "GET",
        url: `/books/${bookId}`,
        headers: {access_token: localStorage.getItem("access_token")}
    })
    .then(response => {
        return response;
    })
    .catch(err => {
        console.log(err);
    })
}

export async function fetchFavourites() {

    return axios({
        method: "GET",
        url: "/books/favourites",
        headers: {access_token: localStorage.getItem("access_token")}
    })
    .then(response => {
        return response;
    })
    .catch(err => {
        console.log(err);
    })
}