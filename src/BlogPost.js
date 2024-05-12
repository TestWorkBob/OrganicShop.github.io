import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BlogPost.css'; // Import the CSS for styling

function BlogPost() {
  const { postId } = useParams();
  const navigate = useNavigate();
  
  // Here you would fetch your data from an API or server using the postId
  const post = {
    id: postId,
    title: 'The Journey to Sustainable Farming',
    content: `
      <p>As we delve deeper into the impact of our choices on the environment, sustainable farming practices have become more than just a trend—they are a necessity. In this article, we explore the innovative approaches farmers are taking to produce organic food while caring for our planet.</p>
      <h2>Understanding Sustainable Practices</h2>
      <p>Sustainable farming involves... (additional content)...</p>
    `,
    // ...other data
  };

  // Function to handle the back action
  const handleBack = () => {
    navigate(-1);
  };
  
  return (
    <article className="blog-post">
      <button className="back-button" onClick={handleBack}>Back</button>
      <h1 className="post-title">{post.title}</h1>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}

export default BlogPost;
