import { Link } from "react-router-dom";
import { DeleteBrandRequiest } from "../../API/AdminApiRequiest";
import toast, { Toaster } from "react-hot-toast";
const BrandList = (props) => {
  const handleSubmit =async (id)=>{
    await DeleteBrandRequiest(id).then((res)=>{
      if(res.status==true){
        toast.success(res.message)
      }
    })
  }
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Number</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Products</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

            {
                props.data.map((item,i)=>{
                    return(
                        <tr key={i}>
                            <th scope="row">{i+1}</th>
                            <td>
                                <img src={item['brandImg']} width={50} alt="" />
                            </td>
                            <td>{item['brandName']}</td>
                            <td>{item['brandName']}</td>
                            <td>
                                <div className="btn-group">
                                    <Link to={`/BrandUpdate/`+item['_id']} className="btn btn-success btn-sm">Edit</Link>
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

export default BrandList;
