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
      story: false
    }
  }
  componentDidMount() {
    
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
            <div>
              <img classList="logo" alt="" src={require('./img/images.jpg')} />
            </div>
            <NavBar onPageChange={this.onPageChange}/>
        </div>
      { this.state.page === 'home'
          ? <div>
              <HomePage person={this.state.person} more={this.more} contact={this.contact}/>
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
     