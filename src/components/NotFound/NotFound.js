import React from 'react';
import pageNotFound from '../../images/pageNotFound.jpg';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notfoundImg">
            <p>Not found this url, sorry!</p>
            <img src={pageNotFound} alt="" />
        </div>
    );
};

export default NotFound;