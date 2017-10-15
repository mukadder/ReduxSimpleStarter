import React , {Component} from 'react'

export default class CommentBox extends Component  {
    constructor(props){
    super(props)
    this.state = { comment:''}
}
    onHandleChange(event){
this.setState({comment:event.target.value })
    }
    handlesubmit(event) {
        event.preventDefault()
        this.setState({comment:''})
    }
    render () {
        return ( 
        <form onSubmit = {this.handlesubmit.bind(this)}className ="comment-box">
            <textarea  value ={this.state.comment}
            onChange = {this.onHandleChange.bind(this)}/>
            <button>Submit comment </button>
            </form>)
    }


}