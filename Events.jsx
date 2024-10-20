import React from 'react';
import beachImage from '../images/beach.jpeg';
import treePlantingImage from '../images/tree.jpeg';
import recyclingWorkshopImage from '../images/recycle.jpeg';
import "../Events.css"; 

const Events = () => {
    const events = [
        {
            id: 1,
            name: 'Beach Cleanup',
            image: beachImage,
            overview: 'Join us for a day of fun and community as we clean up our local beach.'
        },
        {
            id: 2,
            name: 'Tree Planting Day',
            image: treePlantingImage,
            overview: 'Help us plant trees in our community park to promote a greener environment.'
        },
        {
            id: 3,
            name: 'Recycling Workshop',
            image: recyclingWorkshopImage,
            overview: 'Learn about recycling practices and how to reduce waste in your home.'
        },
        // Add more events as needed
    ];

    return (
        <div className='item-container'>
            {events.map(({ id, name, image, overview }) => (
                <div className='card' key={id}>
                    <img src={image} alt={name} />
                    <section className='event-info'>
                        <h3>{name}</h3>
                        <p>{overview}</p>
                    </section>
                </div>
            ))}
        </div>
    );
};

export default Events;
