import React from 'react';
import Card from '../UI/Card';
import Logo from '../Logo';
import Navbar from '../Navbar';


const Header =(props)=>{
    return(
        <div>
            <Card>
                <div style={{padding:'70px 0'}}>
                <Logo />
                </div>
                <Navbar />
            </Card>
        </div>
    )
}

export default Header