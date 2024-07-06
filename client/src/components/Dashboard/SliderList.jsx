import { useEffect, useState } from "react";
import { ProductSliderDeleteRequiest } from "../../API/AdminApiRequiest";
import toast, { Toaster } from "react-hot-toast";
import { SliderListRequest } from "../../API/apiRequiest";
const SliderList = () => {
    const [data,setData]= useState([]);
    useEffect(()=>{
        (async()=>{
            const result = await SliderListRequest();
            setData(result);
        })()
    },[])
  const handleSubmit =async (id)=>{
    await ProductSliderDeleteRequiest(id).then((res)=>{
      if(res.status==true){
        toast.success("Delete Success")
      }
    })
  }
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Short_des</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

            {
                data.map((item,i)=>{
                    return(
                        <tr key={i}>
                            <th scope="row">{i+1}</th>
                            <td>
                                <img src={item['img']} width={50} alt="" />
                            </td>
                            <td>{item['title']}</td>
                            <td>{item['short_des'].substr(0,30)}</td>
                            <td>{item['price']}</td>
                            <td>
                                <div className="btn-group">
                                    <button className="btn btn-success btn-sm">Edit</button>
                                    <button onClick={()=>handleSubmit(item['_id'])} className="btn btn-danger btn-sm">Delete</button>
                                </div>
                            </td>
                        </tr>
                    )
                })
            }

        </tbody>
      </table>
    </div>
  );
};

export default SliderList;
