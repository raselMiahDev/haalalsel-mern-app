import DashboardLayOut from '../../components/Dashboard/DashboardLayOut';
import dasPicture from "../../assets/images/haalal-sell.com.png"
const DashboardPage = () => {
    return (
        <DashboardLayOut>
            <div className='container'>
                <h2>Welcome to admin Dashboard</h2>
                <img src={dasPicture} alt=""className='w-100' />
            </div>
        </DashboardLayOut>
    );
};

export default DashboardPage;