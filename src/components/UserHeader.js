import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/index'
class UserHeader extends React.Component{
    componentDidMount(){
        this.props.fetchUser(this.props.userId)
    }
    renderList(){
       const {users} = this.props
       if(!users){
           return null
       }
       return <div>{users.name}</div>
    }
    render(){
        return(
            <div>
                {this.renderList()}

            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return {
        users:state.users.find(({id})=> id===ownProps.userId)
    }
    
}
export default connect(mapStateToProps,{fetchUser})(UserHeader)