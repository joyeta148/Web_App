import React from 'react'
import './style.css'
import img from '../../assets/images/contact_img.jpg'

export const Contact = () => {
    return (
        <div className='contact'>
            <em>Feedback/ Contact</em>
            <div className='contact_section'>
                <form className='form'>
                    <div className='form_element'>
                        <label>Name:</label>
                        <input />
                    </div>
                    <div className='form_element'>
                        <label>Message:</label>
                        <textarea />
                    </div>
                    <div className='form_element'>
                        <button className='btn btn-primary'>
                            Submit
                        </button>
                    </div>
                </form>
                <img className='contact_img' src={img} alt="" />
            </div>
        </div>
    )
}
