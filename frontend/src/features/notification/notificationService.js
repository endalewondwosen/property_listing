import axios from "axios";
const apiUrl='http://127.0.0.1:10000'
 
    const allNotifications=async()=>{
        const response=await axios.get(`${apiUrl}/api/notifications`);
        return response.data;
        }
const addNotification=async(propertyData)=>{
    const response=await axios.post(`${apiUrl}/api/add-notification`,propertyData);
    // if(response.data){
    //     localStorage.setItem('user',JSON.stringify(response.data))
    // }
    return response.data;
    }
const notificationService={
    addNotification,
    allNotifications
 
}
export default notificationService;