import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { mongodbDateConvertion } from "../../components/mongodb_date_convertion";
import { Card } from "../../components/card";

import styles from "./style.module.css";

import { EmptyState } from "../../components/empty_state";

import emptyFolder from "../../assets/blogs/emptyFolder.png";
import { blogActions } from "../../redux/store";

export function UserBlogs() {
  const [blogsList, setBlogsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { loginInfo, isBlogDeleted } = useSelector((state) => ({
    loginInfo: state.auth.loginInfo,
    isBlogDeleted: state.blog.isBlogDeleted,
  }));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getUserBlogs();
  }, []);

  useEffect(() => {
    getUserBlogs();
  }, [isBlogDeleted]);

  const getUserBlogs = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://blog-application-hrw2.onrender.com/api/v1/blog/user-blogs/${loginInfo.id}`
      );
      if (data.success) {
        setBlogsList(data.userBlogs.blogs);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  const onUpdateBlog = (data) => {
    navigate(`/blog-details/${data._id}`);
  };

  const onDeleteBlog = async (info) => {
    setIsLoading(true);
    const { data } = await axios.delete(
      `https://blog-application-hrw2.onrender.com/api/v1/blog/delete-blog/${info._id}`
    );
    if (data.success) {
      dispatch(blogActions.setIsBlogDeleted(true));
      setIsLoading(false);
    }
  };

  function renderBlogs() {
    if (isLoading) {
      return <div className={styles.emptyStateWrapper}>loading...</div>;
    } else if (blogsList.length === 0) {
      return (
        <div className={styles.emptyStateWrapper}>
          <EmptyState image={emptyFolder} />
        </div>
      );
    } else {
      return (
        <div className={styles.blogsWrapper}>
          <div className={styles.blogsContainer}>
            {blogsList.map((blog) => {
              return (
                <Card
                  data={{
                    ...blog,
                    time: mongodbDateConvertion(blog.createdAt),
                  }}
                  allowEditIcons={true}
                  onDeleteBlog={onDeleteBlog}
                  onUpdateBlog={onUpdateBlog}
                />
              );
            })}
          </div>
        </div>
      );
    }
  }

  return <React.Fragment>{renderBlogs()}</React.Fragment>;
}
