import React from 'react';
import Skeleton from 'react-loading-skeleton'
import ImagePlaceholder from "../assets/images/image.json"
import Lottie from "lottie-react";
import 'react-loading-skeleton/dist/skeleton.css'
const SliderSkeleton = () => {
    return (
        <div className="container hero-bg">
            <div className="row">
                    <div className="col-6 col-lg-6 col-sm-12 col-md-6">
                        <Skeleton  count={2} />
                    </div>
                    <div className="col-6 col-lg-6 col-sm-12 col-md-6">
                        <Lottie  className="w-75 " animationData={ImagePlaceholder} loop={true} />
                    </div>
            </div>
        </div>
    );
};

export default SliderSkeleton;