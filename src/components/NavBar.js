import React from 'react';
import '../styles/navbar.css';

export const NavBar = () => {
    return (
        <header>
            { <h1 className = "font"> EILEEN HUYNH </h1> } 
            <nav className = "rubik-font">
                <a href="/">Home</a>
                <a href="/aboutme">About Me</a>
                <a href="/#">My Projects</a>
                <a href="https://drive.google.com/file/d/1AjyWjiFU-EgZv_W2Z5CKsUrSUNzquGkU/view?usp=sharing">Resume</a>  
                <a href="/contact">Contact</a>
                <a href="https://github.com/eileenhuynh" class="button" >click me!</a>
            </nav>
        </header>
    )
}
