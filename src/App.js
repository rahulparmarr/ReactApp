
import { Route, Routes } from "react-router-dom";
import AddBlog from "./features/blogs/AddBlog";
import EditBlog from "./features/blogs/EditBlog";
import BlogList from "./features/blogs/BlogList";
import ViewBlog from "./features/blogs/ViewBlog";
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Blogs</h1>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/edit-blog/:id" element={<EditBlog />} />
        <Route path="/view-blog/:id" element= {<ViewBlog/>} />
      </Routes>
    </div>
  );
}

export default App;
