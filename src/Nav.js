import React from 'react'
import {  Link } from 'react-router-dom';
import './App.css';


export default function Nav() {


    return (
        <div>
            <label>
                <Link to="/home">Home</Link>
                
            </label>
            <label>
            <Link to="/about">About</Link>
            </label>
            <Link to="/contact">Contact</Link>
        </div>
    )
}