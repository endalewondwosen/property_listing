import {React,useEffect} from 'react'
import { myProperties,reset } from '../features/property/propertySlice'
import { useSelector,useDispatch } from 'react-redux'
export const MyProperties = () => {
    const { properties, isLoading, isError, isSuccess, message } = useSelector(state => state.properties)
    const dispatch=useDispatch()
    useEffect(() => {
         const user=localStorage.getItem('user')
         const userData=JSON.parse(user)
        dispatch(myProperties(userData.user._id))
        dispatch(reset())
    }, [dispatch]);
  return (
    <>
 <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-xs-4 col-sm-6 col-md-6 col-md-offset-3">
                        <div className="title title-1 text-center">
                            <div className="title--content">
                                <div className="title--heading">
                                    <h1>my properties</h1>
                                </div>
                                <ol className="breadcrumb">
                                    <li><a href="#">Home</a></li>
                                    <li className="active">my properties</li>
                                </ol>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
             </div>
         
        <section id="my-properties" className="my-properties properties-list">
            <div className="container">
                <div className="row">
                {properties && properties.map(property => (
                        <div className="property-item">
                            <div className="property--img">
                                <a href="#">
                                <img src={`http://localhost:10000/uploads/${property.image}`} alt="property image" className="img-responsive" />
                        {/* <img src="/images/properties/4.jpg" alt="property image" className="img-responsive" /> */}
                        <span className="property--status">{property.status}</span>
						</a>
                            </div>
                            <div className="property--content">
                                <div className="property--info">
                                    <h5 className="property--title"><a href="#">{property.name}</a></h5>
                                    <p className="property--location">{property.location}</p>
                                    <p className="property--price">{property.price} Birr</p>
                                </div>
                                <div className="property--features">
                                    <ul>
                                        <li><span className="feature">Beds:</span><span className="feature-num">{property.beds}</span></li>
                                        <li><span className="feature">Baths:</span><span className="feature-num">{property.baths}</span></li>
                                        <li><span className="feature">Area:</span><span className="feature-num">{property.area} sq ft</span></li>

                                    </ul>
                                    <a href="#" className="edit--btn btn-large"><i className="fa fa-edit text-primary"></i>Edit</a>
                                </div>
                            </div>
                        </div>
                ))}
                    </div>
                </div>
            {/* </div> */}
        </section>
        
       
    </>
  )
}
