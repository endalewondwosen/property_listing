import React,{useEffect, useState} from 'react'
import { useDispatch,useSelector, } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { addNotification } from '../features/notification/notificationSlice';
import { singleproperty,reset } from '../features/property/propertyDetailslice'
import { allNotifications } from '../features/notification/notificationSlice';
import { addReview } from '../features/property/propertySlice';

export const PropertyDetails = () => {
    const dispatch = useDispatch()
    const {id}=useParams()
    
    const { propertyDetail, isLoading, isError, isSuccess } = useSelector(state => state.propertyDetal)
    const { notifications, isSent } = useSelector(state => state.notifications)
      
const [notification,setNotification]=useState(
    {
    name:'',
    email:'',
    phone:'',
    message:'',
    property_id:id,
    user_id:''
}
);
const { name,email,phone,message,property_id} = notification;
const [reviews,setReviews]=useState({
      ratings:'',
      comment:'',
      propertyId:id
})
const { ratings,comment,propertyId} = reviews;


useEffect(()=>{
dispatch(singleproperty(id))
dispatch(allNotifications())
dispatch(reset)
},[dispatch,id])
const handleReviewChange=(event)=>{
    setReviews(({
        ...reviews,
        [event.target.name]: event.target.value
    }))
}
const handleOncahnge = (event) => {
    setNotification(({
        ...notification,
        [event.target.name]: event.target.value
    }))
};
async function handleReviewSubmit(event){
    event.preventDefault();
    const reviewdata = { ratings, comment,propertyId }
    dispatch(addReview(reviewdata))
}
    async function handleFormSubmit(event) {
    event.preventDefault();
    let user_id=propertyDetail.property.user_id._id
    const userdata = { name, email,phone,message,property_id,user_id }
    // const apiUrl='http://127.0.0.1:10000'
    // const response=await axios.get(`${apiUrl}/api/notifications`,userdata);
    dispatch(addNotification(userdata))
   if(isSent){
    toast.success('you have Sent  successfully!!', {
        style: {
            // background: "#00ff00" ,
            color: 'green',
            fontSize: "18px"

            // Set the desired background color here
        },
        position: toast.POSITION.TOP_CENTER
    });
   }
   else{
    toast.error("Please fill the fields", {
        style: {
            // background: "#00ff00" ,
            color: 'red',
            fontSize: "18px"

            // Set the desired background color here
        },
        position: toast.POSITION.TOP_CENTER
    });
   }
}
  return (
  <>
<section id="property-single-gallery" className="property-single-gallery">
    {propertyDetail &&
    <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="property-single-gallery-info">
                    <div className="property--info clearfix">
                        <div className="pull-left">
                            <h5 className="property--title">{propertyDetail.property.city}</h5>
                            <p className="property--location"><i className="fa fa-map-marker"></i>{propertyDetail.property.location}</p>
                        </div>
                        <div className="pull-right">
                            <span className="property--status">{propertyDetail.property.status}</span>
                            <p className="property--price">{propertyDetail.property.price} Birr</p>
                        </div>
                    </div>
                    <div className="property--meta clearfix">
                        <div className="pull-left">
                            <ul className="list-unstyled list-inline mb-0">
                                <li>
                                    Property ID:<span className="value">{propertyDetail.property._id}</span>
                                </li>
                                <li>
                                    Add to favorites:<span className="value"> <FaHeart className='text-danger ' style={{fontSize:"20px"}} /></span>
                                </li>
                            </ul>
                        </div>
                        <div className="pull-right">
                            <div className="property--meta-share">
                                <span className="share--title">share</span>
                                <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                                <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                                <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                                <a href="#" className="pinterest"><i className="fa fa-pinterest-p"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8">
                <div className="property-single-carousel inner-box">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="heading">
                                <h2 className="heading--title">Photo</h2>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="property-single-carousel-content">
                                <div className="carousel carousel-thumbs slider-navs" data-slide="1" data-slide-res="1" data-autoplay="true" data-thumbs="true" data-nav="true" data-dots="false" data-space="30" data-loop="true" data-speed="800" data-slider-id="1">
                                    {/* <img src="/images/properties/slider/1.jpg" alt="Property Image" /> */}
                                    <img src={`http://localhost:10000/uploads/${propertyDetail.property.image}`} className="img-responsive" alt="Property Imag"  />
 
                                </div>
                             
                            </div>
                        </div>
                    </div>
                </div>
                <div className="property-single-desc inner-box">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="heading">
                                <h2 className="heading--title">Description</h2>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-4">
                            <div className="feature-panel">
                                <div className="feature--img">

                                    <img src="/images/property-single/features/1.png" alt="icon" />

                                </div>
                                <div className="feature--content">
                                    <h5>Area:</h5>
                                    <p>{propertyDetail.property.area} sq ft</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-4">
                            <div className="feature-panel">
                                <div className="feature--img">
                                    <img src="/images/property-single/features/2.png" alt="icon" />
                                </div>
                                <div className="feature--content">
                                    <h5>Beds:</h5>
                                    <p>{propertyDetail.property.beds} Bedrooms</p>
                                </div>
                            </div>
                        </div>
  
                        <div className="col-xs-6 col-sm-4 col-md-4">
                            <div className="feature-panel">
                                <div className="feature--img">
                                    <img src="/images/property-single/features/3.png" alt="icon" />
                                </div>
                                <div className="feature--content">
                                    <h5>Baths:</h5>
                                    <p>{propertyDetail.property.baths} Bathrooms</p>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="property--details">
                                <p>{propertyDetail.property.body}.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="property-single-features inner-box">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="heading">
                                <h2 className="heading--title">Features</h2>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-4">
                            <div className="feature-item">
                                <p>Center Cooling</p>
                            </div>
                        </div>
                         
                        <div className="col-xs-6 col-sm-4 col-md-4">
                            <div className="feature-item">
                                <p>Balcony</p>
                            </div>
                        </div>
                        
                        <div className="col-xs-6 col-sm-4 col-md-4">
                            <div className="feature-item">
                                <p>Pet Friendly</p>
                            </div>
                        </div>
                         
                        <div className="col-xs-6 col-sm-4 col-md-4">
                            <div className="feature-item">
                                <p>Fire Alarm</p>
                            </div>
                        </div>
                        
                        <div className="col-xs-6 col-sm-4 col-md-4">
                            <div className="feature-item">
                                <p>Modern Kitchen</p>
                            </div>
                        </div>
                       
                        <div className="col-xs-6 col-sm-4 col-md-4">
                            <div className="feature-item">
                                <p>Storage</p>
                            </div>
                        </div>
                        
                        <div className="col-xs-6 col-sm-4 col-md-4">
                            <div className="feature-item">
                                <p>Heating</p>
                            </div>
                        </div>
                        
                        <div className="col-xs-6 col-sm-4 col-md-4">
                            <div className="feature-item">
                                <p>Pool</p>
                            </div>
                        </div>
                         
                        <div className="col-xs-6 col-sm-4 col-md-4">
                            <div className="feature-item">
                                <p>Laundry</p>
                            </div>
                        </div>
                         
                        <div className="col-xs-6 col-sm-4 col-md-4">
                            <div className="feature-item">
                                <p>Gym</p>
                            </div>
                        </div>
                        
                        <div className="col-xs-6 col-sm-4 col-md-4">
                            <div className="feature-item">
                                <p>Elevator</p>
                            </div>
                        </div>
                        
                        <div className="col-xs-6 col-sm-4 col-md-4">
                            <div className="feature-item">
                                <p>Dish Washer</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="property-single-location inner-box">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="heading">
                                <h2 className="heading--title">Location</h2>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <ul className="list-unstyled mb-20">
                                <li><span>Address:</span>1220 Petersham Town</li>
                                <li><span>City:</span>Sydney</li>
                                <li><span>Country:</span>Australia</li>
                                <li><span>State:</span>Newcastle</li>
                                <li><span>Zip/Postal code:</span>54330</li>
                            </ul>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div id="googleMap" style={{width:"100%",height:'380px'}}></div>
                        </div>
                    </div>
                </div>

                <div className="property-single-design inner-box">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="heading">
                                <h2 className="heading--title">Floor Plans</h2>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="accordion accordion-1" id="accordion01">
                                <div className="panel">
                                    <div className="panel--heading clearfix">
                                        <div className="pull-left">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion01" href="#collapse01-1">First Floor</a>
                                        </div>
                                        <div className="pull-right">
                                            <ul className="list-unstyled list-inline mb-0">
                                                <li><span>Size:</span>635 sq ft</li>
                                                <li><span>Rooms:</span>3</li>
                                                <li><span>Baths:</span>1</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="collapse01-1" className="panel--body panel-collapse collapse in">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupte velit esse cillum dolore eu fugiat.</p>
                                        <img src="/images/property-single/1.png" alt="img" className="img-responsive" />
                                    </div>
                                </div>
                                 
                                <div className="panel">
                                    <div className="panel--heading clearfix">
                                        <div className="pull-left">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion01" href="#collapse01-2">Second Floor</a>
                                        </div>
                                        <div className="pull-right">
                                            <ul className="list-unstyled list-inline mb-0">
                                                <li><span>Size:</span>635 sq ft</li>
                                                <li><span>Rooms:</span>3</li>
                                                <li><span>Baths:</span>1</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="collapse01-2" className="panel--body panel-collapse collapse">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupte velit esse cillum dolore eu fugiat.</p>
                                        <img src="/images/property-single/1.png" alt="img" className="img-responsive" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="property-single-video inner-box">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="heading">
                                <h2 className="heading--title">Video</h2>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="video--content text-center">
                                <div className="bg-section">
                                    <img src="/images/video/1.jpg" alt="Background" />
                                </div>
                                <div className="video--button">
                                    <div className="video-overlay">
                                        <div className="pos-vertical-center">
                                            <a className="popup-video" href="https://www.youtube.com/watch?v=nrJtHemSPW4">
                                    <i className="fa fa-youtube-play"></i>  
                                </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="property-single-reviews inner-box">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="heading">
                                <h2 className="heading--title">3 Reviews</h2>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <ul className="property-review">
                                <li className="review-comment">
                                    <div className="avatar">R</div>
                                    <div className="comment">
                                        <h6>Ryan Printz</h6>
                                        <div className="date">Feb 12, 2018</div>
                                        <div className="property-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.</p>
                                    </div>
                                </li>
                                <li className="review-comment">
                                    <div className="avatar">S</div>
                                    <div className="comment">
                                        <h6>Steve Martin</h6>
                                        <div className="date">Jan 16, 2018</div>
                                        <div className="property-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.</p>
                                    </div>
                                </li>
                                <li className="review-comment">
                                    <div className="avatar">N</div>
                                    <div className="comment">
                                        <h6>Nicole Smith</h6>
                                        <div className="date">Nov 25, 2017</div>
                                        <div className="property-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="property-single-leave-review inner-box">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="heading">
                                <h2 className="heading--title">Leave a Review</h2>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <form id="post-comment" className="mb-0" onSubmit={handleReviewSubmit}>
                                <div className="row">
                                   
                                     
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="form-group">
                                            <label>Rating*</label>
                                            <div className="property-rating">
                                                 <select onChange={handleReviewChange} name="ratings" id="">
                                                    <option value="1">1</option>
                                                    <option value="1">2</option>
                                                    <option value="1">3</option>
                                                    <option value="1">4</option>
                                                    <option value="1">5</option>

                                                 </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="review-comment">Review*</label>
                                            <textarea onChange={handleReviewChange} className="form-control" name='comment' id="comment" rows="2" ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4">
              
                <div className="widget widget-property-agent">
                    <div className="widget--title">
                        <h5>About Agent</h5>
                    </div>
                    <div className="widget--content">
                        <a href="#">
                            <div className="agent--img">
                            <img src={`http://localhost:10000/uploads/${propertyDetail.property.user_id.avator}`} className="img-responsive" alt="Property Imag"  />

                                {/* <img src="/images/agents/grid/7.jpg" alt="agent" className="img-responsive" /> */}
                            </div>
                            <div className="agent--info">
                                <h5 className="agent--title">{propertyDetail.property.user_id.name}</h5>
                            </div>
                        </a>
                        <div className="agent--contact">
                            <ul className="list-unstyled">
                                <li><i className="fa fa-phone"></i>{propertyDetail.property.user_id.phone}</li>
                                <li><i className="fa fa-envelope-o"></i>{propertyDetail.property.user_id.email}</li>
                                {/* <li><i className="fa fa-link"></i>modernhouse.com</li> */}
                            </ul>
                        </div>
                        <div className="agent--social-links">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-google-plus"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
             
                <div className="widget widget-request">
                    <div className="widget--title">
                        <h5>Request a Showing</h5>
                    </div>
                    {/* Request */}
                    <div className="widget--content">
                        <form className="mb-0" onSubmit={handleFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="contact-name">Your Name*</label>
                                <input type="text" className="form-control" onChange={handleOncahnge} name="name" id="contact-name"  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-email">Email Address*</label>
                                <input type="email" onChange={handleOncahnge} className="form-control" name="email" id="contact-email"  />
                            </div>
                           
                            <div className="form-group">
                                <label htmlFor="contact-phone">Phone Number</label>
                                <input type="text" onChange={handleOncahnge} className="form-control" name="phone" id="contact-phone" placeholder="(optional)" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message*</label>
                                <textarea onChange={handleOncahnge} className="form-control" name="message" id="message" rows="2" placeholder="(optional)"></textarea>
                            </div>
                            <input type="submit" value="Send Request" name="submit" className="btn btn-primary btn--block" />
                        </form>
                    </div>
                </div>
                
                <div className="widget widget-featured-property">
                    <div className="widget--title">
                        <h5>Featured Properties</h5>
                    </div>
                    <div className="widget--content">
                        <div className="carousel carousel-dots" data-slide="1" data-slide-rs="1" data-autoplay="true" data-nav="false" data-dots="true" data-space="25" data-loop="true" data-speed="800">
                            <div className="property-item">
                                <div className="property--img">
                                    <img src="/images/properties/13.jpg" alt="property image" className="img-responsive" />
                                    <span className="property--status">For Rent</span>
                                </div>
                                <div className="property--content">
                                    <div className="property--info">
                                        <h5 className="property--title">House in Chicago</h5>
                                        <p className="property--location">1445 N State Pkwy, Chicago, IL 60610</p>
                                        <p className="property--price">$1200<span className="time">month</span></p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="property-item">
                                <div className="property--img">
                                    <img src="/images/properties/2.jpg" alt="property image" className="img-responsive" />
                                    <span className="property--status">For Rent</span>
                                </div>
                                <div className="property--content">
                                    <div className="property--info">
                                        <h5 className="property--title"><a href="#">Villa in Oglesby Ave</a></h5>
                                        <p className="property--location">1035 Oglesby Ave, Chicago, IL 60617</p>
                                        <p className="property--price">$130,000<span className="time">month</span></p>
                                    </div>
                                </div>
                            </div>
                         
                            <div className="property-item">
                                <div className="property--img">
                                    <img src="/images/properties/3.jpg" alt="property image" className="img-responsive" />
                                    <span className="property--status">For Sale</span>
                                </div>
                                <div className="property--content">
                                    <div className="property--info">
                                        <h5 className="property--title"><a href="#">Apartment in Long St.</a></h5>
                                        <p className="property--location">34 Long St, Jersey City, NJ 07305</p>
                                        <p className="property--price">$70,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="widget widget-mortgage-calculator">
                    <div className="widget--title">
                        <h5>Mortage Calculator</h5>
                    </div>
                    <div className="widget--content">
                        <form className="mb-0">
                            <div className="form-group">
                                <label htmlFor="sale-price">Sale Price</label>
                                <input type="text" className="form-control" name="sale-price" id="sale-price" placeholder="$" />
                            </div> 
                            <div className="form-group">
                                <label htmlFor="down-payment">Down Payment</label>
                                <input type="text" className="form-control" name="down-payment" id="down-payment" placeholder="$" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="term">Term</label>
                                <input type="text" className="form-control" name="term" id="term" placeholder="years" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="interest-rate">Interest Rate</label>
                                <input type="text" className="form-control" name="interest-rate" id="interest-rate" placeholder="%" />
                            </div>
                            <input type="submit" value="Calculate" name="submit" className="btn btn--primary btn--block" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    }
    
</section>
 
<section id="properties-carousel" className="properties-carousel pt-0">
    <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="heading heading-2  mb-70">
                    <h2 className="heading--title">Similar Properties</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="carousel carousel-dots" data-slide="3" data-slide-rs="1" data-autoplay="true" data-nav="false" data-dots="true" data-space="25" data-loop="true" data-speed="800">
                    <div className="property-item">
                        <div className="property--img">
                            <a href="#">
                    <img src="/images/properties/3.jpg" alt="property image" className="img-responsive" />
                    <span className="property--status">For Sale</span>
</a>
                        </div>
                        <div className="property--content">
                            <div className="property--info">
                                <h5 className="property--title"><a href="#">Apartment in Long St.</a></h5>
                                <p className="property--location">34 Long St, Jersey City, NJ 07305</p>
                                <p className="property--price">$70,000</p>
                            </div>
                            <div className="property--features">
                                <ul className="list-unstyled mb-0">
                                    <li><span className="feature">Beds:</span><span className="feature-num">2</span></li>
                                    <li><span className="feature">Baths:</span><span className="feature-num">1</span></li>
                                    <li><span className="feature">Area:</span><span className="feature-num">200 sq ft</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="property-item">
                        <div className="property--img">
                            <a href="#">
                    <img src="/images/properties/11.jpg" alt="property image" className="img-responsive" />
                    <span className="property--status">For Sale</span>
                    </a>
                        </div>
                        <div className="property--content">
                            <div className="property--info">
                                <h5 className="property--title"><a href="#">Villa in Chicago IL</a></h5>
                                <p className="property--location">1445 N State Pkwy, Chicago, IL 60610</p>
                                <p className="property--price">$235,000</p>
                            </div>
                            <div className="property--features">
                                <ul className="list-unstyled mb-0">
                                    <li><span className="feature">Beds:</span><span className="feature-num">3</span></li>
                                    <li><span className="feature">Baths:</span><span className="feature-num">2</span></li>
                                    <li><span className="feature">Area:</span><span className="feature-num">1120 sq ft</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                     
                  
              

                </div>
            </div>
        </div>
    </div>
</section>
  </>
  )
}
