import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import {Route, BrowserRouter as Router} from 'react-router-dom'

import Nav from './components/Nav';
import Tweed from './components/Tweeds';
import Write from './components/Input';
import Submit from'./components/Submit';
import Footer from './components/Fotter';


let Facebook = () =>{return <div> <a href='https://facebook.com'>
<img src='http://www.centerforhomemovies.org/wp-content/uploads/2015/02/Facebook-button.jpg'/></a>  
</div>}



class App extends Component {
  constructor(props){
    super(props)
    this.state={
     tweed:""
    }
  }




  getAllTweeds(data){
    console.log('get all comments')
    let url='https://tweedr-db.herokuapp.com/tweeds/'

   for(let i = 0; i <3; i++){
    axios.get('https://tweedr-db.herokuapp.com/tweeds/?tweed' + [i])
    .then((res) =>{
       console.log(res.data.data.tweed)
    let read = document.getElementById('read');
    let list = document.createElement('li');
    list.innerHTML = res.data.data[i].tweed
    list.setAttribute('id',[i])
    read.appendChild(list);

    })
  }
  }

  handleOnClick(event){
    let url = 'https://tweedr-db.herokuapp.com/tweeds/'
    console.log('working')
    console.log(event.target.value)
    let read = document.getElementById('read');
    let list = document.createElement('li');
    list.innerHTML = event.target.value
    read.appendChild(list);
    let button = document.getElementById('butt')
    button.addEventListener('click',this.getAllTweeds)
    axios.post(url)
    .then((res) =>{ 
        event.target.value
    })
    
  }


  render() {
    return (
      <Router>
      <div className="App">
          
          <Nav/>
          
          <Write onClick={(event) => this.handleOnClick(event)}/>
          
          <Tweed onPageLoad={(event) => this.getAllTweeds(event)}/>
          <Footer/>

          <Route path="/facebook" exact component={Facebook}></Route>
      </div>
      </Router>
    );
  }
}

export default App;
