// import React from 'react'
// import Blog from './Blog'
// import AboutCard from './AboutCard'
// import PopularPosts from './PopularPosts'
// import Labels from './Labels'
// import {Postdata} from '../Data/BlogData'


// const Mainlayout = () => {
//   return (
//    <>
//     <div className="w3-row">
//       {/* Blog entries */}
//       <div className="w3-col l8 s12">
//         {/* Blog entry */}
//       {Postdata.map((data)=>(  <Blog {...data}/>))}

//         {/* Blog entry */}


//         {/* END BLOG ENTRIES */}
//       </div>
//       {/* Introduction menu */}
//       <div className="w3-col l4">
//         {/* About Card */}
//         {<AboutCard/>}

//         {/* Posts */}
//        <PopularPosts/>
//         {/* Labels / tags */}
//       <Labels/>
//         {/* END Introduction Menu */}
//       </div>
//       {/* END GRID */}
//     </div>
//     <br />
//     {/* END w3-content */}
//    </>
//   )
// }

// export default Mainlayout

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Blog from './Blog';
import AboutCard from './AboutCard';
import PopularPosts from './PopularPosts';
import Labels from './Labels';

const Mainlayout = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(' http://localhost:5000/blog');

        setBlogData(response.data);

      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };
    fetchBlogData();
   

  }, []);

  return (
    <>
      <div className="w3-row">
        {/* Blog entries */}
        <div className="w3-col l8 s12">
          {/* Render blog entries */}
          {blogData.map((blogs, index) => (<Blog key={`blog-${index}`} {...blogs} />
          ))}
        </div>
        {/* Introduction menu */}
        <div className="w3-col l4">
          {/* Render AboutCard */}
          <AboutCard />
          {/* Render PopularPosts */}
          <PopularPosts />
          {/* Render Labels */}
          <Labels />
          {/* END Introduction Menu */}
        </div>
      </div>
      <br />
    </>
  );
};

export default Mainlayout;
