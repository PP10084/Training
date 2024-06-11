import React from 'react';
import BlogCard from './BlogCard';
import indiacyber from "./assets/cybersecurity.jpg";
import webvuln from "./assets/webvuln.jpg"
import { Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    image: indiacyber,
    heading: "Strengthening India's Cyber Defenses:",
    subhead: "Revealing the Hidden Layers",
    component:"Cybersecurity"
  },
  {
  id: 2,
  image: webvuln,
  heading:" Understanding Common Web Vulnerabilities:" ,
  subhead: "Protecting Your Online Presence",
  component:"WebVulnerabilities"
}
  
];

const Blogs = () => {
//   const handleReadMore = (component) => {
//     <Link to={`/blogs/${component}`}></Link>
//     console.log(component)
//   };
function scrollToTop() {
  window.scrollTo(0, 0);
}

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(blog => (
            <Link to={`/blogs/${blog.component}`} onClick={scrollToTop}>
          <BlogCard
            key={blog.id}
            image={blog.image}
            heading={blog.heading}
            subhead={blog.subhead}
            component ={blog.component}
            
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
