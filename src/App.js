import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage/HomePage';
import Admin from './Admin/Admin'
import NavBar from './LittleComponents/NavBar';
import 'font-awesome/css/font-awesome.min.css'
import './LittleComponents/LittleComponents'
import './Firebase'
import { firebaseDB, firebas } from './Firebase'
import { async } from 'q';


class App extends Component {

  constructor() {
    super()
    this.state={
      page: 'home',
      users: [],
      user: {},
      password: '123',
      userNum: 0,
      imgURL: '',
      length: 0
    }
  }

  async componentDidMount(){
    
    // pulling database
    await firebaseDB.ref().once('value').then((snapshot)=>{
      Object.entries(snapshot.val()).map(e => {
        this.state.users.push(e[1])
      })
      this.setState({
        length: this.state.users.length
      })
    })
    
    
    window.addEventListener('keypress',(e)=>{
      if (e.key==='Enter') {
        this.onSearch()
      }
    })
  }

  // initializing the search function
  onSearch = () => {  
    document.querySelector('.loader').classList.add('come')
    document.querySelector('.search').classList.add('to-top')
    document.querySelector('.top').classList.add('n-top')
    if (this.state.page === 'home') {
      document.querySelector('h1').style="display: none"
    }
    const username = document.querySelector('.username').value
    if (this.state.users[0] !== undefined) {
      setTimeout(() => {
        // search filtering
          this.state.users.forEach((user, i)=>{
            console.log(this.state.users, 'the.............resssss')
            console.log(user.D, username)
            if (user.D === username.toUpperCase()) {
              this.setState({user: user})
              this.setState({userNum: i})
                console.log(this.state.user)
                document.querySelector('.user').classList.add('u-totop')
                document.querySelector('.loader').classList.remove('come')
              
            }else {
              document.querySelector('.loader').classList.remove('come')
              document.querySelector('.alert').textContent="User not found"
              document.querySelector('.alert').classList.add('alert-fail')
              setTimeout(() => {
                document.querySelector('.alert').classList.remove('alert-fail')
              }, 3000);
            }
          })
        
      }, 800);
      
    }else {
      document.querySelector('.loader').classList.remove('come')
      document.querySelector('.alert').textContent="Failed: No internet connection"
      document.querySelector('.alert').classList.add('alert-fail')
      setTimeout(() => {
        document.querySelector('.alert').classList.remove('alert-fail')
      }, 3000);
      console.log(this.state.user.B, 'no internet access')
    }
    
    const starsRef = firebas.storage()

    // Get the download URL for profile picture
    setTimeout(() => {
      const proPic = this.state.user.B

      starsRef.ref(this.state.user.username).child(proPic).getDownloadURL().then((url) => {
        this.setState({imgURL: url})
        console.log(url)
        
      }).catch((err)=>{
        starsRef.ref(this.state.user.username).child('default').getDownloadURL().then((url) => {
          this.setState({imgURL: url})
          console.log(url)
          
        })
      })
    }, 2000);
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


  onSubmit = async () => {
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
    await firebaseDB.ref().child(this.state.userNum).update({
      'F': el.m1,
      'G': el.m2,
      'H': el.m3,
      'I': el.m4,
      "J": el.m5,
      "K": el.m6,
      "L": el.m7
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

  // Handling routing
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
// 1000 000
 
  // initializing image upload function
  upload = async (e)  =>{
    console.log(e.target.files[0].size, '...........')
    if (e.target.files[0].size < 1000000) {
      const proPic = this.state.user.B
      await firebas.storage().ref(this.state.user.username).child(proPic).put(e.target.files[0])
          .then(snapshot => {
                console.log(snapshot)
              
      });
      
      // Getting the download URL
        const starsRef = firebas.storage()
        starsRef.ref(this.state.user.username).child(proPic).getDownloadURL().then((url) => {
          this.setState({imgURL: url})
          console.log(url)
          
        })
    } else {
      document.querySelector('.alert').textContent="Failed: File larger than 1MB"
      document.querySelector('.alert').classList.add('alert-fail')
      setTimeout(() => {
        document.querySelector('.alert').classList.remove('alert-fail')
      }, 3000);
      console.log(e.target.files[0].size, '....file too big.......')
    }
    
  }

  // initializing register function
  addUser = async () => {
    await firebaseDB.ref().child(this.state.length).set({
        A: document.querySelector('.date').value,
        B: document.querySelector('.name').value,
        C: document.querySelector('.phone').value,
        D: document.querySelector('.userN').value,
        E: document.querySelector('.userid').value,
        F: '0',
        G: '0',
        H: '0',
        I: '0',
        J: '0',
        K: '0',
        L: '0'
    }).then(()=>{
      firebaseDB.ref().once('value').then((snapshot)=>{
        const users = []
        Object.entries(snapshot.val()).map(e => users.push(e[1]))
        this.setState({
          users: users,
          length: users.length
        })
        
      })
    })
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
              <HomePage onSearch={this.onSearch} user={this.state.user}
               imgURL={this.state.imgURL} upload={this.upload}/>
            </div>
          : 
          (   this.state.page === 'admin'
            ?  <div>
                  <Admin onSearch={this.onSearch} user={this.state.user}
                  cPass={this.cPass}  imgURL={this.state.imgURL}
                  upload={this.upload} length={this.state.length} addUser={this.addUser}
                  onSubmit={this.onSubmit} onPassChange={this.onPassChange}/>
                </div>
            : {}
            ) 
        }
            <div className="pass">
                <p>Please enter the administrator's password</p>
                <input type="password" className="password" placeholder="Enter password"/>
            </div>
            <div className="loader">
              <img alt="loader" src= {require('./img/2.gif')}/>
            </div>
            <p className="alert">Update successful</p>
      </div>
    );
  }
}

export default App;
     