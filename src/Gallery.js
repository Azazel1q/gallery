import React from "react";
import './gallery.css'


const Gallery = () => {

    let data = [
        {
            id: 1,
            imgSrc: 'https://img.freepik.com/free-photo/a-heart-shaped-cloud-is-in-the-sky-with-the-word-love-on-it_1340-34492.jpg?size=626&ext=jpg&ga=GA1.2.1074159409.1685620925&semt=sph',
        },
        {
            id: 2,
            imgSrc: 'https://img.freepik.com/free-photo/young-couple-together-walking-in-an-autumn-park_1303-26190.jpg?w=360&t=st=1689165760~exp=1689166360~hmac=e16d567ccaff6692b5fd2b18b0a8cb47b2316be1e9f01a00b10321ddf5e32b23',
        },
        {
            id: 3,
            imgSrc: 'https://img.freepik.com/free-photo/a-heart-shaped-cloud-is-in-the-sky-with-the-word-love-on-it_1340-34492.jpg?size=626&ext=jpg&ga=GA1.2.1074159409.1685620925&semt=sph',
        },
        {
            id: 4,
            imgSrc: 'https://img.freepik.com/free-photo/a-heart-shaped-cloud-is-in-the-sky-with-the-word-love-on-it_1340-34492.jpg?size=626&ext=jpg&ga=GA1.2.1074159409.1685620925&semt=sph',
        },
    ]

    return (
        <>
        <div className="gallery">
            {data.map((item, index)=> {
                return (
                    <div className="pics" key={index}>
                        <img className="img" src={item.imgSrc} />
                    </div>
                )
            })}
        </div>
        </>
        
    )
}

export default Gallery;