import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index'
import UserHeader from './UserHeader';
class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPosts()
    }
    renderList(){
      return <div>{this.props.posts.map(({title,body,id,userId})=><div key={id}>
         <UserHeader userId={userId}></UserHeader>
      <h2>{title}</h2>
      <h5>{body}</h5>
  </div>)}</div>
         
      
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
export default connect(mapStateToProps,{fetchPosts})(PostList)