import React, { useEffect, useState } from 'react'
import { updateProfile, logedInUser } from '../features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import axios from 'axios';
export const Myprofile = () => {
    const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                // Dispatch the userProfile action to fetch user data
                dispatch(logedInUser());

            } catch (error) {
                // Handle any errors here
                console.error('Error fetching user profile:', error);
            }
        };

        // Call the async function to fetch user data
        fetchUserProfile();
    }, [dispatch]);
    const [newProfile, setProfile] = useState({
        name: '',
        phone: '',
        avator: '',
        about_me: '',
        role:''
    });
    const [changePassword, setChangePassword] = useState({
        newPassword: '',
        oldPassword: '',
        
    });
    const handleOncahnge1 = (event) => {
        setChangePassword(({
            ...changePassword,
            [event.target.name]: event.target.value
        }))
    };
    const handleOncahnge = (event) => {
        setProfile(({
            ...newProfile,
            [event.target.name]: event.target.value
        }))
    };
    const handleFileChange = (event) => {
        setProfile({ ...newProfile, avator: event.target.files[0] });
    };
    const { newPassword, oldPassword } = changePassword;
    async function handlePasswordChange(event) {
        event.preventDefault();
        const userdata = { newPassword, oldPassword }
        const apiUrl = 'http://127.0.0.1:10000'

        const response = await axios.put(`${apiUrl}/api/changePassword`, userdata);
        console.log('user', response.data);
        if (response.data) {
            const userData = localStorage.setItem('user', JSON.stringify(response.data))

            setProfile(userData)
            toast.success("password Updated Successfully!!", {
                style: {
                    // background: "#00ff00" ,
                    color: 'green',
                    fontSize: "18px"

                    // Set the desired background color here
                },
                position: toast.POSITION.TOP_CENTER
            });
        }
    }
    async function handleFormSubmit(event) {
        event.preventDefault();


        const formData = new FormData();
        formData.set('avator', newProfile.avator);
        formData.set('name', newProfile.name);
        formData.set('phone', newProfile.phone);
        formData.set('about_me', newProfile.about_me);
        formData.set('role', newProfile.role);

        // dispatch(updateProfile(formData))
        // console.log(formData);
        const apiUrl = 'http://127.0.0.1:10000'
try {
    const response = await axios.post(`${apiUrl}/api/updateProfile`, formData);
    
        const userData = localStorage.setItem('user', JSON.stringify(response.data))
        setProfile(userData)
        toast.success("profile Updated Successfully!!", {
            style: {
                // background: "#00ff00" ,
                color: 'green',
                fontSize: "18px"

                // Set the desired background color here
            },
            position: toast.POSITION.TOP_CENTER
        });
    
} catch (error) {
    
    toast.error(error.response.data.errMessage, {
        style: {
            color: 'red',
            fontSize: "18px"
        },
        position: toast.POSITION.TOP_CENTER
    });
    
}
        
       
      
    }
    return (
        < >
            <section id="user-profile" className="user-profile">
                <div className="container">
                    <div className="row ">
                        <div className="col-xs-12 col-sm-12 col-md-8">
                            {user &&
                                <form className="mb-0" onSubmit={handleFormSubmit} encType='multipart/form-data'>
                                    <div className="form-box">
                                        <h4 className="form--title">Profile Picture</h4>

                                        <div className="upload--img-area">
                                            <img src={`http://localhost:10000/uploads/${user.user.avator}`} alt="property image" className="img-responsive" />

                                        </div>

                                    </div>
                                    <input onChange={handleFileChange} type="file" className="form-control" name='avator' />

                                    <div className="form-box">
                                        <h4 className="form--title">Personal Details</h4>
                                        <div className="form-group">

                                            <div className="form-group">
                                                <label htmlFor="first-name"> Role</label>
                                                 <div className="text-danger">Select Your Role here</div>
                                                <select className="form-control" name="role" id=""
                                                    onChange={handleOncahnge}
                                                >
                                                    <option  >Select Type</option>

                                                    <option value="agent">Agent</option>
                                                    <option value="owner">Owner</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="first-name"> Name</label>
                                            <p>{user.user.name}</p>
                                            <input onChange={handleOncahnge} type="text" className="form-control" name="name" id="name" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email-address">Email Address</label>
                                            <p>{user.user.email}</p>
                                            <input type="email" className="form-control" name="email" id="email-address" onChange={handleOncahnge} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone-number">Phone</label>
                                            {user.user.phone}
                                            <input onChange={handleOncahnge} type="text" className="form-control" name="phone" id="phone-number" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="about-me">About Me</label>
                                            <textarea onChange={handleOncahnge} className="form-control" name="about_me" id="about-me" rows="2">{user.user.about_me}</textarea>
                                        </div>
                                        <input type="submit" value="Save Edits" name="submit" className="btn btn-success" />

                                    </div>
                                </form>
                            }

                        </div>
                        <div className="col-xs-4 col-sm-12 col-md-4">
                            <form onSubmit={handlePasswordChange} encType='multipart/form-data'>
                                <div className="form-box">
                                    <h4 className="form--title">Change Password</h4>
                                    <div className="form-group">
                                        <label htmlFor="password">old password</label>
                                        <input type="password" className="form-control" name="oldPassword" id="password" onChange={handleOncahnge1} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirm-password">new password</label>
                                        <input type="password" onChange={handleOncahnge1} className="form-control" name="newPassword" id="confirm-password" />
                                    </div>
                                    <input type="submit" value="Change" name="submit" className="btn btn-success" />
                                </div>
                            </form>
                        </div>
                    </div>



                </div>
            </section>


        </ >
    )
}
