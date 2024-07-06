import ImageGallery from "react-image-gallery";
const ProductsImages = (props) => {
    return (
        <div>
            <ImageGallery autoPlay={true} items={props.images} />
        </div>
    );
};

export default ProductsImages;