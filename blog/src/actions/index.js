import jsonPlaceholder from  '../apis/jsonPlaceholder';


// Bad approach!
// export const fetchPosts = async  () => {
//     const response = await jsonPlaceholder.get('/posts');
//     return {
//         type: 'FETCH_POSTS',
//         payload: response
//     };
// };

export const fetchPosts =  () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response })
    };

//EXAMPLE
// export const selectPost = () => {
//     return {
//         type: 'SELECT_POST'
//     }
// };