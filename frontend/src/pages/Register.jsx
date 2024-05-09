import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { register, reset } from '../features/auth/authSlice';
export const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)
    useEffect(() => {
        if (isSuccess) {
            toast.success('you have registered  successfully!!', {
                style: {
                    // background: "#00ff00" ,
                    color: 'green',
                    fontSize: "18px"

                    // Set the desired background color here
                },
                position: toast.POSITION.TOP_CENTER
            });
            navigate('/login')
        }
        if (isError) {
            toast.error(message, {
                style: {
                    // background: "#00ff00" ,
                    color: 'red',
                    fontSize: "18px"

                    // Set the desired background color here
                },
                position: toast.POSITION.TOP_CENTER
            });
        }
        dispatch(reset())
    }, [user, isError, isSuccess, message, dispatch])
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const { name, email, password } = userData;

    const handleOncahnge = (event) => {
        setUserData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        const userdata = { name, email, password }
        dispatch(register(userdata))
    }

    if(isLoading){
       return(
        <>
        <div className="text-center mt-5"><h1>
        Loading</h1></div>
        </>
       ) 
    }
    return (
        <div className='container mt-5'>
            <div className="row justify-content-center">
                <div className="col-6">

                    <div className="card mt-5">
                        <div className="card-titl">

                            <h1 className='text-center'>Register</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleFormSubmit}>
                                {isError && (
                                    <div className="alert alert-danger" role="alert">
                                        {message}
                                    </div>
                                )}
                                <div className="form-group">
                                    <label htmlFor="text">Name</label>
                                    <input name='name' type="text" className="form-control" placeholder='Name' onChange={handleOncahnge} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Email">Email</label>
                                    <input name='email' type="text" className="form-control" placeholder='Email' onChange={handleOncahnge} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Email">password</label>
                                    <input name='password' onChange={handleOncahnge} type="password" className="form-control" placeholder='Password' />
                                </div><br />
                                <div className="form-group">

                                    <input type="submit" className="btn btn-primary  btn-block" placeholder='password' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
