import React from 'react';
import './post.css'

const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const ANAKIN_IMAGE = "https://thenerdstash.com/wp-content/uploads/2021/10/Hayden-Christensen-Anakin-Skywalker.jpg";

const Publications = () => {
    return (
        <div className='main-block'> 
            <div className="container">
                <div className="left">
                    <img className="Anakin" src={ANAKIN_IMAGE} alt="ANAKIN SKYWALKER"/>
                </div>
                <div className="right">
                    <div className="anakin-content">
                    <p className="nickname">Anakin Skywalker</p>
                    <p className="date">@dart_vader 26 лют.</p>
                    </div>
                    <div>
                    <p className="ray-content">WTF? Who is Ray? Why she is Skywalker? Luke...?</p>
                    <img className="Ray" src={RAY_IMAGE} alt="Ray Skywalker"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Publications;

