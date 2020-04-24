import React from 'react';
import './style.css';


import Sidebar from '../../components/Sidebar';
import MovieIntro1 from '../../components/MovieIntro1';




const Post=(props)=>{
    return(
        <section className="container">
            <MovieIntro1/>

            
        
            <Sidebar/>
            
        </section>
    )
}

export default Post;