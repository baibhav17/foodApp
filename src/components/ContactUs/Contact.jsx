import React, { Component } from 'react';

const Contact = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <div>
            <h1 className='font-bold text-2xl text-center m-4'>Contact Us Page</h1>
            <form onClick={handleFormSubmit}>
                <input type='text' placeholder='Enter Your FUll Name' className='border border-black p-2 m-2' />
                <input type='text' placeholder='Enter your message' className='border border-black p-2 m-2' />
                <button className='border border-black p-2 m-2 rounded-lg bg-gray-200'>submit</button>
            </form>
        </div>
    )
}

export default Contact;