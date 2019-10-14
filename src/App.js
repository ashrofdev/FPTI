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
      user: {},
      password: 'f'
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
    }).catch(()=>{
      document.querySelector('.user').textContent = 'Bad internet connection'
      console.log(document.querySelector('.user').textContent)
    })
  }

  onPageChange = (route) => {
    if (route === 'admin') {
      if (this.state.page !== 'admin'){
        document.querySelector('.pass').classList.add('slide-in')
        window.addEventListener('keypress',(e)=>{
          if (e.key==='Enter') {
            if(document.querySelector('.password').value === this.state.password) {
              document.querySelector('body').style="background-color: rgb(57, 58, 57);"
              document.querySelector('.top').style="background-color: white"
              document.querySelector('.search').classList.add('to-top')
              document.querySelector('.top').classList.add('n-top')
              document.querySelector('h1').style="display: none"
              this.setState({page: route})
              document.querySelector('.pass').classList.remove('slide-in')
              document.querySelector('.password').value = ''
            }
          }
        })
      } else {
        this.setState({page: route})
      }
    } else {
      this.setState({page: route})
    }
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
                  <Admin onSearch = {this.onSearch} user={this.state.user}/>
                </div>
            : {}
            ) 
        }
            <div className="pass">
                <p>Please enter the administrator's password</p>
                <input type="password" className="password" placeholder="Enter password"/>
            </div>
      </div>
    );
  }
}

export default App;
     