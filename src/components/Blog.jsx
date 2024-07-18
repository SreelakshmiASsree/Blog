
import React, { useState } from 'react'
import dayjs from "dayjs"

const Blog = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const ReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const displayContent = () => {
    const content = props.description.split('');
    if (isExpanded || content.length <= 100) {
      return props.description;
    }
    return content.slice(0, 100).join('') + '...';
  }

  // const displayContent = props.description.split(' ').slice(0, 30).join(' ') + '...';
  const date = dayjs().format('MM, D, YYYY');
  
  return (
    <>
      <div className="w3-card-4 w3-margin w3-white">
        <img src={props.image || "https://img.freepik.com/premium-photo/picture-image-symbol-blue-background_172429-2022.jpg"}
          alt="Nature"
          style={{ width: "100%", height: "325px" }} />
        <div className="w3-container">
          <h3><b>{props.title || "TITLE HEADING"}</b></h3>
          <h5>Blog created <span className="w3-opacity">{date}</span></h5>
        </div>
        <div className="w3-container">
          <p>{displayContent() || "content"}</p>
          <div className="w3-row">
            <div className="w3-col m8 s12">
              {props.description.split('').length > 30 && (
                <p>
                  <button
                    className="w3-button w3-padding-large w3-white w3-border"
                    onClick={ReadMore}
                  >
                    <b>{isExpanded ? 'SHOW LESS' : 'READ MORE »'}</b>
                  </button>
                </p>
              )}
            </div>
            <div className="w3-col m4 w3-hide-small">
              <p>
                <span className="w3-padding-large w3-right">
                  <b>Comments &nbsp;</b> <span className="w3-tag">0</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Blog;







