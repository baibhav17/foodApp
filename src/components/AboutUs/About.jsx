import React, { Component } from 'react';
import AboutUser from '../../utils/AboutUser';
import AboutUserClassComp from '../../utils/AboutUserClassComp';

const About = () => {
    return(
        <div> 
            This is a About us page
            <AboutUser
                name={'Baibhav via function'}
                location='Noida'
            />

            <AboutUserClassComp
                 name={'Baibhav via class component'}
                 location='Noida'
            />
        </div>
    )
}

export default About;