import React, { useEffect } from 'react'
import { allCategories,reset } from '../features/category/CategorySlice'
import { useSelector,useDispatch, useStore } from 'react-redux';
export const AllCategory = () => {
    const dispatch=useDispatch()
    const {categories,isLoading,isError,isSuccess,message}=useSelector(state=>state.categories)
    useEffect(()=>{
       dispatch(allCategories())
          dispatch(reset())
      },[dispatch])
  return (
    <div>All Category
        <div className="container">
            <div className="row justify-content-center">
                    {isSuccess && categories.map(category=>(
                            <div key={category._id} className="col-md-6 col-sm-12 col-xs-12 col-lg-3">
                            <h2>{category.name}</h2>
                              < img style={{height:"300px",objectFit:"cover"}} src={`http://localhost:10000/uploads/${category.image}`} alt='no' />
                            <h4>{category.body}</h4>
                         </div>
                        )
                        )
                    }
            </div>
        </div>
    </div>
  )
}
