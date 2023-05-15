import { useDispatch } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import Button from "../../components/Button";
import { deleteBlog } from "./blogSlice";
import './BlogList.css';



const BlogList = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  let Res = [];
  const data = JSON.parse(localStorage.getItem('blogss'));
  Res = data;

  
  
  
  const handleRemoveBlog = (id) => {
    
    dispatch(deleteBlog({ id }));
    Res.splice(Res.findIndex((a) => a.id===id),1);
    console.log(Res);
    localStorage.setItem('blogss' , JSON.stringify(Res));
    navigate('/');
    
  }
  

  const renderCard = () => Res.map(blog => (


   <div className="container" key={blog.id} >
            <table className="table table-striped" >
                
                <tbody>     

                    <tr >
                        <td ><h5>{blog.title}</h5></td>
                        <td id="content">{blog.content.slice(0,50)}...</td>
                        <td id="actions">
                            <Link to={`view-blog/${blog.id}`} >
                              <button className="btn btn-primary" > 
                                View
                              </button>
                            </Link>
                            
                            <Link to={`edit-blog/${blog.id}`}>
                              <button className="btn btn-secondary" >
                                Edit
                              </button>
                            </Link>

                            <button className="btn btn-danger" onClick={() => handleRemoveBlog(blog.id)}>
                              Delete
                            </button>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
            
    </div> 
      
  ))

  return (
    <div>
      <Link to="/add-blog"><Button>Add Blog</Button></Link>
      <div>
        <br></br>
         
        {data ? renderCard() : <h3 >No Blogs</h3>}
      </div>
    </div>
  )
}

export default BlogList