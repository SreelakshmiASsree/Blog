const blogmodel = require("../Model/blogModel");

const postblog = async (blogdata) => {
  // console.log("service",req.body);
  console.log("blogdata", blogdata);

  const { title, image, description } = blogdata;

  if (!title || !image || !description) {
    throw new Error("All fields are mandatory");
  }

  return await blogmodel.create({
    title,
    image,
    description
  });

  

};


const getblog = async () => {
  try {
    const blog = await blogmodel.find().sort({createdAt:-1})
    return blog;
  } catch (error) {
    console.error("error all blog");

    throw error;
  }
}

module.exports = { postblog, getblog };

