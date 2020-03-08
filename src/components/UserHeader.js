import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/index'
class UserHeader extends React.Component{
    componentDidMount(){
        this.props.fetchUsers()
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}
const mapStateToProps=(state)=>{
return {
    users:state.users
}
}
export default connect(mapStateToProps,{fetchUsers})(UserHeader)