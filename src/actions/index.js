import api from '../apis/api'
export const fetchPosts =()=>async (dispatch)=>{
    const response = await api.get('posts')
    dispatch({
        type:'FETCH_POSTS',
        payload:response.data
    })
}
export const fetchUsers=(userId)=>async(dispatch,getState)=>{
    const response = await api.get('users')
    console.log(getState().posts)
    dispatch({
        type:'FETCH_USERS',
        payload:response.data
    })
}