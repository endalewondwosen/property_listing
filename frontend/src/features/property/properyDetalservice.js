import axios from "axios";
const apiUrl='http://127.0.0.1:10000'
 
const singleproperty=async(id)=>{

    // const { data } = await axios.get(`${API_BASE_URL}/api/v1/products?keyword=${keyword}&page=${currentPage}`)
    const response= await axios.get(`${apiUrl}/api/property/${id}`)

    // const response=await axios.get(`${apiUrl}/api/all-properties?keyword=${keyword}&page=${currentPage}`);
     
    return response.data;
    }
  
    const PropertyDetailService={
        singleproperty
     
    }
    export default PropertyDetailService;