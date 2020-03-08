import React from 'react';
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/index'

import UserHeader from './UserHeader'
class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPosts()
      
    }
    renderList(){
        return this.props.posts.map(({title,id,body})=><div key={id}>
            <h1><UserHeader></UserHeader></h1>
            <h3>{title}</h3>
            <h6>{body}</h6>
        </div>)
    }
    render(){
       
        return(
            <div>
                {this.renderList()}

            </div>
        )
    }
}
const mapStateToProps =(state)=>{
   
    return {
        posts:state.posts
    }
}
export default connect(mapStateToProps,{fetchPosts})(PostList)