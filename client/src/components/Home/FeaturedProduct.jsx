import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../assets/images/features.png"

const FeaturedProduct = () => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-md-12 bg-dark p-5 rounded">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <span className='text-warning'>Category</span>
                            <h1 className='text-white py-3'>Enhance Your Music Experience</h1>
                            <p className='text-warning fs-6'>Price : 2500</p>
                            <Link className='btn btn-warning fw-bold px-5 text-white'>Buy Now</Link>
                        </div>
                        <div className="col-md-6 text-center">
                            <img src={image} width={280} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProduct;