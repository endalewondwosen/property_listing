import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { addProperty, reset } from '../features/property/propertySlice';

export const AddProperty = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { properties, isLoading, isError, isSuccess, message } = useSelector(state => state.properties)
    useEffect(() => {

        if (isSuccess) {
            toast.success(message, {
                style: {
                    // background: "#00ff00" ,
                    color: 'green',
                    fontSize: "18px"

                    // Set the desired background color here
                },
                position: toast.POSITION.TOP_CENTER
            });



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

    }, [properties, isError, isSuccess, message, dispatch])
    const [categories, setCategories] = useState(
        [
            'appartment',
            'house',
            'villa',
            'office'
        ]
    )
    const [newProperty, setProperty] = useState({
        name: '',
        body: '',
        image: '',
        baths: '',
        area: '',
        category: '',
        status: '',
        location: '',
        beds: '',
        price: '',
        address: '',
        city: '',
        vedioUrl: '',
        type: ''
    })


    const handleOncahnge = (event) => {
        setProperty(({
            ...newProperty,
            [event.target.name]: event.target.value
        }))
    };
    const handleFileChange = (event) => {
        setProperty({ ...newProperty, image: event.target.files[0] });
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        const user = localStorage.getItem("user")
        const userData = JSON.parse(user)
        if (userData.user.role == 'agent' || userData.user.role == 'owner') {
            const formData = new FormData();
            formData.append('image', newProperty.image);
            formData.append('name', newProperty.name);
            formData.append('body', newProperty.body);
            formData.append('category', newProperty.category);
            formData.append('baths', newProperty.baths);
            formData.append('beds', newProperty.beds);
            formData.append('location', newProperty.location);
            formData.append('city', newProperty.city);
            formData.append('address', newProperty.address);
            formData.append('area', newProperty.area);
            formData.append('price', newProperty.price);
            formData.append('vedioUrl', newProperty.vedioUrl);
            formData.append('status', newProperty.status);
            formData.append('type', newProperty.type);

            dispatch(addProperty(formData))
        }
        else {
            toast.error('first complete your profile please!!', {
                style: {
                    // background: "#00ff00" ,
                    color: 'red',
                    fontSize: "18px"

                    // Set the desired background color here
                },
                position: toast.POSITION.TOP_CENTER
            });
            navigate('/myProfile')
        }
    }
    return (
        < >

            <section id="add-property" className="add-property">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">

                            <form className="mb-0" onSubmit={handleFormSubmit} encType='multipart/form-data'>
                                <div className="form-box">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <h4 className="form--title">Property Details</h4>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="property-title">Property Name*</label>
                                                <input onChange={handleOncahnge} type="text" className="form-control" name="name" id="property-title" required />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="property-description">Property Description*</label>
                                                <textarea onChange={handleOncahnge} className="form-control" name="body" id="property-description" rows="2"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="property-description">Property Description*</label>
                                                <input onChange={handleFileChange} type="file" className="form-control" name='image' multiple />

                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="select-type">Category</label>
                                                <div className="select--box">
                                                    <i className="fa fa-angle-down"></i>
                                                    <select id="select-type" name='category' onChange={handleOncahnge}>
                                                        {categories.map(category => (
                                                            <option key={category} value={category}>{category}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="select-type">Type</label>
                                                <div className="select--box">
                                                    <i className="fa fa-angle-down"></i>
                                                    <select id="select-type" name='type' onChange={handleOncahnge}>
                                                        <option value='house'>house</option>
                                                        <option value='apartment'>appartment</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="select-status">Status</label>
                                                <div className="select--box">
                                                    <i className="fa fa-angle-down"></i>
                                                    <select id="select-status" name='status' onChange={handleOncahnge}>
                                                        <option value="for sale">Sale</option>
                                                        <option value="for rent">Rent</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="location">Location</label>
                                                <input type="text" onChange={handleOncahnge} className="form-control" name="location" id="location" />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="Bedrooms">Bedrooms</label>
                                                <input type="number" onChange={handleOncahnge} className="form-control" name="beds" id="Bedrooms" />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="Bathrooms">Bathrooms</label>
                                                <input type="number" onChange={handleOncahnge} className="form-control" name="baths" id="Bathrooms" />
                                            </div>
                                        </div>


                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="Area">Area</label>
                                                <input type="number" onChange={handleOncahnge} className="form-control" name="area" id="Area" placeholder="sq ft" />
                                            </div>
                                        </div>

                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="Sale-Rent-Price">Sale or Rent Price*</label>
                                                <input type="text" onChange={handleOncahnge} className="form-control" name="price" id="Sale-Rent-Price" required />
                                            </div>
                                        </div>


                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="Video-URL">Video URL(optional)</label>
                                                <input type="text" onChange={handleOncahnge} className="form-control" name="vedioUrl" id="Video-URL" placeholder="Youtube, Vimeo, Dailymotion, etc.." />
                                            </div>
                                        </div>
                                    </div>
                                </div>




                                <div className="form-box">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <h4 className="form--title">Property Location</h4>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="address">Address*</label>
                                                <input type="text" onChange={handleOncahnge} className="form-control" name="address" id="address" placeholder="Enter your property address" required />
                                            </div>
                                        </div>

                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="city">City</label>
                                                <input onChange={handleOncahnge} className="form-control" name="city" id="city" />
                                            </div>
                                        </div>



                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 col-md-4">
                                    <div className="form-group">
                                        <input className="btn btn-success" type='submit' value="Add" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </ >
    )
}
