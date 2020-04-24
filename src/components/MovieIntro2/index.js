import React from 'react';
import './style.css';
import Card from '../UI/Card';

const MovieIntro2=(props)=>{
    return(
        
        <div className ="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    
                    <h1 className="postTitle">Mulan</h1>
                    <span className="postedby">By Niki Caro, 2019</span>

                </div>
                <div className="postImage">
                    <img src={require('../../assets/movie2.jpg')} alt="Post Image2" />

                </div>
                <p>Mulan is a 2020 American action drama film directed by Niki Caro, with the screenplay by Rick Jaffa, Amanda Silver, Lauren Hynek, and Elizabeth Martin, produced by Walt Disney Pictures, and distributed by Walt Disney Studios Motion Pictures. The film is based on the Chinese folklore "The Ballad of Mulan" and is a live-action adaptation of Disney's 1998 animated film of the same name. The film stars Liu Yifei in the title role, alongside Donnie Yen, Jason Scott Lee, Yoson An, Gong Li, and Jet Li in supporting roles.</p>
            </Card>

        </div>
        
    )
}

export default MovieIntro2