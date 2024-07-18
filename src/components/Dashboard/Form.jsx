
import React, { useState } from 'react';
import "./style.css";


const Form = ({ blogData, handleSubmit, handleChange }) => {

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <span className="title"></span>
        <label htmlFor="title" className="label">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="input"
          value={blogData.title}
          onChange={handleChange}
        />
        <label htmlFor="image" className="label">
          Image URL
        </label>
        <input
          type="text"
          id="image"
          name="image"
          required
          className="input"
          value={blogData.image}
          onChange={handleChange}
        />
        <label htmlFor="description" className="label">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          required
          className="input"
          value={blogData.description}
          onChange={handleChange}
        />
        <button type="submit" className="submit" >
          Submit
        </button>
      </form>
    </>
  );

};

export default Form;



