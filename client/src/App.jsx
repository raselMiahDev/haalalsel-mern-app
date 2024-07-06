import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ProductByCategory from './pages/ProductByCategory';
import ProductByBrand from './pages/ProductsByBrand';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CartPage from './pages/CartPage';
import SearchProductPage from './pages/SearchProductPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import ProductCreateUpdatePage from './pages/Dashboard/ProductCreateUpdatePage';
import AddProductDetailsPage from './pages/Dashboard/AddProductDetailsPage';
import AddCategoryPage from './pages/Dashboard/AddCategoryPage';
import AddBrandPage from './pages/Dashboard/AddBrandPage';
import { getUserDetails } from './helper/SessionHelper';
import BrandListPage from './pages/Dashboard/BrandListPage';
import ProductListPage from './pages/Dashboard/ProductListPage';
import ProductSlidePage from './pages/Dashboard/ProductSlidePage';
import CategoryListPage from './pages/Dashboard/CategoryListPage';
import ProductSliderListPage from './pages/Dashboard/ProductSliderListPage';
import ProductUpdatePage from './pages/Dashboard/Update/ProductUpdatePage';
import BrandUpdatePage from './pages/Dashboard/Update/BrandUpdatePage';
import CategoryUpdatePage from './pages/Dashboard/Update/CategoryUpdatePage';

const App = () => {
  const userInfo = getUserDetails()
  if(userInfo?.role==="admin"){
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<DashboardPage/>}/>
            <Route path='/productCreateUpdate' element={<ProductCreateUpdatePage/>}/>
            <Route path='/productList' element={<ProductListPage/>}/>
            <Route path='/AddProductDetails' element={<AddProductDetailsPage/>}/>
            <Route path='/AddCategory' element={<AddCategoryPage/>}/>
            <Route path='/AddBrand' element={<AddBrandPage/>}/>
            <Route path='/BrandList' element={<BrandListPage/>}/>
            <Route path='/CategoryList' element={<CategoryListPage/>}/>
            <Route path='/CreateProductSlide' element={<ProductSlidePage/>}/>
            <Route path='/DeleteProductSlide' element={<ProductSliderListPage/>}/>
            <Route path='/UpdateProduct/:id' element={<ProductUpdatePage/>}/>
            <Route path='/BrandUpdate/:id' element={<BrandUpdatePage/>}/>
            <Route path='/CategoryUpdate/:id' element={<CategoryUpdatePage/>}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  }else{
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details/:id' element={<ProductDetails/>}/>
            <Route path="/product-by-brand/:brand" element={<ProductByBrand />} />
            <Route path="/product-by-category/:category" element={<ProductByCategory />}/>
            <Route path='/product-by-search/:keyword' element={<SearchProductPage/>}/>
            <Route path='/cart-list' element={<CartPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signUp' element={<SignUpPage/>}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
};

export default App;