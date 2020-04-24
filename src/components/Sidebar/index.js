import React,{Component} from 'react';
import './style.css';
import Card from '../UI/Card';
import {NavLink} from 'react-router-dom';



export default class Sidebar extends Component{
    constructor(){
        super();
        this.state ={
            list:[],
            error:null
        }
    }
    buildList =(data)=>{
        console.log(data);
        this.setState({list:data.articles})

    }
    componentDidMount(){
        let url = 'http://newsapi.org/v2/everything?domains=wsj.com&apiKey=70704f233db744ce8b75ab86eaef1d56';
        fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch()
        
    }
    
    render(){
        return(

            <Card style={{width:'27%'}}>
                
            <div>
                <h3 className="nav">Navigation</h3>
                
                <li><NavLink to="/">Home</NavLink></li>
                <h1><center>WSJ articles</center></h1>
                <meta http-equiv="refresh" content="5"/>
                <ul>
                    {
                        this.state.list.length === 0 &&
                        <li>Loading...</li>
                    }
                    { this.state.list.length >0 &&
                        this.state.list.map((item)=>(
                            <li>{item.title + " " + item.author}</li>
                        ))
                        
                    }

                </ul>
                {this.state.error &&
                    <h3>{this.state.error}</h3>
                }
            </div>
            </Card>
        )
    }
}

