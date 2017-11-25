import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import dataCollector from './../../utils/dataCollector'
import reqHandler from './../../utils/reqHandler'
import Details from './Details'
class CreateComment extends Component{
    constructor(){
        super()
        this.dataCollector = (e) =>{
            this.setState(dataCollector(e))
        }
        this.createComment= (e) =>{
            e.preventDefault()
            
            reqHandler.createComment(this.state).then(data=>{
               console.log(data)
            })
        }
    }
    componentDidMount(){
        this.setState({
            author:localStorage.getItem('username'),
            postId:this.props.props
        })
    }
    render(){
        return(
            <div className="post post-content">
            <form id="commentForm" onSubmit={(e)=>{this.createComment(e)}}>
                
                <label>Comment</label>
                <textarea onChange={(e)=>{this.dataCollector(e)}} name="content" type="text"></textarea>
                <input type="submit" value="Add Comment" id="btnPostComment"/>
            </form>
        </div>
        )
    }

}
export default CreateComment