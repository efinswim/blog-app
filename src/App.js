import './App.css';
import {useState, useEffect} from "react";
import axios from "axios";
import BlogCard from "./components/BlogCard";
import FilterCard from "./components/FilterCard";
import React from "react";

function App() {
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
    <div>
      <FilterCard
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
      />
      {
        filterPosts.map((post) =>
          <div key={post.id}>
            <BlogCard
              body={post.body}
              title={post.title}
            />
          </div>

        )
      }
    </div>
  );
}

export default App;
