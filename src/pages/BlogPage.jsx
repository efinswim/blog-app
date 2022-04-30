import React from 'react';
import FilterCard from "../components/FilterCard";
import BlogCard from "../components/BlogCard";
import {useEffect, useState} from "react";
import axios from "axios";
import classes from "./BlogPage.module.css"

const BlogPage = () => {
  const [posts, setPosts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const filterPosts = posts.filter(post => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase())
  })

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])


  return (
    <div className={classes.blog__page}>
      <FilterCard
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
      />
      {
        filterPosts.map((post) =>
            <BlogCard
              id={post.id}
              body={post.body}
              title={post.title}
              className="blogcard"
            />
        )
      }
    </div>
  );
};

export default BlogPage;