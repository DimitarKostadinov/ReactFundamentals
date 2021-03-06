import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import Details from './../Details'
class Comments extends Component{
    constructor(){
        super()
       
        this.deleteComment=(e)=>{
            fetch('https://baas.kinvey.com/appdata/kid_BkXe2bw_b/comments/'+this.props.props._id,{
                method:'DELETE',
                headers:{
                    Authorization:'Kinvey ' +localStorage.getItem('token')
                }
            }).then(res=>{
                return res.json()
            }).then(deletedComment=>{
                console.log(deletedComment)
            })
            // console.log(this.props.props._id)
           
        }
    }
    render(){
        return(
            <article className="post post-content">
                
                <p>{this.props.props.content}</p>
                <div className="info">
                    submitted by {this.props.props.author} {localStorage.getItem('username')===this.props.props.author? <Link onClick={(e)=>{this.deleteComment(e)}} to={`/catalog` } className="deleteLink">delete</Link>:""}
                </div>
            </article> 
      )
    }
}
  export default Comments         