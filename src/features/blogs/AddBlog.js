import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { addBlog } from "./blogSlice"
import { Link } from "react-router-dom";



const AddBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: '',
    content: ''
  });

  
  

  const handleAddBlog = () => {
     
    let arr = [];
    arr = JSON.parse(localStorage.getItem('blogss'));

    
    setValues({ title: '', content: '' });

    
    

    const data = dispatch(addBlog({
      id: uuidv4(),
      title: values.title,
      content: values.content
      
    }));
    
    if(!data.payload.title  || !data.payload.content){
      alert("Title or Content Cannot be blank");
    }
    else{
      arr.push(data.payload)

      localStorage.setItem('blogss' , JSON.stringify(arr));
      navigate('/');
    }

    
    

  }

  return (
    <div className="container">
      <TextField
        label="Title"

         
        value={values.title}

        onChange={(e) => setValues({ ...values, title: e.target.value })}
        inputProps={{ type: 'text',  placeholder: 'Enter Title Of Blog' }}
        
        
        
        
        
        
      />
      <br />
      <TextField
        label="Content"
        value={values.content}
        onChange={(e) => setValues({ ...values, content: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Enter Content Of Blog' }}
      />
      <Button onClick={handleAddBlog}>Submit</Button>
      <Link to="/"><button className="btn btn-secondary" > Back</button></Link>
    </div>
  )
}

export default AddBlog