import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className="home">
            <Banner />

            <h1 className='home__titleOne'>Live anywhere</h1>
            <div className="home__section">
                <Card
                src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480"
                title="Unique Stays"
                // description="Unique activities we can do together, led by a world of hots."
                />
                <Card
                src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480"
                title="Outdoor Gateways"
                // description="Unique activities we can do together, led by a world of hots."
                />
                <Card
                src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480"
                title="Entire Homes"
                // description="Unique activities we can do together, led by a world of hots."
                />
                <Card
                src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=480"
                title='Pets allowed'
                // description="Unique activities we can do together, led by a world of hots."
                />
            </div>
            <h1 className="home__titleTwo">Discover Things to do</h1>
            <div className="home__section">
                <Card
                src="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                title="Experiences"
                description="Find unforgettable activities near you."
                // price="€15/night"
                />
                <Card
                src="https://a0.muscache.com/im/pictures/0ce799cb-7553-4369-be9e-d0011e0ef636.jpg?im_w=480"
                title="Online Experiences"
                description="Live, interactive activities led by Hosts."
                // price="€10/night"
                />
                <Card
                src="https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=480"
                title="Featured collection: Wanderlust"
                description="Travel from home with Online Experiences."
                // price="€20/night"
                />
            </div>
        </div>
    )
}

export default Home
