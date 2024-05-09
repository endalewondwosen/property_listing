import axios from "axios";
const apiUrl = 'http://127.0.0.1:10000'
const login = async (userData) => {
    const response = await axios.post(`${apiUrl}/api/login`, userData);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data;
}
const register = async (userData) => {
    const response = await axios.post(`${apiUrl}/api/register`, userData);
    // if(response.data){
    //     localStorage.setItem('user',JSON.stringify(response.data))
    // }
    return response.data;
}
const logedInUser = () => {
    const user = localStorage.getItem('user')
    const userdata=JSON.parse(user)
    return userdata;
}
const updateProfile = async (userData) => {
    const response = await axios.post(`${apiUrl}/api/updateProfile`,userData);
    // console.log(userData);
    return response.user;
}
const logout = async () => {
    const response = await axios.get(`${apiUrl}/api/logout`);
    const user = localStorage.removeItem('user');
    return user;
}
const AuthService = {
    login,
    register,
    logedInUser,
    logout,
    updateProfile
}
export default AuthService;