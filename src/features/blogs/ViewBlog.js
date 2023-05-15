import { useState } from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import Button from "../../components/Button"

const ViewBlog = () => {
  const params = useParams();
  const blogs = useSelector(store => store.blogs);
  const existingBlog = blogs.filter(blog => blog.id === params.id);
  const { title, content } = existingBlog[0];
  const [values] = useState({
    title,
    content
  });

  return (

    <div className="container" >
        <div className="card" >
            <div className="card-header" >
                <h4>{values.title}</h4>

            </div>
            <div className="card-text" >
                <h6>{values.content}</h6>

            </div>
        
       </div>
        <br></br>
       <Link to="/"><Button>Back</Button></Link>

    </div>    

    
  )
}

export default ViewBlog