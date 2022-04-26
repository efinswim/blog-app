import './App.css';
import {useState, useEffect} from "react";
import axios from "axios";
import BlogCard from "./components/BlogCard";

function App() {
  const [posts, setPosts] = useState([])

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div>
      {
        posts.map((post) =>
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
