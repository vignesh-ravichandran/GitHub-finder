import React, { Fragment } from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar.js'
import User from './Components/Users/User.js'
import Home from './Components/Pages/Home'
import Notfound from './Components/Pages/Notfound'
import Alert from './Components/Layout/Alert.js'
import About from './Components/Pages/About'
import Githubstate from './Context/github/GithubState'
import Alertstate from './Context/alert/AlertState'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


const App =()=> {


 
 
 
 


 

// async componentDidMount(){

//   this.setState({loading:true});
//   const res=await  axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
//   this.setState({users:res.data, loading:false});
//  }






  
  return (
    <Githubstate>
      <Alertstate>
    <Router>
    <div className="App">
     
      <Navbar />
      <div className="container">
        <Alert />
        <Switch>
         <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About}/>
        <Route exat path='/user/:login' component={User}/>
        <Route component={Notfound}/>
        </Switch>

       
      </div>
      
    </div>
    </Router></Alertstate> </Githubstate>);


 
}

export default App;
