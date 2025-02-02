import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div style={{ backgroundImage: `url(${imageUrl})` }} className='background-image'></div>
        <div className='content'>
            <h1 className='title'>
                {title.toUpperCase()}
            </h1>
            <span className='subTitle'>
                SHOP NOW
            </span>
        </div>
    </div>
)

export default withRouter(MenuItem);