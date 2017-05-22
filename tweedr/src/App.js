import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import {Route, BrowserRouter as Router} from 'react-router-dom'

import Nav from './components/Nav';
import Tweeds from './components/Tweeds';
import Input from './components/Input';
import Footer from './components/Fotter';


let Facebook = () =>{return <div> <a href='https://facebook.com'>
<img src='http://www.centerforhomemovies.org/wp-content/uploads/2015/02/Facebook-button.jpg'/></a>  
</div>}



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
     tweed: [],
    }
  }

  componentDidMount(){
    this.getAllTweeds();
  }

  getAllTweeds(){

    let url='https://tweedr-db.herokuapp.com/tweeds/'

    axios.get(url)
    .then((res) =>{
      console.log('find the tweed here', res.data.data);
      this.setState({
        tweed: res.data.data
      })

       // let show = res.data.data

       // let arr = show.map((d) =>
       //    <li>
       //      {d.tweed}
       //    </li>)


    // let read = document.getElementById('read');
    // let list = document.createElement('li');
    // list.innerHTML = res.data.data[i].tweed
    // list.setAttribute('id',[i])
    // read.appendChild(list);

    })
}
  

  handleSubmit(event){
    event.preventDefault();
    let url = 'https://tweedr-db.herokuapp.com/tweeds/';
    console.log('submt working');
    let item = document.getElementById('newVal').value;
    console.log(item);
    // console.log('this is input val', item);
    // let read = document.getElementById('read');
    // let list = document.createElement('li');
    // list.innerHTML = item
    // read.appendChild(list);

    axios.post(url, {
      tweed: item
    }) 
  }



  render() {
    return (
      <Router>
      <div className="App">
          
          <Nav/>
          
          <Input onSubmit={(event) => this.handleSubmit(event)}/>
          
          <Tweeds tweed={this.state.tweed} />
          <Footer/>

          <Route path="/facebook" exact component={Facebook}></Route>
      </div>
      </Router>
    );
  }
}

export default App;
