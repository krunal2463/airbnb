import React from 'react';
import './SearchPage.css';
import {Button}  from '@material-ui/core'; 
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
            <p>300 + stays</p>
            <h1>Stays in Prague</h1>
            <Button variant="outlined">Free cancellation </Button>
            <Button variant="outlined">Type of place</Button>
            <Button variant="outlined">Price</Button>
            <Button variant="outlined">Instant Book</Button>
            <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult 
            img='https://housinganywhere.imgix.net/room/1752956/c45125fd-06db-4e01-9a86-5cd6e9802beb.jpg?auto=format&fit=clip&h=300&orient=0&w=490&ixlib=react-9.2.0'
            location='Private room in center of Prague'
            title='Stay at this spacious Petr House'
            description='1 guest | 1 bedroom | 1 bed | 1.5 shared bathrooms | Wifi | Kitchen | Free parking | Washing Machine'
            star={4.9}
            price='€32 / night'
            total='€122 total'
            />
            <SearchResult 
            img='https://assets-amberstudent.imgix.net/inventories/133440/cec76ffd.jpg?w=480&h=360&fit=crop&auto=compress&trim=auto&fm=pjpg'
            location='Private room in center of Prague'
            title='Stay at this spacious Eva House'
            description='1 guest | 1 bedroom | 1 bed | 1.5 shared bathrooms | Wifi | Kitchen | Free parking | Washing Machine'
            star={4.5}
            price='€22 / night'
            total='€110 total'
            />
            <SearchResult 
            img='https://www.viahostels.com/lewisham/wp-content/uploads/sites/5/twin_room_1-800x533.jpg'
            location='Private room in center of Prague'
            title='Stay at this spacious Vojtech House'
            description='1 guest | 1 bedroom | 1 bed | 1.5 shared bathrooms | Wifi | Kitchen | Free parking | Washing Machine'
            star={4.6}
            price='€24 / night'
            total='€116 total'
            />
            <SearchResult 
            img='https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/182554/fdd0c817.jpg'
            location='Private room in center of Prague'
            title='Stay at this spacious Adela House'
            description='1 guest | 1 bedroom | 1 bed | 1.5 shared bathrooms | Wifi | Kitchen | Free parking | Washing Machine'
            star={4.8}
            price='€32 / night'
            total='€120 total'
            />
            <SearchResult 
            img='data:image/jpeg;base64,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'
            location='Private room in center of Prague'
            title='Stay at this spacious Tereza House'
            description='1 guest | 1 bedroom | 1 bed | 1.5 shared bathrooms | Wifi | Kitchen | Free parking | Washing Machine'
            star={4.7}
            price='€27 / night'
            total='€115 total'
            />
            <SearchResult 
            img='https://a0.muscache.com/im/pictures/f324cf23-e5fa-40ff-bbcb-1dcc98375171.jpg?im_w=720'
            location='Private room in center of Prague'
            title='Stay at this spacious Milos House'
            description='1 guest | 1 bedroom | 1 bed | 1.5 shared bathrooms | Wifi | Kitchen | Free parking | Washing Machine'
            star={4.9}
            price='€25 / night'
            total='€113 total'
            />
        </div>
    )
}

export default SearchPage
