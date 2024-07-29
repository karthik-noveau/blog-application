import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

import { UpdateBlogForm } from "./form";

import styles from "./style.module.css";

export const UpdateBlog = () => {
  const navigate = useNavigate();
  const { loginInfo } = useSelector((state) => ({
    loginInfo: state.auth.loginInfo,
  }));
  const blogId = useParams().id;
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    getBlogData();
  }, []);

  const getBlogData = async () => {
    const { data } = await axios.get(`/api/v1/blog/get-blog/${blogId}`);
    if (data.success) {
      setBlogData(data.blog);
    }
  };

  const onBlogUpdate = async (values) => {
    try {
      const { data } = await axios.put(`/api/v1/blog/update-blog/${blogId}`, {
        userId: loginInfo.id,
        title: values.title,
        description: values.description,
        image: values.image,
      });
      if (data.success) {
        navigate("/user-blogs");
      }
    } catch {}
  };

  const onFormFailed = (errorInfo) => {};

  return (
    <div className={styles.createBlogContainer}>
      <p className={styles.title}>Update a Blog</p>
      <div className={styles.formWrapper}>
        <UpdateBlogForm
          onFormFailed={onFormFailed}
          onFormUpdate={onBlogUpdate}
          blogData={blogData}
        />
      </div>
    </div>
  );
};
