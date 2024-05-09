import React, { useEffect } from 'react'
import { featuredproperties, reset } from '../features/property/propertySlice';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { Link,useNavigate} from 'react-router-dom';

// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// const MySwal = withReactContent(Swal)
export const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { properties, isLoading, isError, isSuccess, message } = useSelector(state => state.properties)
    useEffect(() => {

        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //       Swal.fire(
        //         'Deleted!',
        //         'Your file has been deleted.',
        //         'success'
        //       )
        //     }
        //   })
        dispatch(featuredproperties())
        dispatch(reset())
    }, [dispatch])
    const filterHandller=()=>{

    }
    return (
        <>
            {/* <Search /> */}
            <section id="heroSearch" className="hero-search mtop-100 pt-0 pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <div className="slider--content">
                            <div className="text-center">
                                <h1>Filter Your Favorite Property</h1>
                            </div>
                            <form className="mb-0" onSubmit={filterHandller}>
                                <div className="form-box search-properties">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="form-group">
                                                <div className="select--box">
                                                    <i className="fa fa-angle-down"></i>
                                                    <select name="select-location" id="select-location">
                                        <option >Any Location</option>
                                        {properties && properties.map(property=>(
                                        <option key={property._id} value={property.location}>{property.location}</option>
                                        ))}
                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-group">
                                                <div className="select--box">
                                                    <i className="fa fa-angle-down"></i>
                                                    <select name="select-type" id="select-type">
                                        <option>Any Type</option>
                                        {properties && properties.map(property=>{
                                        <option key={property._id} value={property.type}>{property.type}</option>
                                            
                                        })}
                                        <option>Apartment</option>
                                         
                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                                <input type="submit" className='btn btn-success' name="" id="" value="search" />
                                            </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel slider-navs" data-slide="1" data-slide-rs="1" data-autoplay="true" data-nav="true" data-dots="false" data-space="0" data-loop="true" data-speed="800">
                
                <div className="slide--item bg-overlay bg-overlay-dark3">
                    <div className="bg-section">
                        <img src="/images/slider/slide-bg/3.jpg" alt="background" />
                    </div>
                </div>
 
                <div className="slide--item bg-overlay bg-overlay-dark3">
                    <div className="bg-section">
                        <img src="/images/slider/slide-bg/1.jpg" alt="background" />
                    </div>
                </div>
               
                <div className="slide--item bg-overlay bg-overlay-dark3">
                    <div className="bg-section">
                        <img src="/images/slider/slide-bg/3.jpg" alt="background" />
                    </div>
                </div>
            </div>
        </section>
            <div className="row mt-5">
                <div className="col-xs-12 col-sm-12 col-md-12 mt-5">
                    <div className="heading heading-2 text-center mb-70 ">
                        <h2 className="heading--title ">Featured Properties</h2>
                        {/* <p className="heading--desc">Duis aute irure dolor in reprehed in volupted velit esse dolore</p> */}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {isSuccess && properties.map(property => (
                        <div key={property._id} className="col-xs-6 col-lg-6 col-sm-12 col-md-6">
                            <div className="property-item">
                                <div className="property--img">
                                    <Link to={`propertyDetail/${property._id}`}>
                                        <img src={`http://localhost:10000/uploads/${property.image}`} alt="property image" className="img-responsive" />
                                        <span className="property--status">{property.status}</span>
                                    </Link>
                                </div>
                                <div className="property--content">
                                    <div className="property--info">
                                        <h5 className="property--title"><a href="#">{property.name}</a></h5>
                                        <p className="property--location">{property.location} ,{property.city}</p>
                                        <p className="property--price">{property.price} Birr</p>
                                    </div>
                                    <div className="property--features">
                                        <ul className="list-unstyled mb-0">
                                            <li><span className="feature">Beds:</span><span className="feature-num">{property.beds}</span></li>
                                            <li><span className="feature">Baths:</span><span className="feature-num">{property.baths}</span></li>
                                            <li><span className="feature">Area:</span><span className="feature-num">{property.area} sqm</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
                {/* </div> */}
            </div>

            {/* </section> */}

            < section id="feature" className="feature feature-1 text-center bg-white pb-90" >
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="heading heading-2 text-center mb-70">
                                <h2 className="heading--title">Simple Steps</h2>
                                <p className="heading--desc">Duis aute irure dolor in reprehed in volupted velit esse dolore</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <div className="feature-panel">
                                <div className="feature--icon">
                                    <img src="/images/features/icons/5.png" alt="icon img" />
                                </div>
                                <div className="feature--content">
                                    <h3>Search For Real Estates</h3>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eule pariate.</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <div className="feature-panel">
                                <div className="feature--icon">
                                    <img src="/images/features/icons/6.png" alt="icon img" />
                                </div>
                                <div className="feature--content">
                                    <h3>Select Your Favorite</h3>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eule pariate.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <div className="feature-panel">
                                <div className="feature--icon">
                                    <img src="/images/features/icons/7.png" alt="icon img" />
                                </div>
                                <div className="feature--content">
                                    <h3>Take Your Key</h3>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eule pariate.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section id="city-property" className="city-property text-center pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="heading heading-2 text-center mb-70">
                                <h2 className="heading--title">Property By City</h2>
                                <p className="heading--desc">Duis aute irure dolor in reprehed in volupted velit esse dolore</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-8 col-md-8">
                            <div className="property-city-item">
                                <div className="property--city-img">
                                    <a href="#">
                                        <img src="/images/properties/city/1.jpg" alt="city" className="img-responsive" />
                                        <div className="property--city-overlay">
                                            <div className="property--item-content">
                                                <h5 className="property--title">New York</h5>
                                                <p className="property--numbers">16 Properties</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <div className="property-city-item">
                                <div className="property--city-img">
                                    <a href="#">
                                        <img src="/images/properties/city/2.jpg" alt="city" className="img-responsive" />
                                        <div className="property--city-overlay">
                                            <div className="property--item-content">
                                                <h5 className="property--title">Chicago</h5>
                                                <p className="property--numbers">14 Properties</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <div className="property-city-item">
                                <div className="property--city-img">
                                    <a href="#">
                                        <img src="/images/properties/city/3.jpg" alt="city" className="img-responsive" />
                                        <div className="property--city-overlay">
                                            <div className="property--item-content">
                                                <h5 className="property--title">Manhatten</h5>
                                                <p className="property--numbers">18 Properties</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-8 col-md-8">
                            <div className="property-city-item">
                                <div className="property--city-img">
                                    <a href="#">
                                        <img src="/images/properties/city/4.jpg" alt="city" className="img-responsive" />
                                        <div className="property--city-overlay">
                                            <div className="property--item-content">
                                                <h5 className="property--title">Los Angeles</h5>
                                                <p className="property--numbers">10 Properties</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="agents" className="agents bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="heading heading-2 text-center mb-70">
                                <h2 className="heading--title">Trusted Agents</h2>
                                <p className="heading--desc">Duis aute irure dolor in reprehed in volupted velit esse dolore</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <div className="agent">
                                <div className="agent--img">
                                    <img src="/images/agents/grid/1.png" alt="agent" />
                                    <div className="agent--details">
                                        <p>Lorem ipsum dolor sit amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.</p>
                                        <div className="agent--social-links">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-dribbble"></i></a>
                                            <a href="#"><i className="fa fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="agent--info">
                                    <h5 className="agent--title">Steve Martin</h5>
                                    <h6 className="agent--position">Buying Agent</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <div className="agent">
                                <div className="agent--img">
                                    <img src="/images/agents/grid/2.png" alt="agent" />
                                    <div className="agent--details">
                                        <p>Lorem ipsum dolor sit amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.</p>
                                        <div className="agent--social-links">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-dribbble"></i></a>
                                            <a href="#"><i className="fa fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="agent--info">
                                    <h5 className="agent--title">Mark Smith</h5>
                                    <h6 className="agent--position">Selling Agent</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <div className="agent">
                                <div className="agent--img">
                                    <img src="/images/agents/grid/3.png" alt="agent" />
                                    <div className="agent--details">
                                        <p>Lorem ipsum dolor sit amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.</p>
                                        <div className="agent--social-links">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-dribbble"></i></a>
                                            <a href="#"><i className="fa fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="agent--info">
                                    <h5 className="agent--title">Ryan Printz</h5>
                                    <h6 className="agent--position">Real Estate Broker</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="cta" className="cta cta-1 text-center bg-overlay bg-overlay-dark pt-90">
                <div className="bg-section"><img src="/images/cta/bg-1.jpg" alt="Background" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                            <h3>Join our professional team & agents to start selling your house</h3>
                            <a href="#" className="btn btn--primary">Contact</a>
                        </div>
                    </div>
                </div>

            </section>


        </>
    )
}
