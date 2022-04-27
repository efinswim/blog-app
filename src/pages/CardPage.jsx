import React from 'react';
import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";

const CardPage = () => {
  const {id} = useParams()
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
  }, [id]);

  return (
    <div>
      {id}
      {
        post && (
          <>
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
            <h1>hyi</h1>
          </>
        )
      }

    </div>
  );
};

export default CardPage;