import axios from "axios";
import React, { useEffect, useState } from "react";

import { mongodbDateConvertion } from "../../components/mongodb_date_convertion";
import { Card } from "../../components/card";

import styles from "./style.module.css";

import { EmptyState } from "../../components/empty_state";

import emptyFolder from "../../assets/blogs/emptyFolder.png";

export function AllBlogs() {
  const [blogsList, setBlogsList] = useState([]);
  const [updatedBlogsList, setUpdatedBlogsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllBlogs();
  }, []);

  const getAllBlogs = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("/api/v1/blog/all-blogs");
      if (data.success) {
        setBlogsList(data.blogs);
        setUpdatedBlogsList(data.blogs.filter((blog, index) => index < 9));
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  function renderBlogs() {
    if (isLoading) {
      return <div>loading...</div>;
    } else if (updatedBlogsList.length === 0) {
      return (
        <div className={styles.emptyStateWrapper}>
          <EmptyState image={emptyFolder} />
        </div>
      );
    } else {
      return (
        <div className={styles.blogsWrapper}>
          <div className={styles.blogsContainer}>
            {updatedBlogsList.map((blog) => {
              let data = {
                image: blog.image,
                title: blog.title,
                time: mongodbDateConvertion(blog.createdAt),
                description: blog.description,
              };
              return <Card data={data} />;
            })}
          </div>
        </div>
      );
    }
  }

  return <React.Fragment>{renderBlogs()}</React.Fragment>;
}
