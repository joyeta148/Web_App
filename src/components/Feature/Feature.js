import React from 'react'
import './style.css'
import img1 from '../../assets/images/enjoy_music_1.jpg'
import img2 from '../../assets/images/enjoy_music_2.jpg'
import img3 from '../../assets/images/enjoy_music_3.jpeg'

export const Feature = () => {
    return (
        <div className='feature'>
            <div className='card'>
                <img class="card-img-top" src={img1} alt="Card image cap" />
                <div class="card-body">
                    <p>Listen to party Songs</p>
                </div>
            </div>
            <div className='card'>
                <img class="card-img-top" src={img2} alt="Card image cap" />
                <div class="card-body">
                    <p>Listen to soothing and relaxing Songs</p>
                </div>
            </div>
            <div className='card'>
                <img class="card-img-top" src={img3} alt="Card image cap" />
                <div class="card-body">
                    <p>No era limit, can listen new GenZ songs and retro songs as well</p>
                </div>
            </div>
        </div>
    )
}
