import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { CreateBlogForm } from "./form";

import styles from "./style.module.css";

export const CreateBlog = () => {
  const navigate = useNavigate();
  const loginInfo = JSON.parse(localStorage.getItem("blog-accountDetails"));

  const onBlogCreate = async (values) => {
    console.log(values, loginInfo);
    try {
      const { data } = await axios.post(
        "https://blog-application-hrw2.onrender.com/api/v1/blog/create-blog",
        {
          userId: loginInfo.id,
          title: values.title,
          description: values.description,
          image: values.imageURL,
        }
      );
      if (data.success) {
        navigate("/user-blogs");
      }
    } catch (error) {
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
        />
      </div>
    </div>
  );
};
