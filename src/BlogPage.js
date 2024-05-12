import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';

function BlogPage() {
  // Mock data for blog posts, replace with real data
  const blogPosts = [
    {
      id: 1,
      title: 'The Benefits of Organic Eating',
      excerpt: 'Discover the health and environmental benefits of switching to an organic diet.',
      thumbnail: 'path-to-image-1.jpg',
    },
    // ... add more blog posts as needed
  ];

  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>Organic Insights</h1>
        <p>Delve into our articles on organic living, sustainability, and wholesome eating.</p>
      </header>

      <section className="blog-posts">
        {blogPosts.map((post) => (
          <article key={post.id} className="post">
            <img src={post.thumbnail} alt={post.title} className="post-thumbnail" />
            <div className="post-content">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-excerpt">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="read-more-btn">
                Read More
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default BlogPage;
