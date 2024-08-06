import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { mongodbDateConvertion } from "../../components/mongodb_date_convertion";
import { Card } from "../../components/card";

import { Loader } from "../../components/Loader/Loader";
import { EmptyState } from "../../components/empty_state";

import styles from "./style.module.css";

import emptyFolder from "../../assets/blogs/emptyFolder.png";

export function UserBlogs() {
  const [blogsList, setBlogsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { loginInfo } = useSelector((state) => ({
    loginInfo: state.auth.loginInfo,
  }));
  const navigate = useNavigate();

  useEffect(() => {
    getUserBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserBlogs = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/v1/blog/user-blogs/${loginInfo.id}`
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
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/api/v1/blog/delete-blog/${info._id}`
      );
      if (data.success) {
        getUserBlogs();
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  function renderBlogs() {
    if (isLoading) {
      return <Loader />;
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
