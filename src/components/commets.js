import React, {useState} from "react";


class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments : [
                {text: ""}
            ]
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleText = this.handleText.bind(this);
    }

    handleText(e){
        this.setState({
            comments: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
    }

    render(){
        return(
            <div>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default Comments;