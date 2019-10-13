import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage/HomePage';
import Admin from './Admin/Admin'
import NavBar from './LittleComponents/NavBar';
import 'font-awesome/css/font-awesome.min.css'
import { ScrollUp } from './LittleComponents/LittleComponents'


class App extends Component {

  constructor() {
    super()
    this.state={
      page: 'home',
      user: {}
    }
  }
  componentDidMount() {
    
  }

  onSearch = () => {
    document.querySelector('.search').classList.add('to-top')
    document.querySelector('.top').classList.add('n-top')
    document.querySelector('h1').style="display: none"
    const username = document.querySelector('.username').value
    fetch('https://cors-anywhere.herokuapp.com/https://fpt-server.herokuapp.com/users').then((res)=>{
      return res.json()
    }).then(data=>{
      data.forEach(user => {
        if (user.username.toLowerCase().includes(username.toLowerCase())) {
            this.setState({user: user})
            console.log(this.state.user)
        }
        document.querySelector('.user').classList.add('u-totop')
      });
    })
  }

  onPageChange = (route) => {
    this.setState({page: route})
    console.log(route)
    document.querySelector('.nav .list').classList.remove('show')
    document.querySelector('.nav-btn').classList.remove('n-btn')
  }
 
  render() {
    return (
      <div className="App">
        <div className="top">
            <div className="items">
              <div className="img">
                <img className="logo" alt="" src={require('./img/images.jpg')} />
              </div>
              <NavBar onPageChange={this.onPageChange}/>
            </div>
        </div>
      { this.state.page === 'home'
          ? <div>
              <HomePage onSearch={this.onSearch} user={this.state.user}/>
            </div>
          : 
          (   this.state.page === 'admin'
            ?  <div>
                  <Admin/>
                </div>
            : {}
            ) 
        }
      </div>
    );
  }
}

export default App;
     