import React from 'react';
import { useParams } from 'react-router-dom';

function MovieDetail() {
    // useParams() giúp ta lấy cái ID trên thanh địa chỉ URL xuống
    const params = useParams();

    return (
        <div>
            <h1>Đây là trang chi tiết phim</h1>
            <p>Đang xem phim có ID là: {params.id}</p>
        </div>
    );
}

export default MovieDetail;
