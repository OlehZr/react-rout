import React from 'react';

const reactPic = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'

const Home = () => {
    return (
        <div className='home-block'>
            <img className='logo' src={reactPic} alt='react logo'/>
        </div>
    );
};

export default Home;