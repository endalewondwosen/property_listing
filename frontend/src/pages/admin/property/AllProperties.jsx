import React, {useEffect}from 'react'
import { allproperties, reset } from '../../../features/property/propertySlice';
import { useSelector, useDispatch, useStore } from 'react-redux';
export const AllProperties = () => {
    const dispatch = useDispatch()
    const { properties, isLoading, isError, isSuccess, message } = useSelector(state => state.properties)
    useEffect(() => {
        dispatch(allproperties())
        dispatch(reset())
    }, [dispatch])
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Data Tables</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item">Tables</li>
                        <li className="breadcrumb-item active">Data</li>
                    </ol>
                </nav>
            </div>
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="card">
                            <div className="card-body">
                                <table className="table datatable">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">title</th>
                                            <th scope="col">image</th>
                                            <th scope="col">price</th>
                                            <th scope="col">owner</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {isSuccess && properties.map(property => (

                                            <tr key={property._id}>
                                                <th scope="row">#</th>
                                                <td>{property.name}</td>
                                                <td>   <img style={{width:"60px"}} src={`http://localhost:10000/uploads/${property.image}`} alt="property image" className="img-responsive" />
                                                </td>
                                                <td>{property.price}</td>
                                                <td>{property.user_id.name}</td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    )
}
