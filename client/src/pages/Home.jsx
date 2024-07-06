import MasterLayout from '../components/MasterLayout/MasterLayout';
import Category from '../components/Home/Category';
import Products from '../components/Home/Products';
import Services from '../components/Home/Services';
import FeaturedProduct from '../components/Home/FeaturedProduct';
import Brands from '../components/Home/Brands';
import HeroSliderTwo from '../components/Home/HeroSliderTwo';

const Home = () => {
    return (
        <MasterLayout>
            <HeroSliderTwo/>
            <Category/>
            <Products/>
            <FeaturedProduct/>
            <Services/>
            <Brands/>
        </MasterLayout>
    );
};

export default Home;