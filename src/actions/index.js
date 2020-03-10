import jsonPlaceholder from '../apis/jsonPlaceholder'
export const fetchPosts=()=> async(dispatch)=>{
    const response = await jsonPlaceholder.get('/')
    dispatch({
        type:'FETCH_SONGS',
        payload:response.data.results
    })
}