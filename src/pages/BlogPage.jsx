import React, { useRef } from "react";
import FilterCard from "../components/FilterCard";
import BlogCard from "../components/BlogCard";
import { useEffect, useState } from "react";
import classes from "./BlogPage.module.css";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import { getPageCount, getPagesArray } from "../utils/pages";
import { useObserver } from '../hooks/useObserver';
import Loader from '../components/Loader';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage(page + 1)
  })

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const filterPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className={classes.blog__page}>
      <FilterCard
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      {filterPosts.map((post) => (
        <BlogCard
          id={post.id}
          body={post.body}
          title={post.title}
        />
      ))}

      <div ref={lastElement} />
      {isPostLoading && <Loader />}
    </div>
  );
};

export default BlogPage;
