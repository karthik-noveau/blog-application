import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { CreateBlogForm } from "./form";

import styles from "./style.module.css";

export const CreateBlog = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const loginInfo = JSON.parse(localStorage.getItem("blog-accountDetails"));

  const onBlogCreate = async (values) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/v1/blog/create-blog`,
        {
          userId: loginInfo.id,
          title: values.title,
          description: values.description,
          image: values.imageURL,
        }
      );
      if (data.success) {
        setIsLoading(false);
        navigate("/user-blogs");
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  const onFormFailed = (errorInfo) => {};

  return (
    <div className={styles.createBlogContainer}>
      <p className={styles.title}>Create a Blog</p>
      <div className={styles.formWrapper}>
        <CreateBlogForm
          onFormFailed={onFormFailed}
          onBlogCreate={onBlogCreate}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};
