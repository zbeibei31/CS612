import React from 'react';
import './style.css';
import Card from '../UI/Card';

const MovieIntro1 =(props)=>{
    return(
        
        <div className ="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    
                    <h1 className="postTitle">Titanic</h1>
                    <span className="postedby">By James Cameron, 1995</span>

                </div>
                <div className="postImage">
                    <img src={require('../../assets/movie1.png')} alt="Post Image" />

                </div>
                <p>Titanic is a 1997 American epic romance and disaster film directed, written, co-produced, and co-edited by James Cameron. Incorporating both historical and fictionalized aspects, the film is based on accounts of the sinking of the RMS Titanic, and stars Leonardo DiCaprio and Kate Winslet as members of different social classes who fall in love aboard the ship during its ill-fated maiden voyage.</p>
            </Card>

        </div>
        
    )
}

export default MovieIntro1;