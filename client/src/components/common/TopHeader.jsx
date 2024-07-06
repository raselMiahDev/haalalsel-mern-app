
import { FaFacebookF,FaWhatsapp } from "react-icons/fa";

const TopHeader = () => {
    return (
        <div className='bg-dark py-1'>
            <div className='container'>
                <div className="row">
                    <div className='col-6 col-md-6'>
                        <span className="text-white">Hotline : 01711222111</span>
                    </div>
                    <div className='col-6 col-md-6 text-end'>
                        <a href="https://web.facebook.com/polash.ahmed.35574" target="_blank" rel="noopener noreferrer"><FaFacebookF size={20}/></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={20}/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;