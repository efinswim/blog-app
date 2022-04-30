import React from 'react';
import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

const CardPage = () => {
  const {id} = useParams()
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
  }, [id]);


  return (
    <div key={id}>
      {
        post && (
          <>
            <Typography align="center" variant="h2" gutterBottom component="div">
              {post.title}
            </Typography>
            <Typography align="left" variant="body1" gutterBottom>
              {post.body}
            </Typography>
          </>
        )
      }

    </div>
  );
};

export default CardPage;