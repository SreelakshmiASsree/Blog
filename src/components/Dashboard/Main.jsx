
import React, { useState } from 'react';
import Header from '../Header';
import Form from './Form';
// import Blogentry from './Blogentry';
import Blog from '../Blog';
import axios from "axios";
import { toast } from "react-toastify";

const Main = () => {
  const [blogData, setBlogData] = useState({ title: '', image: '', description: '' });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target)
    try {
      console.log("submitting blog data", blogData);
      const response = await axios.post('http://localhost:5000/blog', {
        title: blogData.title,
        image: blogData.image,
        description: blogData.description
      });

      console.log('Blog post created:', response.data);
      toast.success("From submited successfully")
    } catch (error) {
      console.error('There was an error creating the blog post!', error);
    }
  };

  return (
    <div className="w3-row">
      <Header />
      <div className="w3-col l6 ">
        <Form blogData={blogData} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
      <div className="w3-col l5 s12">
        <Blog title={blogData.title} image={blogData.image} description={blogData.description} />
        {/* <Blog post = {blogData}/> */}

      </div>
    </div>
  );
};

export default Main;

