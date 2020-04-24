import React from 'react';
import './App.css';
import Home from './containers/Home';


import{BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Post2 from './containers/post2';
import Post from './containers/Post';
import Footer from './components/Footer';
import Post3 from './containers/Post3';
import Header from './components/Header';







function App() {
  return (
    <Router>
      <div className="App">
        
        <Header/>
        
        <Route path="/" exact component={Home}/>
        
        <Route path="/post" component={Post}/>
        <Route path="/post2" component={Post2}/> 
        <Route path="/post3" component={Post3}/> 
        <Footer />
        
      </div>

    </Router>
    
  );
}

export default App;
