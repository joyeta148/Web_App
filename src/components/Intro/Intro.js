import React from 'react';
import bg_img from '../../assets/images/bg_img.jpg';
import './style.css'

export const Intro = (props) => {
    return (
        <div className="intro_wrapper">
            <div className='intro_head'>
                <div className='intro_header'>
                    <em>MUSICOHOLIC</em>
                </div>
                <p>A platform where you can enjoy listening music and sing along with lyrics.</p>
            </div>
            <img className="intro_img" src={bg_img} alt="music image" />
        </div>
    )
}