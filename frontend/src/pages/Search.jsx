import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate,useParams } from 'react-router-dom';

export const Search = () => {
    
    const navigate = useNavigate();
    const [keyword, setkeyword] = useState("")
    const searchHandller = (e) => {
        e.preventDefault();
        if(keyword.trim()){
            navigate(`/search/${keyword}`)
        }
        else{
            navigate('/properties')
        }

    }
    
  return (
    <section id="heroSearch" className="hero-search mtop-100 pt-0 pb-0">
    <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="slider--content">
                    <div className="text-center">
                        <h1>Find Your Favorite Property</h1>
                    </div>
                    <form className="mb-0" onSubmit={searchHandller}>
                        {/* {keyword} */}
                        <div className="form-box search-properties">
                            <div className="row">
                            <div className="col-8">
                                <input name='keyword' onChange={(e)=>setkeyword(e.target.value)} type="text" placeholder='search here' className='form-control'  id="" />
                            </div>
                            <div className="col-4">
                                <input type="submit"  className='btn btn-success' name="" id="" value="search" />
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
                <img src="images/slider/slide-bg/3.jpg" alt="background" />
            </div>
        </div>

        <div className="slide--item bg-overlay bg-overlay-dark3">
            <div className="bg-section">
                <img src="images/slider/slide-bg/1.jpg" alt="background" />
            </div>
        </div>

        <div className="slide--item bg-overlay bg-overlay-dark3">
            <div className="bg-section">
                <img src="images/slider/slide-bg/3.jpg" alt="background" />
            </div>
        </div>
    </div>
</section>
  )
}
