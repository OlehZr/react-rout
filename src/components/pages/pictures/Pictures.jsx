import React from 'react';

const pic_1 = "https://if-matras.com/image/catalog/blog/puteshestviya/puteshestviya-po-ukraine-gory.jpg";
const pic_2 = "https://vsviti.com.ua/wp-content/uploads/2016/02/1-3.jpg";
const pic_3 = "https://naukozavr.info/wp-content/uploads/2020/02/Uralski-gory.jpg";
const pic_4 = "https://tourinform.org.ua/wp-content/uploads/2020/03/ko.jpg"


const Pictures = () => {
    return (
        <div className='mountain-block'>
            <img className="mountain" src={pic_1} alt="Mountain"/>
            <img className="mountain" src={pic_2} alt="Mountain"/>
            <img className="mountain" src={pic_3} alt="Mountain"/>
            <img className="mountain" src={pic_4} alt="Mountain"/>
        </div>
    );
};

export default Pictures;