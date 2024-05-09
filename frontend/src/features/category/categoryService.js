import axios from "axios";
const apiUrl='http://127.0.0.1:10000'
const allCategories=async()=>{
const response=await axios.get(`${apiUrl}/api/all-categories`);
 
return response.data;
}
const addCategory=async(categoryData)=>{
    const response=await axios.post(`${apiUrl}/api/add-category`,categoryData);
    // if(response.data){
    //     localStorage.setItem('user',JSON.stringify(response.data))
    // }
    return response.data;
    }
const CategoryService={
    addCategory,allCategories
 
}
export default CategoryService;