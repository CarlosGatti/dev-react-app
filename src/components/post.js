import React from "react";
import Comments from "./commets"

class Post extends React.Component{
    constructor(props){
        super(props);

        this.state = {
                comments: [{
                    text: ""
                }
            ], 
            newCommentText: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleText = this.handleText.bind(this);
    }

    handleText(e){
        this.setState({newCommentText: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault(); 
        this.setState({
            comments:[
                ...this.state.comments,
                {text: this.state.newCommentText}
            ]
            
        })    
        this.setState({
            newCommentText: ''
        });
    }

    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <form >
                <input type="text" onChange={this.handleText} value={this.state.newCommentText}></input>
                <button onClick={this.handleSubmit}>Comment</button>
                </form>
                {this.state.comments.map((comment, index) => {
                    return <Comments key={index} text={comment.text}></Comments>
                })}    
            </div>
        )
    }
}

export default Post;