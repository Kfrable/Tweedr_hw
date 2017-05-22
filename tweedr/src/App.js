import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import {Route, BrowserRouter as Router} from 'react-router-dom'

import Nav from './components/Nav';
import Tweed from './components/Tweeds';
import Input from './components/Input';
import Footer from './components/Fotter';


let Facebook = () =>{return <div> <a href='https://facebook.com'>
<img src='http://www.centerforhomemovies.org/wp-content/uploads/2015/02/Facebook-button.jpg'/></a>  
</div>}



class App extends Component {
  constructor(props){
    super(props)
    this.state={
     tweed: ''
    }
  }

  componentDidMount(){
    this.getAllTweeds();
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

  handleSubmit(event){
    event.preventDefault();
    let url = 'https://tweedr-db.herokuapp.com/tweeds/'
    console.log(event.target.value)
    // let read = document.getElementById('read');
    // let list = document.createElement('li');
    // list.innerHTML = event.target.value
    // read.appendChild(list);
    console.log('what does read show --->', read);
    console.log('what does LIST show --->', list);
    console.log('what does VALUE show --->', event.target.value);
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
          
          <Input onSubmit={(event) => this.handleSubmit(event)}/>
          
          <Tweed />
          <Footer/>

          <Route path="/facebook" exact component={Facebook}></Route>
      </div>
      </Router>
    );
  }
}

export default App;
