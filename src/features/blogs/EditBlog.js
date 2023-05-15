import { useState } from "react"
import { useDispatch} from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { editBlog } from "./blogSlice"
import { Link } from "react-router-dom"

const EditBlog = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const blogs = JSON.parse(localStorage.getItem('blogss'));

  const navigate = useNavigate();
  const existingBlog = blogs.filter(blog => blog.id === params.id);
  const { title, content } = existingBlog[0];
  const [values, setValues] = useState({
    title,
    content
  });

  let arr = [];
  

  const handleEditBlog = () => {
    setValues({ title: '', content: '' });

    const data = dispatch(editBlog({
      id: params.id,
      title: values.title,
      content: values.content
    }));

    arr = JSON.parse( localStorage.getItem('blogss',));

    if(!data.payload.title || !data.payload.content ){
      alert("Please enter Values");
    }
    else{
      arr.splice(arr.findIndex((a) => a.id===existingBlog[0].id) ,1);
      arr.push(data.payload);
      localStorage.setItem('blogss' , JSON.stringify(arr));
      navigate('/');
    }

    
  }

  return (
    <div className="container">
      <TextField
        label="Title Of Blog"
        value={values.title}
        onChange={(e) => setValues({ ...values, title: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Enter Name Of Blog' }}
      />
      <br />
      <TextField
        label="Content"
        value={values.content}
        onChange={(e) => setValues({ ...values, content: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Enter Content Of Blog' }}
      />
      <Button onClick={handleEditBlog}>Save</Button>
      <Link to="/"><button className="btn btn-secondary" >Back</button></Link>
    </div>
  )
}

export default EditBlog