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
      password: ''
    }
  }

  componentDidMount(){
    fetch('https://fpt-server.herokuapp.com/password').then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data)
      this.setState({password: data[1].pass})
    })
  }

  onSearch = () => {
    document.querySelector('.loader').classList.add('come')
    document.querySelector('.search').classList.add('to-top')
    document.querySelector('.top').classList.add('n-top')
    document.querySelector('h1').style="display: none"
    const username = document.querySelector('.username').value
    fetch('https://fpt-server.herokuapp.com/users').then((res)=>{
      return res.json()
    }).then(data=>{
      console.log(data) 
      data.forEach(user => {
        if (user.username.toLowerCase().includes(username.toLowerCase())) {
            this.setState({user: user})
            console.log(this.state.user) 
        } 
        document.querySelector('.user').classList.add('u-totop')
        document.querySelector('.loader').classList.remove('come')
      });
    }).catch(()=>{
      document.querySelector('.alert').textContent="Network error"
      document.querySelector('.alert').classList.add('alert-fail')
      setTimeout(() => {
        document.querySelector('.alert').classList.remove('alert-fail')
      }, 3000);
      document.querySelector('.loader').classList.remove('come')
      console.log(document.querySelector('.user').textContent)
    })
  }


  onSubmit = () => {
    document.querySelector('.loader').classList.add('come')
    console.log(this.state.user.userid)
    fetch('https://fpt-server.herokuapp.com/submit-change', {
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
    }).then((e)=>{
      console.log(3)
      document.querySelector('.loader').classList.remove('come')
      document.querySelector('.alert').classList.add('alert-up')
      setTimeout(() => {
        document.querySelector('.alert').classList.remove('alert-up')
      }, 3000);
    }).catch((err)=>{
      console.log(err)
    })
  }

  cPass = (e) => {
    e.target.remove()
    document.querySelector('.p-change').classList.add('p-show')
  }
  onPassChange = () => {
    const passw = {
      old: document.querySelector('.old').value,
      new: document.querySelector('.new').value,
      conm: document.querySelector('.conm').value
    }
    
    if (passw.old === this.state.password && passw.new === passw.conm) {
      fetch('https://fpt-server.herokuapp.com/ch-password', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            old: passw.old,
            new: passw.conm
        })
      }).then((res)=>{
        document.querySelector('.p-change').classList.remove('p-show')
        this.setState({password: passw.conm})
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    }else if (passw.old !== this.state.password) {
      document.querySelector('.old').classList.add('wrong')
    }else if (passw.new !== this.state.password.conm) {
      document.querySelector('.old').classList.remove('wrong')
      document.querySelector('.new').classList.add('wrong')
      document.querySelector('.conm').classList.add('wrong')
    }
  }

  onPageChange = (route) => {
    if (route === 'admin') {
      if (this.state.page !== 'admin'){
        document.querySelector('.pass').classList.add('slide-in')
        window.addEventListener('keypress',(e)=>{
          if (e.key==='Enter') {
            if(document.querySelector('.password').value === this.state.password) {
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
                  <Admin onSearch={this.onSearch} user={this.state.user}
                  cPass={this.cPass} onSubmit={this.onSubmit} 
                  onPassChange={this.onPassChange}/>
                </div>
            : {}
            ) 
        }
            <div className="pass">
                <p>Please enter the administrator's password</p>
                <input type="password" className="password" placeholder="Enter password"/>
            </div>
            <div className="loader">
              <img src= {require('./img/1.gif')}/>
            </div>
            <p className="alert">Update successful</p>
      </div>
    );
  }
}

export default App;
     