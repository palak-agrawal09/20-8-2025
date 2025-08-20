import React from 'react'
import { useParams } from 'react-router-dom';

export default function BusinessListing() {
    //Deconstruction of js object
    const { b_listing_id } = useParams();
    return (
        <>
            <div>BusinessListing</div>
            <p>ID: {b_listing_id}</p>
        </>
    )
}
