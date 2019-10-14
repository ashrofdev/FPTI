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
      console.log(data) 
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


  onSubmit = () => {
    console.log(this.state.user.userid)
    fetch('https://cors-anywhere.herokuapp.com/https://fpt-server.herokuapp.com/submit-change', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.state.user.userid,
        m1: document.querySelector('.m1').value,
        m2: document.querySelector('.m2').value,
        m3: document.querySelector('.m3').value,
        m4: document.querySelector('.m4').value,
        m5: document.querySelector('.m5').value,
        m6: document.querySelector('.m6').value,
        m7: document.querySelector('.m7').value
      })
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
                  <Admin onSearch={this.onSearch} user={this.state.user} onSubmit={this.onSubmit}/>
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
     