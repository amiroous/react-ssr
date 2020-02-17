import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const FETCH_ADMINS = 'fetch_admins';
export const IS_LOGGED_IN = 'is_logged_in';


const fetchUsers = () => async (dispatch) => {
    const results = await axios.get('https://react-ssr-api.herokuapp.com/users');
    dispatch({
       type: FETCH_USERS,
       payload: results
    });
};

export { fetchUsers };