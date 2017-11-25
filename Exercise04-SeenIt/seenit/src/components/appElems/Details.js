import React,{Component} from 'react'
import Comments from './partials/Comments'
import CreateComment from './CreateComment'
class Details extends Component{
    constructor(){
        super()
        this.state={
            currentPost:{},
            comments:[]
        }
      
    }
    componentDidMount(){
        fetch('https://baas.kinvey.com/appdata/kid_BkXe2bw_b/posts/'+this.props.match.params.id,{
            method:'GET',
            headers:{
                Authorization:'Kinvey ' +localStorage.getItem('token')
            }
        }).then(res=>{
            return res.json()
        }).then(parsedData=>{
            this.setState({currentPost:parsedData})
            fetch(`https://baas.kinvey.com/appdata/kid_BkXe2bw_b/comments?query={"postId":"${this.state.currentPost._id}"}&sort={"_kmd.ect": -1}`,{
                method:'GET',
                headers:{
                    Authorization:'Kinvey ' +localStorage.getItem('token')
                }
            }).then(commentsRes=>{
                return commentsRes.json()
            }).then(parsedComments=>{
                this.setState({comments:parsedComments})
                //  console.log(comments)
            
            })
             
        })

       
    }

    render(){
        return(
            <section id="viewComments">
            <div className="post">
                <div className="col thumbnail">
                    <a href={this.state.currentPost.url}>
                        <img src={this.state.currentPost.imageUrl}/>
                    </a>
                </div>
                <div className="post-content">
                    <div className="title">
                        <a href={this.state.currentPost.url}>
                        {this.state.currentPost.title}
                        </a>
                    </div>
                    <div className="details">
                        <p>{this.state.currentPost.description}</p>
                        <div className="info">
                            submitted  by {this.state.currentPost.author}
                        </div>
                        <div className="controls">
                            <ul>
                            {localStorage.getItem('username')===this.state.currentPost.author? <li className="action"><a className="editLink" href="#">edit</a></li>:""}
                            {localStorage.getItem('username')===this.state.currentPost.author? <li className="action"><a className="deleteLink" href="#">delete</a></li>:""}
                                
                                
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="clear"></div>
            </div>
            <CreateComment props={this.props.match.params.id}/>
            {this.state.comments.map(comments=>{
                return <Comments key={comments._id} props={comments}/>
                    })}    
        </section>
        )
    }
}
export default Details