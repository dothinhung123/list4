import React from 'react';
import { connect } from 'react-redux';
import {fetchUsers} from '../actions/index'

class UserHeader extends React.Component{
    componentDidMount(){
        this.props.fetchUsers()
    }
    renderList(){
       return this.props.users.map(({username,id})=>id===this.props.userId?<div>{username}</div>:''
       )
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
    console.log(state)
return {users:state.users}
}
export default connect(mapStateToProps,{fetchUsers})(UserHeader)