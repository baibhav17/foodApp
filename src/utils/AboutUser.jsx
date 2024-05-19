import React, { Component, useState } from 'react';

const AboutUser = ({name, location}) => {
    const [contactHeading]=useState('contact person details via function')
    return(
        <div className='about-user-card'>
            <h1>{contactHeading}</h1>
            <h2>name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Email:</h4>
        </div>
    )
}

export default AboutUser