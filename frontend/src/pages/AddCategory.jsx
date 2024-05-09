import React,{useEffect, useState} from 'react'
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch, useStore } from 'react-redux';
import { addCategory,reset } from '../features/category/CategorySlice';
export const AddCategory = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {categories,isLoading,isError,isSuccess,message}=useSelector(state=>state.categories)
  useEffect(()=>{
    if(isSuccess){
      toast.success(message,{
              style: {
                // background: "#00ff00" ,
                color:'green',
                fontSize:"18px"
                // Set the desired background color here
              },
              position: toast.POSITION.TOP_CENTER
            });
             
             
          }
          
if(isError){
  toast.error(message,{
          style: {
            // background: "#00ff00" ,
            color:'red',
            fontSize:"18px"
            
            // Set the desired background color here
          },
          position: toast.POSITION.TOP_CENTER
        });
}
      dispatch(reset())
  },[categories,isError,isSuccess,message, dispatch])
const [NewCategory,setCategory]=useState({
  name:'',
  body:'',
  image:''
})
  
const handleOncahnge = (event) => {
  setCategory(({
    ...NewCategory,
    [event.target.name]:event.target.value
  }))
};
const handleFileChange = (event) => {
  setCategory({...NewCategory,image:event.target.files[0]});
};
  console.log(NewCategory.image);
function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData();
  formData.append('image', NewCategory.image);
  formData.append('name', NewCategory.name);
  formData.append('body', NewCategory.body);
   
 
  dispatch(addCategory(formData))

}

  return (
    <div className='container mt-5'>
      <div className="row justify-content-center">
        <div className="col-6">
      <div className="card">
        <div className="card-titl">

      <h1 className='text-center'>Add Category</h1>
        </div>
        <div className="card-body">
<form onSubmit={handleFormSubmit} encType='multipart/form-data'>
 
              <div className="form-group">
                <label htmlFor="Email">name</label>
                <input name='name' type="text" className="form-control" placeholder='name' onChange={handleOncahnge} value={NewCategory.name}/>
              </div>
              <div className="form-group">
                <label htmlFor="Email">body</label>
                <input name='body' onChange={handleOncahnge} type="text" className="form-control" placeholder='body' value={NewCategory.body}/>
              </div><br />
              <div className="form-group">
                <label htmlFor="Email">body</label>
                <input name='image' onChange={handleFileChange} accept='.png, .jpg, .jpeg' type="file" className="form-control" placeholder='body' />
              </div><br />
              <div className="form-group">
  
                <input  type="submit" className="btn btn-primary  btn-block" placeholder='password' />
              </div>
</form>
        </div>
      </div>
        </div>
      </div>
     </div>
  )
}
