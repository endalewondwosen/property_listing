import axios from "axios";
const apiUrl='http://127.0.0.1:10000'
const featuredproperties=async()=>{
const response=await axios.get(`${apiUrl}/api/featured-properties`);
 
return response.data;
}
const singleproperty=async(id)=>{

    // const { data } = await axios.get(`${API_BASE_URL}/api/v1/products?keyword=${keyword}&page=${currentPage}`)
    const response= await axios.get(`${apiUrl}/api/property/${id}`)

    // const response=await axios.get(`${apiUrl}/api/all-properties?keyword=${keyword}&page=${currentPage}`);
     
    return response.data;
    }
    const myProperties=async(id)=>{

        // const { data } = await axios.get(`${API_BASE_URL}/api/v1/products?keyword=${keyword}&page=${currentPage}`)
        const response= await axios.get(`${apiUrl}/api/my-properties/${id}`)
    
        // const response=await axios.get(`${apiUrl}/api/all-properties?keyword=${keyword}&page=${currentPage}`);
        return response.data;
        }
    const allproperties=async()=>{

        // const { data } = await axios.get(`${API_BASE_URL}/api/v1/products?keyword=${keyword}&page=${currentPage}`)
        // const response= await axios.get(`${apiUrl}/api/property/`)
    
        const response=await axios.get(`${apiUrl}/api/all-properties`);
         
        return response.data;
        }
        const addReview=async(review)=>{

            // const { data } = await axios.get(`${API_BASE_URL}/api/v1/products?keyword=${keyword}&page=${currentPage}`)
            const response= await axios.put(`${apiUrl}/api/add-review`,review)
        
            // const response=await axios.get(`${apiUrl}/api/all-properties?keyword=${keyword}&page=${currentPage}`);
             
            return response.data;
            }
const addProperty=async(propertyData)=>{
    const response=await axios.post(`${apiUrl}/api/add-property`,propertyData);
    // if(response.data){
    //     localStorage.setItem('user',JSON.stringify(response.data))
    // }
    return response.data;
    }
const PropertyService={
    addProperty,
    featuredproperties,
    singleproperty,
    allproperties,
    myProperties,addReview
 
}
export default PropertyService;