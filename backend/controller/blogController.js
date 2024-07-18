const asyncHandler = require("express-async-handler");
const blogService = require("../service/blogService");

const createblog = asyncHandler(async (req, res) => {
    console.log("data", req.body)
    try {

        const blog = await blogService.postblog(req.body);

        res.status(201).json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

const getBlog = asyncHandler(async (req, res, next) => {
    try {
        const blog = await blogService.getblog();
        res.status(200).json(blog);
    } catch (error) {
        next(error);
    }
});

module.exports = { createblog, getBlog };


