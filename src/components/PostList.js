import React from 'react';
import {connect} from 'react-redux'
import {fetchPosts }from '../actions'
class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPosts()
    }
    render(){
        console.log(this.props)
        return(
            <div>

            </div>
        )
    }
}
const mapStateToProps=(state)=>{
console.log(state)
}
export default connect(mapStateToProps,{fetchPosts})(PostList)