import React from 'react';
import {connect} from 'react-redux';
import {fetchPostsAndUsers} from '../actions/index'
import UserHeader from './UserHeader';
class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPostsAndUsers()
    }
    renderList(){
        return<div>
            {this.props.posts.map(({userId,title,id,body})=><div key={id}>
                <h3>{title}</h3>
                <span>{body}</span>
                <UserHeader userId={userId}></UserHeader>

            </div>)}
        </div>

    }
    render(){
        return(
            <div>
                {this.renderList()}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        posts:state.posts
    }
}
export default connect(mapStateToProps,{fetchPostsAndUsers})(PostList)