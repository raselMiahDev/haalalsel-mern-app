import { CiDeliveryTruck } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { VscVerified } from "react-icons/vsc";
import { motion } from 'framer-motion';
import { fadeInUp } from "../../helper/animation"
const Services = () => {
    const data =[
        {
            id:1,
            icon:  <CiDeliveryTruck size={35} color="white" />,
            title:"FREE AND FAST DELIVERY",
            des:"Free delivey for all orders over $14"
        },
        {
            id:2,
            icon:  <BiSupport size={35} color="white" />,
            title:"24/7 CUSTOMER SERVICE",
            des:"Friendly 24/7 customer support"
        },
        {
            id:3,
            icon:  <VscVerified size={35} color="white" />,
            title:"MONEY BACK GUARANTEE",
            des:"We return money whithin 30 days"
        }
    ]
  return (
    <motion.div initial={fadeInUp.initial} animate={fadeInUp.animate} transition={fadeInUp.transition}  className=" py-5 bg-light">
      <div className="row my-5">
            {
                data.map((item)=>{
                    return(
                        <div key={item.id} className="col-12 col-md-4 col-lg-4 text-center">
                        <span className="bg-light p-4 rounded ">
                          <span className="p-3 bg-dark rounded">
                            {item.icon}
                          </span>
                        </span>
                        <h5 className="pt-4">{item.title}</h5>
                        <p>{item.des}</p>
                      </div>
                    )
                })
            }
      </div>
    </motion.div>
  );
};

export default Services;
