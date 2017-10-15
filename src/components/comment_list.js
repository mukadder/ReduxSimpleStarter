
import React from 'react'
import { connect} from 'react-redux'
// connvert this componet into container level component who has access to aplication level state through redux
const CommentList = (props) => {
    const list = props.comments.map(comment => <li key ={comment}>{comment}</li>)
    return (
        <ul className ="comment-list">{list}</ul>
    )
}

function mapStateToProps(state){
    return { comments:state.comments}
}
export default connect(mapStateToProps) (CommentList)