import React from 'react';
import { data, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
function MovieDetail() {
    const [movie, setMovie] = useState(null)
    const params = useParams();

    useEffect(() => {
        fetch('http://localhost:5000/api/movies/' + params.id).then(Response => {
            return Response.json()
        }).then(data => {
            setMovie(data)
        }).catch(error => {
            console.log("lỗi API", error)
        })
    }, [])

    return (
        <div>
            <h1>Đây là trang chi tiết phim</h1>
            <p>{movie ? movie.title : "đang tải..."}</p>
        </div>
    );
}

export default MovieDetail;
