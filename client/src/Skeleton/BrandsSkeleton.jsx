import React from 'react';
import Lottie from "lottie-react";
import ImagePlaceholder from "../assets/images/image.json";
import Skeleton from "react-loading-skeleton";

const BrandsSkeleton = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                <div className="col-2 col-lg-8r text-center col-md-8r p-1">
                        <div  className="card rounded-3 bg-light">
                            <div className="card-body text-center">
                                <Lottie  className="w-50" animationData={ImagePlaceholder} loop={true} />
                                <Skeleton count={1} />
                            </div>
                        </div>
                    </div>
                    <div className="col-2 col-lg-8r text-center col-md-8r p-1">
                        <div  className="card rounded-3 bg-light">
                            <div className="card-body text-center">
                                <Lottie  className="w-50" animationData={ImagePlaceholder} loop={true} />
                                <Skeleton count={1} />
                            </div>
                        </div>
                    </div>
                    <div className="col-2 col-lg-8r text-center col-md-8r p-1">
                        <div  className="card rounded-3 bg-light">
                            <div className="card-body text-center">
                                <Lottie  className="w-50" animationData={ImagePlaceholder} loop={true} />
                                <Skeleton count={1} />
                            </div>
                        </div>
                    </div>
                    <div className="col-2 col-lg-8r text-center col-md-8r p-1">
                        <div  className="card rounded-3 bg-light">
                            <div className="card-body text-center">
                                <Lottie  className="w-50" animationData={ImagePlaceholder} loop={true} />
                                <Skeleton count={1} />
                            </div>
                        </div>
                    </div>
                    <div className="col-2 col-lg-8r text-center col-md-8r p-1">
                        <div  className="card rounded-3 bg-light">
                            <div className="card-body text-center">
                                <Lottie  className="w-50" animationData={ImagePlaceholder} loop={true} />
                                <Skeleton count={1} />
                            </div>
                        </div>
                    </div>
                    <div className="col-2 col-lg-8r text-center col-md-8r p-1">
                        <div  className="card rounded-3 bg-light">
                            <div className="card-body text-center">
                                <Lottie  className="w-50" animationData={ImagePlaceholder} loop={true} />
                                <Skeleton count={1} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BrandsSkeleton;