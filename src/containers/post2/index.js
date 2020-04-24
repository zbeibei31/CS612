import React from 'react';
import './style.css';


import Sidebar from '../../components/Sidebar';
import MovieIntro2 from '../../components/MovieIntro2';

const Post2=(props)=>{
    return(
        <section className="container">
            <MovieIntro2/>
            <Sidebar/>
            
        </section>
    )
}

export default Post2;