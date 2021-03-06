import React,{Component} from 'react'
import dataCollector from './../../utils/dataCollector'
import reqHandler from './../../utils/reqHandler'

class Login extends Component{
    constructor(){
        super()
        
        this.dataCollector=(e)=>{
            this.setState(dataCollector(e))
        }
        this.Login=(e)=>{
            e.preventDefault()
            this.setState({loading:true})
           reqHandler.login(this.state).then(response=>{
               this.setState({loading:false})
               console.log(response)
               localStorage.setItem('token',response._kmd.authtoken)
               localStorage.setItem('username',response.username)
               window.location.replace('/')
           })
        }
    }
    

    render(){
        return (
            <form id="loginForm" onSubmit={(e)=>{this.Login(e)}}>
            
            <h2>Sign In</h2>
            <label>Username:</label>
            <input onChange={(e)=>{this.dataCollector(e)}} name="username" type="text"/>
            <label>Password:</label>
            <input onChange={(e)=>{this.dataCollector(e)}} name="password" type="password"/>
            <input id="btnLogin" value="Sign In" type="submit"/>
        </form>
        )
    }
}
export default Login