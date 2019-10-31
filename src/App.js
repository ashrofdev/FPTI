import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage/HomePage';
import Admin from './Admin/Admin'
import NavBar from './LittleComponents/NavBar';
import 'font-awesome/css/font-awesome.min.css'
import Dropzone from 'react-dropzone'
import { ScrollUp } from './LittleComponents/LittleComponents'
import './Firebase'
import { firebaseDB } from './Firebase'


class App extends Component {

  constructor() {
    super()
    this.state={
      page: 'home',
      users: [],
      user: {},
      password: '123',
      userNum: 0
    }
  }

  componentDidMount(){
    firebaseDB.ref().once('value').then((snapshot)=>{
      const users = []
      snapshot.val().forEach(e => {
          users.push(e)
      });
      this.setState({users: users})
      console.log(this.state.users)
      
    })
    
    window.addEventListener('keypress',(e)=>{
      if (e.key==='Enter') {
        this.onSearch()
      }
    })
  }

  onSearch = () => {
    document.querySelector('.loader').classList.add('come')
    document.querySelector('.search').classList.add('to-top')
    document.querySelector('.top').classList.add('n-top')
    if (this.state.page === 'home') {
      document.querySelector('h1').style="display: none"
    }
    const username = document.querySelector('.username').value
    this.state.users.forEach((user, i)=>{
      if (user.B.toLowerCase().includes(username.toLowerCase())) {
        this.setState({user: user})
        this.setState({userNum: i})
        console.log(user)
        console.log(this.state.user)
        document.querySelector('.user').classList.add('u-totop')
        document.querySelector('.loader').classList.remove('come')
      }
    })
    // 
    // fetch('https://fpt-server.herokuapp.com/users').then((res)=>{
    //   return res.json()
    // }).then(data=>{
    //   console.log(data) 
    //   data.forEach(user => {
    //     if (user.username.toLowerCase().includes(username.toLowerCase())) {
    //       this.setState({user: user})
    //       console.log(this.state.user) 
    //       document.querySelector('.user').classList.addd('u-totop')
    //     } 
    //     document.querySelector('.loader').classList.remove('come')
    //   });
    // }).catch(()=>{
    //   document.querySelector('.alert').textContent="Network error"
    //   document.querySelector('.alert').classList.add('alert-fail')
    //   setTimeout(() => {
    //     document.querySelector('.alert').classList.remove('alert-fail')
    //   }, 3000);
    //   document.querySelector('.loader').classList.remove('come')
    //   console.log(document.querySelector('.user').textContent)
    // })
  }
// A: "43725"
// B: "KAREEM AMOD TITILOPE"
// C: "8062105312"
// D: "AMOD82"
// E: "NG999638"
// F: "0"
// G: "0"
// H: "0"
// I: "0"
// J: "0"
// K: "0"
// L: "0"


  onSubmit = () => {
    console.log(this.state.userNum)
    const el = {
      id: this.state.user.userid,
      m1: document.querySelector('.m1').value,
      m2: document.querySelector('.m2').value,
      m3: document.querySelector('.m3').value,
      m4: document.querySelector('.m4').value,
      m5: document.querySelector('.m5').value,
      m6: document.querySelector('.m6').value,
      m7: document.querySelector('.m7').value
    }
    firebaseDB.ref().child(this.state.userNum).update({
      'F': el.m1,
      'G': el.m2,
      'H': el.m3,
      'I': el.m4,
      "J": el.m5,
      "K": el.m6,
      "L": el.m7
    })
    document.querySelector('.loader').classList.add('come')
    console.log(this.state.user.userid)
    fetch('https://fpt-server.herokuapp.com/submit-change', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        
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
        this.setState({page: route})
        console.log(this.state.users, '....')
       
      } else {
        this.setState({page: route})
      }
    } else {
      document.querySelector('.pass').classList.remove('slide-in')
      this.setState({page: route})
    }
    console.log(route)
    document.querySelector('.nav .list').classList.remove('show')
    document.querySelector('.nav-btn').classList.remove('n-btn')
  }

  drop = (file) => {
    console.log(file)
    fetch('https://fpt-server.herokuapp.com/files', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            file: file,
        })
      }).then((res)=>{
        console.log(res)
        return res.json()
        .then((data)=>{
          console.log(data)
        })
      }).catch((err)=>{
        console.log(err)
      })
  }
 
  render() {
    return (
      <div className="App">
        <section>
        <Dropzone
            onDrop={(e)=> this.drop(e)}
            multiple={false}>
            {({ getRootProps, getInputProps }) => {
              console.log("input props", getInputProps)
              return (
                  <div
                      {...getRootProps()}
                  >
                      <input {...getInputProps()} />
                      {
                          <p>Try dropping some files here, or click to select files to upload.</p>
                      }
                  </div>
              )
            }}
        </Dropzone>
        </section>
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
     