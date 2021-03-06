import React from 'react';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import classes from './CardPage';
import Loader from '../components/Loader';
import { Card } from '@mui/material';

const CardPage = () => {
  const params = useParams();
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);

  useEffect(() => {
    fetchComments(params.id);
  }, []);

  const [fetchComments, isCommentsLoading, commentsError] = useFetching(async () => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  });

  return (
    <Card sx={{ maxWidth: 800 }}>
      <div key={id}>
        {post && (
          <>
            <Typography align="center" variant="h2" gutterBottom component="div">
              {post.title}
            </Typography>
            <Typography align="center" variant="body1" gutterBottom>
              {post.body}
            </Typography>
            <Typography align="center" variant="body2" gutterBottom component="div">
              Комментарии
            </Typography>
            {isCommentsLoading ? (
              <Loader />
            ) : (
              <div>
                {comments.map((comment) => (
                  <div>
                    <Typography align="center" variant="body2" gutterBottom component="div">
                      {comment.email}
                    </Typography>
                    <Typography align="center" variant="body2" gutterBottom component="div">
                      {comment.body}
                    </Typography>
                    <Typography align="center" variant="h3" gutterBottom component="div">
                      {comment.name}
                    </Typography>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </Card>
  );
};

export default CardPage;
