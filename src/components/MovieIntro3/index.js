import React from 'react';
import './style.css';
import Card from '../UI/Card';

const MovieIntro3=(props)=>{
    return(
        
        <div className ="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    
                    <h1 className="postTitle">Toy Story</h1>
                    <span className="postedby">By John Lasseter, 1995</span>

                </div>
                <div className="postImage">
                    <img src={require('../../assets/Toy_Story.jpg')} alt="Post Image3" />

                </div>
                <p>Toy Story is a 1995 American computer-animated buddy comedy film produced by Pixar Animation Studios and released by Walt Disney Pictures. The feature film directorial debut of John Lasseter, it was the first entirely computer-animated feature film, as well as the first feature film from Pixar. The screenplay was written by Joss Whedon, Andrew Stanton, Joel Cohen, and Alec Sokolow from a story by Lasseter, Stanton, Pete Docter, and Joe Ranft. The film features music by Randy Newman, was produced by Bonnie Arnold and Ralph Guggenheim, and was executive-produced by Steve Jobs and Edwin Catmull. It features the voices of Tom Hanks, Tim Allen, Don Rickles, Wallace Shawn, John Ratzenberger, Jim Varney, Annie Potts, R. Lee Ermey, John Morris, Laurie Metcalf, and Erik von Detten.</p>
            </Card>

        </div>
        
    )
}

export default MovieIntro3