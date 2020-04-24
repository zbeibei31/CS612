import React from 'react';
import './style.css';


import {NavLink} from 'react-router-dom';




const Main=(props)=>{
    return(
        
        <div className="postContainer">
            
                <ul className="postMenu">

                    <body className="sum">
                        <li><NavLink to="/post">Titanic</NavLink></li>
                        <p className="comm">Romantic love story will always on my top list.<img  src={require('../../assets/movie1.png')} alt="Post Image" height="100" width="100" /></p>

                    </body>

                    <body className="sum">
                        <li><NavLink to="/post2">Mulan</NavLink></li>
                        <p className="comm">Fantastic story about women!<img  src={require('../../assets/movie2.jpg')} alt="Post Image2" height="100" width="100" /></p>

                    </body>

                    <body className="sum">
                        <li><NavLink to="/post3">Toy Story</NavLink></li>
                        <p className="comm">Family cartoon for childern and adults.<img  src={require('../../assets/Toy_Story.jpg')} alt="Post Image3" height="100" width="100" /></p>

                    </body>
                    
                                      
                </ul>
                
            
                

        </div>
            
        
    )
} 

export default Main